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

    getInitialState: function() {
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

    componentDidMount: function () {
      var self = this,
          classes = self.props.classes || [];

      self.setState({
        classes: classes
      });
    },

    dragStart: function(event) {
      var self = this,
          element = event.currentTarget;

      self.setState({
        dragCSS: {
          // position: 'absolute',
          // top: element.offsetLeft + "px"
        },
        fromElement: Number(element.id),
      });

      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData("text/html", element);
    },

    dragEnd: function(ev) {
      var element = ev.target;
      console.log([element, ev]);
    },

    dragOver: function(ev) {
      var self = this,
          elementId = ev.currentTarget;

      self.setState({
        dragCSS: {
          // position: false
        },
        toElement: Number(elementId.id),
      });
    },

    hideNavigation: function (data) {
      var self = this,
          parentPosition = Utils.position.get(data.currentTarget),
          clickPosition = Utils.position.clicked(data, parentPosition),
          bgColor = Utils.backgroundColor(data),
          target = data.currentTarget,
          targetText = target.textContent;

      if (self.props.eventAction) {
        (self.props.eventAction.split(" ")).map(function(ev) {
          if (ev === "changeText") {
            self.publish(
              ev + '_' + self.props.changeTextId, targetText
            );
          } else {
            self.publish(
              ev + '_for_' + self.props.id, data
            );
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

    renderChildren: function () {
      var self = this,
          classes = classSet( Utils.classNames(self.state.classes, self.props.classes) ),
          childrens = React.Children.count(self.props.children),
          inputName = (self.props.inputName) ? self.props.inputName : '',
          contentLink = (self.props.contentLink) ? self.props.contentLink : '',
          contentText = (self.props.contentText) ? self.props.contentText : '',
          contentTitle = (self.props.contentTitle) ? self.props.contentTitle : '',
          contentSubTitle = (self.props.contentSubTitle) ? self.props.contentSubTitle : '',
          avatarLink = (self.props.avatarLink) ? self.props.avatarLink : '',
          avatarImg = (self.props.avatarImg) ? self.props.avatarImg : '',
          avatarAlt = (self.props.avatarAlt) ? self.props.avatarAlt : '',
          primaryListImage = false,
          position = (self.props.position) ? self.props.position : false,
          hasMore = null,
          hasMenu = null,
          submenuItems = [],
          navigationItems = [];

      if (self.props.listType === 'checkbox') {
        if (position === 'right') {
          return (
            <li className={classes}>
              <a href={avatarLink}>
                  <span className={"e-list-content"}>
                    <img
                      className={"e-list-icon"}
                      src={avatarImg}
                      alt={avatarAlt}/>
                    <span>{contentText}</span>
                  </span>
              </a>
              <div className={"e-checkbox"}>
                <label>
                  <input
                    type="checkbox"
                    name={inputName}
                    className={"toggle"}
                    defaultChecked={self.props.isChecked}/>
                  <span className={"e-wave"}></span>
                  <span className={"e-check-valid"}></span>
                </label>
              </div>
            </li>
          );
        }

        return (
          <li className={classes}>
            <div className={"e-checkbox"}>
              <label className={"e-list-content"}>
                <input
                  type="checkbox"
                  name={inputName}
                  className={"toggle"}
                  defaultChecked={self.props.isChecked}/>
                <span className={"e-wave"} />
                <span className={"e-check-valid"} />
                <span>{contentText}</span>
              </label>
            </div>
            <a href={avatarLink}>
              <Icon classes={"e-list-icon"} name={self.props.icon} />
            </a>
          </li>
        );
      }

      if (self.props.listType === 'switch') {
        var showSwitchBox = '';

        if (!self.props.isHidden) {
          showSwitchBox = (
            <div className="e-switches">
              <label>
                <input
                  type="checkbox"
                  defaultChecked={self.props.isChecked}
                  name={inputName}/>
                <span className={"e-switches-toggle"} />
              </label>
            </div>
          );
        }
        return (
          <li className={classes}>
            <a href={avatarLink}>
              <span className={"e-list-content-fake"}>
                <Icon classes={"e-list-icon"} name={self.props.icon} />
                <span>{contentText}</span>
              </span>
            </a>
            {showSwitchBox}
          </li>
        );
      }

      if (self.props.listType === 'reorder') {
        return (
          <li
            id={self.props.id}
            draggable={true}
            onDragEnd={self.dragEnd}
            onDragStart={self.dragStart}
            onDragOver={self.dragOver}
            style={self.state.dragCSS}
            className={classes}
          >
            <a href={avatarLink}>
                <span className={"e-list-content"}>
                  <img
                      className={"e-list-avatar"}
                      src={avatarImg}
                      alt={avatarAlt}/>
                  <span>{contentText}</span>
                </span>
            </a>
            <a href={avatarLink}>
              <Icon classes={"e-list-icon"} name={self.props.icon} />
            </a>
          </li>
        );
      }

      if (self.props.listType === 'navigation') {
        var activeClass = (self.props.isActive) ? 'active' : null;

        if (self.props.more) {
          hasMore = (
            <Icon classes={"e-right"} name='hardware-keyboard-arrow-down' />
          );
        }

        if (self.props.primaryListImage) {
          primaryListImage = (
            <img
              className={'primaryListImage'}
              src={self.props.primaryListImage}
              alt={contentText}/>
          );
        }

        if (self.props.hasSubmenu) {
          self.props.children.map(function (i, k) {
            var item = i;

            item = (
              React.addons.cloneWithProps(i, {
                id: k,
                key: k,
                onClick: self.hideNavigation
              })
            );

            navigationItems.push(item);
          });

          return (
            <li className={activeClass}>
              <a
                href={contentLink}
                onClick={self.showSubmenu}
                id={self.props.id}
              >
                  {primaryListImage}
                  {contentText}
              </a>
              <ul className={"e-sublist-navigation"}>
                {navigationItems}
              </ul>
            </li>
          );
        }

        if (self.props.submenu) {

          self.props.submenu.map(function (v, k) {
            submenuItems.push(
              <ListItemElement
                element={v}
                key={k}
                id={self.props.id}
                _onClick={self.hideNavigation}
              >
              </ListItemElement>
            );
          });

          hasMenu = (
            <ul className={"e-sublist-navigation"}>
              {submenuItems}
            </ul>
          );
        }

        return (
          <li className={self.state.isActive}>
            <a
              href={avatarLink}
              onClick={self.showSubmenu}
              id={self.props.id}
            >
                {primaryListImage}
                {contentText}
                {hasMore}
            </a>
            {hasMenu}
          </li>
        );
      }

      if (self.props.listType === 'expand') {
        if (self.props.more) {
          hasMore = (
            <Icon classes={"e-right"} name='hardware-keyboard-arrow-down' />
          );
        }

        if (self.props.submenu) {
          self.props.submenu.map(function (v, k) {
            submenuItems.push(
              <li
                key={k}
                className={classes}
                >
                <a href={v.link}>
                  {v.text}
                </a>
              </li>
            );
          });

          hasMenu = (
            <ul className={"e-sublist-navigation"}>
              {submenuItems}
            </ul>
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

        return (
          <li className={self.state.isActive}>
            <a href={avatarLink} onClick={self.showSubmenu}>
                {contentText}
                {hasMore}
            </a>
            {hasMenu}
          </li>
        );
      }

      if (self.props.listType === 'single-line') {

        if (self.props.icon && self.props.avatarImg) {
          return (
            <li className={classes}>
              <a href={avatarLink}>
                <span className="e-list-content">
                  {self.hasAvatar()}
                  <span>{contentText}</span>
                </span>
              </a>
              <a href={contentLink}>
                {self.hasIcon()}
              </a>
            </li>
          );
        }

        return (
          <li className={classes}>
            <a href={contentLink}>
              <span className="e-list-content">
                {self.hasIcon()}
                {self.hasAvatar()}
                <span>{contentText}</span>
              </span>
            </a>
          </li>
        );
      }

      if (self.props.listType === 'two-line') {
        if (self.props.icon) {
          return (
            <li className={classes}>
              <a href={avatarLink}>
                <span className="e-list-content">
                  {self.hasAvatar()}
                  <span>
                    <strong>{contentTitle}</strong>
                    <br />
                    {contentText}
                  </span>
                </span>
              </a>
              <a href={contentLink}>
                {self.hasIcon()}
              </a>
            </li>
          );
        }

        return (
          <li className={classes}>
            <a href={contentLink}>
              <span className="e-list-content">
                {self.hasIcon()}
                {self.hasAvatar()}
                <span>
                  <strong>{contentTitle}</strong>
                  <br />
                  {contentText}
                </span>
              </span>
            </a>
          </li>
        );
      }

      if (self.props.listType === 'multi-line') {
        if (self.props.icon) {
          return (
            <li className={classes}>
              <a href={avatarLink}>
                <span className="e-list-content">
                  {self.hasAvatar()}
                  <span>
                    <strong>{contentTitle}</strong>
                    <br />
                    <em>{contentSubTitle}</em>
                    <br />
                    {contentText}
                  </span>
                </span>
              </a>
              <a href={contentLink}>
                {self.hasIcon()}
              </a>
            </li>
          );
        }

        return (
          <li className={classes}>
            <a href={contentLink}>
              <span className="e-list-content">
                {self.hasIcon()}
                {self.hasAvatar()}
                <span>
                  <strong>{contentTitle}</strong>
                  <br />
                  <em>{contentSubTitle}</em>
                  <br />
                  {contentText}
                </span>
              </span>
            </a>
          </li>
        );
      }

      if (self.props.listType === 'big-icon') {
        return (
          <li className="brick brick-4">
            <a href={contentLink}>
              {self.hasIcon()}
              <span className={"e-bs-title"}>{contentTitle}</span>
            </a>
          </li>
        );
      }

      if (childrens > 0) {
        return self.props.children;
      }

      return (
        <li className={classes}>
          <a href={contentLink}>
            {self.hasIcon()}
            {self.hasAvatar()}
            <span>{contentText}</span>
          </a>
        </li>
      );
    },

    hasIcon: function () {
      var self = this,
          icon = (self.props.icon) ? self.props.icon : null;

      if (icon) {
        return (
          <Icon classes={"e-list-icon"} name={self.props.icon} />
        );
      }

      return null;
    },

    hasAvatar: function () {
      var self = this,
          avatarImg = (self.props.avatarImg) ? self.props.avatarImg : null,
          avatarAlt = (self.props.avatarAlt) ? self.props.avatarAlt : null;

      if (avatarImg) {
        return (
          <img className={'e-list-avatar'} src={avatarImg} alt={avatarAlt} />
        );
      }

      return null;
    },

    showSubmenu: function (ev) {
      var self = this;

      self.publish('actions:list', {
        action: 'active', id: self.props.id
      });

      self.setState({
        activeItem: self.props.id
      });

      ev.preventDefault();
    },

    render: function () {
      var self = this;

      return self.renderChildren();
    }
});
