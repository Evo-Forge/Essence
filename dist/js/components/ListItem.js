'use strict';

var React = require('react/addons'),
    Icon = require('./Icon'),
    ListItemElement = require('./ListItemElement'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'ListItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      classes: {},
      clickPosition: {
        x: 0,
        y: 0
      },
      dragCSS: {},
      isActive: null,
      activeItem: null,
      expandSubmenu: '',
      fromElement: 0,
      toElement: 0
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = self.props.classes || [];

    self.setState({
      classes: classes
    });
  },

  dragStart: function dragStart(event) {
    var self = this,
        element = event.currentTarget;

    self.setState({
      dragCSS: {},
      fromElement: Number(element.id) });

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', element);
  },

  dragEnd: function dragEnd(ev) {
    var element = ev.target;
    console.log([element, ev]);
  },

  dragOver: function dragOver(ev) {
    var self = this,
        elementId = ev.currentTarget;

    self.setState({
      dragCSS: {},
      toElement: Number(elementId.id) });
  },

  hideNavigation: function hideNavigation(data) {
    var self = this,
        parentPosition = Utils.position.get(data.currentTarget),
        clickPosition = Utils.position.clicked(data, parentPosition),
        bgColor = Utils.backgroundColor(data),
        target = data.currentTarget,
        targetText = target.textContent;

    if (self.props.eventAction) {
      self.props.eventAction.split(' ').map(function (ev) {
        if (ev === 'changeText') {
          self.publish(ev + '_' + self.props.changeTextId, targetText);
        } else {
          self.publish(ev + '_for_' + self.props.id, data);
        }
      });
    }

    this.publish('hideNavigation', true);
    this.publish('showNavigationComponent', data);

    this.setState({
      bgColor: bgColor,
      clickPosition: clickPosition
    });
  },

  renderChildren: function renderChildren() {
    var self = this,
        classes = classSet(Utils.classNames(self.state.classes, self.props.classes)),
        childrens = React.Children.count(self.props.children),
        inputName = self.props.inputName ? self.props.inputName : '',
        contentLink = self.props.contentLink ? self.props.contentLink : '',
        contentText = self.props.contentText ? self.props.contentText : '',
        contentTitle = self.props.contentTitle ? self.props.contentTitle : '',
        contentSubTitle = self.props.contentSubTitle ? self.props.contentSubTitle : '',
        avatarLink = self.props.avatarLink ? self.props.avatarLink : '',
        avatarImg = self.props.avatarImg ? self.props.avatarImg : '',
        avatarAlt = self.props.avatarAlt ? self.props.avatarAlt : '',
        primaryListImage = false,
        position = self.props.position ? self.props.position : false,
        hasMore = null,
        hasMenu = null,
        submenuItems = [],
        navigationItems = [];

    if (self.props.listType === 'checkbox') {
      if (position === 'right') {
        return React.createElement(
          'li',
          { className: classes },
          React.createElement(
            'a',
            { href: avatarLink },
            React.createElement(
              'span',
              { className: 'e-list-content' },
              React.createElement('img', {
                className: 'e-list-icon',
                src: avatarImg,
                alt: avatarAlt }),
              React.createElement(
                'span',
                null,
                contentText
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'e-checkbox' },
            React.createElement(
              'label',
              null,
              React.createElement('input', {
                type: 'checkbox',
                name: inputName,
                className: 'toggle',
                defaultChecked: self.props.isChecked }),
              React.createElement('span', { className: 'e-wave' }),
              React.createElement('span', { className: 'e-check-valid' })
            )
          )
        );
      }

      return React.createElement(
        'li',
        { className: classes },
        React.createElement(
          'div',
          { className: 'e-checkbox' },
          React.createElement(
            'label',
            { className: 'e-list-content' },
            React.createElement('input', {
              type: 'checkbox',
              name: inputName,
              className: 'toggle',
              defaultChecked: self.props.isChecked }),
            React.createElement('span', { className: 'e-wave' }),
            React.createElement('span', { className: 'e-check-valid' }),
            React.createElement(
              'span',
              null,
              contentText
            )
          )
        ),
        React.createElement(
          'a',
          { href: avatarLink },
          React.createElement(Icon, { classes: 'e-list-icon', name: self.props.icon })
        )
      );
    }

    if (self.props.listType === 'switch') {
      var showSwitchBox = '';

      if (!self.props.isHidden) {
        showSwitchBox = React.createElement(
          'div',
          { className: 'e-switches' },
          React.createElement(
            'label',
            null,
            React.createElement('input', {
              type: 'checkbox',
              defaultChecked: self.props.isChecked,
              name: inputName }),
            React.createElement('span', { className: 'e-switches-toggle' })
          )
        );
      }
      return React.createElement(
        'li',
        { className: classes },
        React.createElement(
          'a',
          { href: avatarLink },
          React.createElement(
            'span',
            { className: 'e-list-content-fake' },
            React.createElement(Icon, { classes: 'e-list-icon', name: self.props.icon }),
            React.createElement(
              'span',
              null,
              contentText
            )
          )
        ),
        showSwitchBox
      );
    }

    if (self.props.listType === 'reorder') {
      return React.createElement(
        'li',
        {
          id: self.props.id,
          draggable: true,
          onDragEnd: self.dragEnd,
          onDragStart: self.dragStart,
          onDragOver: self.dragOver,
          style: self.state.dragCSS,
          className: classes
        },
        React.createElement(
          'a',
          { href: avatarLink },
          React.createElement(
            'span',
            { className: 'e-list-content' },
            React.createElement('img', {
              className: 'e-list-avatar',
              src: avatarImg,
              alt: avatarAlt }),
            React.createElement(
              'span',
              null,
              contentText
            )
          )
        ),
        React.createElement(
          'a',
          { href: avatarLink },
          React.createElement(Icon, { classes: 'e-list-icon', name: self.props.icon })
        )
      );
    }

    if (self.props.listType === 'navigation') {
      var activeClass = self.props.isActive ? 'active' : null;

      if (self.props.more) {
        hasMore = React.createElement(Icon, { classes: 'e-right', name: 'hardware-keyboard-arrow-down' });
      }

      if (self.props.primaryListImage) {
        primaryListImage = React.createElement('img', {
          className: 'primaryListImage',
          src: self.props.primaryListImage,
          alt: contentText });
      }

      if (self.props.hasSubmenu) {
        self.props.children.map(function (i, k) {
          var item = i;

          item = React.addons.cloneWithProps(i, {
            id: k,
            key: k,
            onClick: self.hideNavigation
          });

          navigationItems.push(item);
        });

        return React.createElement(
          'li',
          { className: activeClass },
          React.createElement(
            'a',
            {
              href: contentLink,
              onClick: self.showSubmenu,
              id: self.props.id
            },
            primaryListImage,
            contentText
          ),
          React.createElement(
            'ul',
            { className: 'e-sublist-navigation' },
            navigationItems
          )
        );
      }

      if (self.props.submenu) {

        self.props.submenu.map(function (v, k) {
          submenuItems.push(React.createElement(ListItemElement, {
            element: v,
            key: k,
            id: self.props.id,
            _onClick: self.hideNavigation
          }));
        });

        hasMenu = React.createElement(
          'ul',
          { className: 'e-sublist-navigation' },
          submenuItems
        );
      }

      return React.createElement(
        'li',
        { className: self.state.isActive },
        React.createElement(
          'a',
          {
            href: avatarLink,
            onClick: self.showSubmenu,
            id: self.props.id
          },
          primaryListImage,
          contentText,
          hasMore
        ),
        hasMenu
      );
    }

    if (self.props.listType === 'expand') {
      if (self.props.more) {
        hasMore = React.createElement(Icon, { classes: 'e-right', name: 'hardware-keyboard-arrow-down' });
      }

      if (self.props.submenu) {
        self.props.submenu.map(function (v, k) {
          submenuItems.push(React.createElement(
            'li',
            {
              key: k,
              className: classes
            },
            React.createElement(
              'a',
              { href: v.link },
              v.text
            )
          ));
        });

        hasMenu = React.createElement(
          'ul',
          { className: 'e-sublist-navigation' },
          submenuItems
        );
      }

      // Avatar - testing version
      /*if (self.props.icon && self.props.avatarImg) {
        return (
          <li className={self.state.isActive}>
            <a href={avatarLink} onClick={self.showSubmenu}>
              <span className="e-list-content">
                {self.hasAvatar()}
                {contentText}
              </span>
              {hasMore}
            </a>
            {hasMenu}
          </li>
        );
      }*/

      return React.createElement(
        'li',
        { className: self.state.isActive },
        React.createElement(
          'a',
          { href: avatarLink, onClick: self.showSubmenu },
          contentText,
          hasMore
        ),
        hasMenu
      );
    }

    if (self.props.listType === 'single-line') {

      if (self.props.icon && self.props.avatarImg) {
        return React.createElement(
          'li',
          { className: classes },
          React.createElement(
            'a',
            { href: avatarLink },
            React.createElement(
              'span',
              { className: 'e-list-content' },
              self.hasAvatar(),
              React.createElement(
                'span',
                null,
                contentText
              )
            )
          ),
          React.createElement(
            'a',
            { href: contentLink },
            self.hasIcon()
          )
        );
      }

      return React.createElement(
        'li',
        { className: classes },
        React.createElement(
          'a',
          { href: contentLink },
          React.createElement(
            'span',
            { className: 'e-list-content' },
            self.hasIcon(),
            self.hasAvatar(),
            React.createElement(
              'span',
              null,
              contentText
            )
          )
        )
      );
    }

    if (self.props.listType === 'two-line') {
      if (self.props.icon) {
        return React.createElement(
          'li',
          { className: classes },
          React.createElement(
            'a',
            { href: avatarLink },
            React.createElement(
              'span',
              { className: 'e-list-content' },
              self.hasAvatar(),
              React.createElement(
                'span',
                null,
                React.createElement(
                  'strong',
                  null,
                  contentTitle
                ),
                React.createElement('br', null),
                contentText
              )
            )
          ),
          React.createElement(
            'a',
            { href: contentLink },
            self.hasIcon()
          )
        );
      }

      return React.createElement(
        'li',
        { className: classes },
        React.createElement(
          'a',
          { href: contentLink },
          React.createElement(
            'span',
            { className: 'e-list-content' },
            self.hasIcon(),
            self.hasAvatar(),
            React.createElement(
              'span',
              null,
              React.createElement(
                'strong',
                null,
                contentTitle
              ),
              React.createElement('br', null),
              contentText
            )
          )
        )
      );
    }

    if (self.props.listType === 'multi-line') {
      if (self.props.icon) {
        return React.createElement(
          'li',
          { className: classes },
          React.createElement(
            'a',
            { href: avatarLink },
            React.createElement(
              'span',
              { className: 'e-list-content' },
              self.hasAvatar(),
              React.createElement(
                'span',
                null,
                React.createElement(
                  'strong',
                  null,
                  contentTitle
                ),
                React.createElement('br', null),
                React.createElement(
                  'em',
                  null,
                  contentSubTitle
                ),
                React.createElement('br', null),
                contentText
              )
            )
          ),
          React.createElement(
            'a',
            { href: contentLink },
            self.hasIcon()
          )
        );
      }

      return React.createElement(
        'li',
        { className: classes },
        React.createElement(
          'a',
          { href: contentLink },
          React.createElement(
            'span',
            { className: 'e-list-content' },
            self.hasIcon(),
            self.hasAvatar(),
            React.createElement(
              'span',
              null,
              React.createElement(
                'strong',
                null,
                contentTitle
              ),
              React.createElement('br', null),
              React.createElement(
                'em',
                null,
                contentSubTitle
              ),
              React.createElement('br', null),
              contentText
            )
          )
        )
      );
    }

    if (self.props.listType === 'big-icon') {
      return React.createElement(
        'li',
        { className: 'brick brick-4' },
        React.createElement(
          'a',
          { href: contentLink },
          self.hasIcon(),
          React.createElement(
            'span',
            { className: 'e-bs-title' },
            contentTitle
          )
        )
      );
    }

    if (childrens > 0) {
      return self.props.children;
    }

    return React.createElement(
      'li',
      { className: classes },
      React.createElement(
        'a',
        { href: contentLink },
        self.hasIcon(),
        self.hasAvatar(),
        React.createElement(
          'span',
          null,
          contentText
        )
      )
    );
  },

  hasIcon: function hasIcon() {
    var self = this,
        icon = self.props.icon ? self.props.icon : null;

    if (icon) {
      return React.createElement(Icon, { classes: 'e-list-icon', name: self.props.icon });
    }

    return null;
  },

  hasAvatar: function hasAvatar() {
    var self = this,
        avatarImg = self.props.avatarImg ? self.props.avatarImg : null,
        avatarAlt = self.props.avatarAlt ? self.props.avatarAlt : null;

    if (avatarImg) {
      return React.createElement('img', { className: 'e-list-avatar', src: avatarImg, alt: avatarAlt });
    }

    return null;
  },

  showSubmenu: function showSubmenu(ev) {
    var self = this;

    self.publish('actions:list', {
      action: 'active', id: self.props.id
    });

    self.setState({
      activeItem: self.props.id
    });

    ev.preventDefault();
  },

  render: function render() {
    var self = this;

    return self.renderChildren();
  }
});

// position: 'absolute',
// top: element.offsetLeft + "px"

// position: false