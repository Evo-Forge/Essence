'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    Icon = require('./Icon'),
    MenuItem = require('./MenuItem'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils');

module.exports = React.createClass({
    displayName: 'Menu',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        children: [],
        placeholder: null,
        isHidden: true,
        isActive: false,
        isRightPosition: false,
        classes: {
          'mobile': Utils.mobile.isMobile(),
          'e-paper': true,
          'e-shadow-1': true,
          'e-nav-menu': false,
        }
      };
    },

    componentDidMount: function () {
      var self = this,
          options = self.props.items ? self.props.items[0] : false,
          menuID = self.props.id || options.id || "menu-0";

      self.subscribe('toggleMenu_for_' + menuID, function(data) {
        self.showMenu(data);
      });

      document.addEventListener("click", function(event){
        if (!self.getDOMNode().contains(event.target)){
          self.hideMenu();
        }
      });

      document.addEventListener("touchend", function(event){
        if (!self.getDOMNode().contains(event.target)){
          self.hideMenu();
        }
      });

    },

    componentDidUnmount: function () {
      var self = this,
          options = self.props.items ? self.props.items[0] : false,
          menuID = self.props.id || options.id || "menu-0";
      this.unsubscribe('toggleMenu_for_' + menuID, null);

      document.removeEventListener("click");
      document.removeEventListener("touchend");
    },

    renderMenuTitle: function () {
      var self = this,
          options = self.props.items ? self.props.items[0] : false,
          text = options.text || false,
          menuID = self.props.id || options.id || "menu-0";

      if (options.icon) {
        return (
          <button
            className={"simple-button e-nav-toggle"}
            onClick={self.showMenu}
          >
            <Icon name={options.icon} />
          </button>
        );
      }

      if (text) {
        return (
          <span
            onClick={self.showMenu}
            key={"text-for-" + menuID}
            id={"text-for-" + menuID}
          >
            {text}
            <Icon name={'navigation-arrow-drop-down'} />
          </span>
        );
      }

      return null;
    },

    renderMenu: function () {
      var self = this,
          classes = {
            'e-nav-menu': self.props.type === 'fab' ? false : true
          },
          options = self.props.items ? self.props.items[0] : false,
          extraClasses = (options.classes) ? options.classes.split(" ") : false,
          menuID = self.props.id || options.id || "menu-0";

      if (extraClasses) {
        classes = Utils.classNames(classes, extraClasses);
      }

      if (self.props.classes) {
        classes = Utils.classNames(classes, self.props.classes);
      }

      if (self.props.type === 'fab') {
        classes['e-fab-menu'] = true;
        classes['fixed'] = true;
        classes['active'] = self.state.isActive;
      }

      classes = classSet(classes);

      return (
        <nav
          className={classes}
          id={menuID}
          key={self.props.id}
        >
          {self.renderMenuTitle()}
          {self.renderChildren()}
        </nav>
      );
    },

    hideMenu: function () {
      var self = this;

      self.setState({
        isHidden: true,
        isActive: false,
      });
    },

    showMenu: function (ev) {
      var self = this,
          target = ev.currentTarget,
          targetText = target.textContent,
          elemPosition = Utils.position.horizontal(ev.target);

      self.setState({
        isRightPosition: elemPosition.position === 'right' ? true : false,
        isHidden: self.state.isHidden ? false : true,
        isActive: self.state.isActive ? false : true,
        placeholder: targetText
      });
    },

    componentWillReceiveProps: function () {
      var self = this,
          options = self.props.items ? self.props.items[0] : false;
      
      if (options.hide !== undefined){
        self.setState({
          isHidden: options.hide
        });
      }
    },

    renderItem: function (item, index) {
      var self = this,
          itemID = self.props.id || item.id || "item-" + index;

      return (
        <MenuItem
          options={item.items}
          hide={self.state.isHidden}
          eventAction={'changeText toggleMenu'}
          right={self.state.isRightPosition}
          key={index}
          id={itemID}/>
      );
    },

    renderChildren: function () {
      var self = this,
          childPlaceholder = null,
          childIcon = null,
          children = [],
          items = [];

      if (self.props.items) {
        self.props.items.map(function(item, index) {
          items.push(self.renderItem(item, index));
        });

        return items;
      }

      var ulClasses = {
        "e-nav": true,
        "e-paper": true,
        "e-shadow-1": true,
        "right": self.props.right,
        "hide": self.state.isHidden
      },
      placeholder = (self.state.placeholder) ? self.state.placeholder :
            self.props.placeholder ? self.props.placeholder : null;

      if (self.props.type === 'fab') {
        ulClasses = {
          'fab-list': true
        };
      }

      ulClasses = classSet(ulClasses);

      if (self.props.placeholder) {
        childPlaceholder = (
          <span
            onClick={self.showMenu}
            key={"text-for-" + self.props.id}
            id={"text-for-" + self.props.id}
          >
            {placeholder}
            <Icon name={'navigation-arrow-drop-down'} />
          </span>
        );
      }

      if (self.props.icon) {
        childIcon = (
          <Icon
            name={self.props.icon}
            onClick={self.showMenu}/>
        );
      }

      if (self.props.type === 'fab') {
        childPlaceholder = (
          <span
            className={'e-btn-fab lines-button'}
            onClick={self.showMenu}
            key={"fab-for-" + self.props.id}
            id={"fab-for-" + self.props.id}
          >
            <span className={'lines'} />
          </span>
        );
      }

      self.props.children.map(function(item, index) {
        children.push(
          React.addons.cloneWithProps(item, {
            id: self.props.id,
            key: index,
            onClick: self.showMenu
          })
        );
      });

      return (
        <div>
          {childPlaceholder}
          {childIcon}
          <ul className={ulClasses} id={self.props.id}>
            {children}
          </ul>
        </div>
      );
    },

    render: function () {
      var self = this;
      return self.renderMenu();
    }
});
