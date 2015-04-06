'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    Text = require('./Text'),
    Icon = require('./Icon'),
    BtnItem = require('./BtnItem'),
    MenuItem = require('./MenuItem'),
    PubSub = require('../utils/PubSub'),
    Mobile = require('../utils/Mobile'),
    ClassNames = require('../utils/ClassNames'),
    PositionH = require('../utils/PositionHorizontal');

module.exports = React.createClass({
    displayName: 'Menu',

    mixins: [PubSub, Mobile, PositionH, ClassNames],

    getInitialState: function() {
      var self = this,
          options = self.props.items ? self.props.items[0] : false;

      return {
        children: [],
        placeholder: null,
        isHidden: true,
        isActive: false,
        isRightPosition: false,
        classes: {
          'mobile': this.isMobile(),
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
          link = options.link || "#",
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
          <Text
            onClick={self.showMenu}
            text={text}
            id={"text-for-" + menuID}
          >
            <Icon name={'navigation-arrow-drop-down'} />
          </Text>
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
          link = options.link || "#",
          text = options.text || false,
          menuID = self.props.id || options.id || "menu-0";

      if (extraClasses) {
        classes = ClassNames(classes, extraClasses);
      }

      if (self.props.classes) {
        classes = ClassNames(classes, self.props.classes);
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
          elemPosition = PositionH(ev.target);

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

      self.setState({
        isHidden: options.hide
      });
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
          id={itemID}
        />
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
          <Text
            onClick={self.showMenu}
            id={"text-for-" + self.props.id}
          >
            {placeholder}
            <Icon name={'navigation-arrow-drop-down'} />
          </Text>
        );
      }

      if (self.props.icon) {
        childIcon = (
          <Icon
            name={self.props.icon}
            onClick={self.showMenu}
          />
        );
      }

      if (self.props.type === 'fab') {
        childPlaceholder = (
          <Text
            onClick={self.showMenu}
            id={"fab-for-" + self.props.id}
            classes='e-btn-fab lines-button'
          >
            <Text classes='lines' />
          </Text>
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
