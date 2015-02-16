'use strict';

var React = require('react/addons'),
    Icon = require('./Icon'),
    RippleInk = require('./RippleInk'),
    ListItemElement = require('./ListItemElement'),
    PubSub = require('../utils/PubSub'),
    Position = require('../utils/Position'),
    ClickPosition = require('../utils/ClickPosition'),
    BackgroundColor = require('../utils/BackgroundColor'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'ListItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        classes: {
          'e-checkbox': false,
        },
        clickPosition: {
          x: 0,
          y: 0
        },
        dragCSS: {},
        isActive: null,
        expandSubmenu: '',
        fromElement: 0,
        toElement: 0
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      if (self.props.classes) {
        (self.props.classes.split(" ")).map(function (s) {
          classes[s] = true;
        });
      }

      classes['has-avatar'] = (self.props.avatar) ? true : false;
      classes['has-icon'] = (self.props.icon) ? true : false;
      classes['has-checkbox'] = (self.props.checkbox) ? true : false;
      classes['has-switches'] = (self.props.type === 'switch') ? true : false;
      classes['has-right-checkbox'] = (self.props.position === 'right') ? true : false;
      classes['multi-line'] = (self.props.type === 'lines') ? true : false;

      self.setState({
        classes: classSet(classes)
      });
    },

    dragStart: function(ev) {
      var self = this,
          element = ev.currentTarget;

      self.setState({
        dragCSS: {
          // position: 'absolute',
          // top: element.offsetLeft + "px"
        },
        fromElement: Number(element.id),
      });

      ev.dataTransfer.effectAllowed = 'move';
      ev.dataTransfer.setData("text/html", element);
    },

    dragEnd: function(ev) {
      var self = this,
          element = ev.target;

      /*
      // debug
      console.log({
        "fromElement" : self.state.fromElement,
        "toElement" : self.state.toElement
      });
      */
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

      // console.log("toElement:" + Number(elementId.id));
    },

    hideNavigation: function (data) {
      var self = this,
          parentPosition = Position (data.currentTarget),
          clickPosition = ClickPosition (data, parentPosition),
          bgColor = BackgroundColor(data),
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
          inputName = (self.props.inputName) ? self.props.inputName : '',
          contentLink = (self.props.contentLink) ? self.props.contentLink : '',
          contentText = (self.props.contentText) ? self.props.contentText : '',
          contentTitle = (self.props.contentTitle) ? self.props.contentTitle : '',
          contentSubTitle = (self.props.contentSubTitle) ? self.props.contentSubTitle : '',
          avatarLink = (self.props.avatarLink) ? self.props.avatarLink : '',
          avatarImg = (self.props.avatarImg) ? self.props.avatarImg : '',
          avatarAlt = (self.props.avatarAlt) ? self.props.avatarAlt : '',
          position = (self.props.position) ? self.props.position : false;

      if (self.props.type === 'checkbox') {
        if (position === 'right') {
          return (
            <li>
              <a href={avatarLink}>
                  <span className={"e-list-content"}>
                    <img
                      className={"e-list-icon"}
                      src={avatarImg}
                      alt={avatarAlt}
                    />
                    <span>{contentText}</span>
                  </span>
              </a>
              <div className={"e-checkbox"}>
                <label>
                  <input
                    type="checkbox"
                    name={inputName}
                    className={"toggle"}
                    defaultChecked={self.props.isChecked}
                  />
                  <span className={"e-wave"}></span>
                  <span className={"e-check-valid"}></span>
                </label>
              </div>
            </li>
          );
        }

        return (
          <li>
            <div className={"e-checkbox"}>
              <label className={"e-list-content"}>
                <input
                  type="checkbox"
                  name={inputName}
                  className={"toggle"}
                  defaultChecked={self.props.isChecked}
                />
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

      if (self.props.type === 'switch') {
        var showSwitchBox = '';

        if (!self.props.isHidden) {
          showSwitchBox = (
            <div className="e-switches">
              <label>
                <input
                  type="checkbox"
                  defaultChecked={self.props.isChecked}
                  name={inputName}
                />
                <span className={"e-switches-toggle"} />
              </label>
            </div>
          );
        }
        return (
          <li>
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

      if (self.props.type === 'reorder') {
        return (
          <li
            id={self.props.id}
            draggable={true}
            onDragEnd={self.dragEnd}
            onDragStart={self.dragStart}
            onDragOver={self.dragOver}
            style={self.state.dragCSS}
          >
            <a href={avatarLink}>
                <span className={"e-list-content"}>
                  <img
                      className={"e-list-avatar"}
                      src={avatarImg}
                      alt={avatarAlt}
                  />
                  <span>{contentText}</span>
                </span>
            </a>
            <a href={avatarLink}>
              <Icon classes={"e-list-icon"} name={self.props.icon} />
            </a>
          </li>
        );
      }

      if (self.props.type === 'navigation') {
        var hasMore = null,
            state_bgColor = this.state.bgColor,
            state_clickPosition = this.state.clickPosition,
            hasMenu = null;

        if (self.props.more) {
          hasMore = (
            <Icon classes={"e-right"} name='hardware-keyboard-arrow-down' />
          );
        }

        if (self.props.submenu) {
          var submenuItems = [];

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
                {contentText}
                {hasMore}
            </a>
            {hasMenu}
          </li>
        );
      }

      if (self.props.type === 'expand') {
        var hasMore = null,
            hasMenu = null;

        if (self.props.more) {
          hasMore = (
            <Icon classes={"e-right"} name='hardware-keyboard-arrow-down' />
          );
        }

        if (self.props.submenu) {
          var submenuItems = [];

          self.props.submenu.map(function (v, k) {
            submenuItems.push(
              <li key={k}>
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

      if (self.props.type === 'single-line') {

        if (self.props.icon && self.props.avatarImg) {
          return (
            <li>
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
          <li>
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

      if (self.props.type === 'two-line') {

        if (self.props.icon && self.props.avatarImg) {
          return (
            <li>
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
          <li>
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

      if (self.props.type === 'multi-line') {

        if (self.props.icon && self.props.avatarImg) {
          return (
            <li>
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
          <li>
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

      return '';
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
      this.setState({
        isActive: this.state.isActive !== 'active' ? 'active' : null,
      });

      ev.preventDefault();
    },

    render: function () {
      var self = this;

      return self.renderChildren();
    }
});
