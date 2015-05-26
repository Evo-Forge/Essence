'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'MenuItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      isMobile: Utils.mobile.isMobile(),
      activeItems: [],
      classes: {
        'divider': this.props.options && this.props.options.type === 'divider',
        'more': this.props.options && this.props.options.type === 'more'
      }
    };
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    if (childrens === 1) {
      children.push(self.props.children);
    } else if (children > 0) {
      self.props.children.map(function (item) {
        children.push(item);
      });
    }

    return children;
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    var self = this;
    self.renderChildren();
  },

  handleActive: function handleActive(ev) {
    var self = this,
        target = ev.currentTarget,
        currentID = target.id,
        currentIndex = self.state.activeItems.indexOf(currentID),
        activeItems = self.state.activeItems;

    if (currentIndex > -1) {
      activeItems.splice(currentIndex, 1);
    } else {
      activeItems.push(currentID);
    }

    self.setState({
      activeItems: activeItems
    });
  },

  handleEventAction: function handleEventAction(ev) {
    var self = this,
        target = ev.currentTarget,
        targetText = target.textContent;

    if (self.props.eventAction) {
      self.props.eventAction.split(' ').map(function (eventA) {

        if (eventA === 'changeText') {
          self.publish(eventA + '_text-for-' + self.props.id, targetText);
        } else {
          self.publish(eventA + '_for_' + self.props.id, ev);
        }
      });
    }
  },

  renderItems: function renderItems(options) {
    var self = this,
        id = self.props.id,
        items = [];

    if (options && options.length > 0) {
      options.map(function (value, index) {
        var text = value.text || false,
            type = value.type || false,
            link = value.link || '#';

        if (type === 'divider') {
          items.push(React.createElement('li', { className: 'divider', key: 'parent-' + id + '-divider-' + index }));
        }

        if (value.items && value.items.length > 0) {
          var liID = encodeURI('more-' + index + '-' + text + link + value.items.length),
              isActiveID = self.state.activeItems.indexOf(liID),
              isActive = isActiveID > -1 ? 'active' : '';

          items.push(React.createElement(
            'li',
            {
              onClick: self.handleActive,
              className: 'more ' + isActive,
              id: liID,
              key: liID
            },
            React.createElement(
              'a',
              { href: 'javascript:;' },
              text,
              React.createElement('i', { className: 'e-icon-navigation-chevron-right' })
            ),
            React.createElement(
              'ul',
              { className: 'e-nav e-paper e-shadow-1' },
              self.renderItems(value.items)
            )
          ));
        }

        if (type !== 'divider' && !value.items) {
          items.push(React.createElement(
            'li',
            {
              onClick: self.handleEventAction,
              key: 'parent-' + id + '-link-' + index
            },
            React.createElement(
              'a',
              { href: link },
              text
            )
          ));
        }
      });

      if (items.length > 0) {
        return items;
      }
    }

    return React.createElement(
      'li',
      {
        onClick: self.handleEventAction,
        key: 'parent-' + id + '-link'
      },
      self.props.children
    );
  },

  render: function render() {
    var self = this,
        options = self.props.options,
        classes = {
      'e-nav': true,
      'right': self.props.right,
      'e-paper': true,
      'e-shadow-1': true,
      'hide': self.props.hide
    };

    classes = classSet(classes);

    if (!options) {
      var liClasses = {};

      if (self.props.classes) {
        liClasses = Utils.classNames(liClasses, self.props.classes);
      }

      liClasses = classSet(liClasses);

      return React.createElement(
        'li',
        {
          onClick: self.props.onClick,
          key: 'parent-' + self.props.id + '-link',
          className: liClasses
        },
        self.props.children
      );
    }

    return React.createElement(
      'ul',
      {
        className: classes,
        id: self.props.id
      },
      self.renderItems(options)
    );
  }
});