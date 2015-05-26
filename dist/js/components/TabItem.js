'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'TabItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      currentID: this.props.active ? this.props.id : -1,
      parentID: this.props.parentId ? this.props.parentId : '',
      highlighterCSS: {
        left: 0,
        right: 0,
        direction: 'to-right'
      },
      classes: {}
    };
  },

  handleMenuItemClick: function handleMenuItemClick(ev) {
    var self = this,
        elem = ev.target,
        id = elem.id,
        prevPosition = self.state.highlighterCSS,
        width = elem.offsetWidth,
        left = elem.parentNode.offsetLeft,
        right = elem.parentNode.offsetParent.offsetWidth - (elem.parentNode.offsetLeft + elem.offsetWidth);

    if (elem.getAttribute('data-disabled') === 'true') {
      return;
    }

    prevPosition.element = elem;
    prevPosition.left = left;
    prevPosition.right = right;
    prevPosition.width = width;
    prevPosition.display = 'block';

    this.setState({
      highlighterCSS: prevPosition
    });

    this.publish('highlighterCSS:' + self.state.parentID, prevPosition);
    this.publish('menu:activeItem', {
      activeItem: id,
      highlighterCSS: prevPosition
    });

    ev.preventDefault();
  },

  handleMenuItemKey: function handleMenuItemKey(ev) {
    if (ev.key === 'Tab') {
      this.handleMenuItemClick(ev);
    }
  },

  renderItem: function renderItem() {
    var self = this,
        classes = [],
        type = self.props.type,
        parentType = self.props.parentType,
        isActive = self.props.active ? true : self.state.active ? true : false;

    if (type === 'content') {

      classes['e-card'] = true;
      classes['e-shadow-1'] = true;
      classes['e-tab-content'] = true;
      classes['active'] = isActive;

      classes = classSet(Utils.classNames(classes, self.props.classes));

      return React.createElement(
        'div',
        {
          id: self.state.parentID + '-' + self.props.id,
          className: classes
        },
        React.createElement(
          'p',
          { className: 'e-subhead' },
          self.props.children
        )
      );
    }

    if (type === 'list') {

      classes['brick'] = parentType === 'fixed' ? true : false;
      classes['brick-2'] = parentType === 'fixed' ? true : false;
      classes['active'] = isActive;
      classes = classSet(Utils.classNames(classes, self.props.classes));

      return React.createElement(
        'li',
        {
          className: classes,
          'data-disabled': self.props.disabled
        },
        React.createElement(
          'a',
          {
            href: '#',
            id: self.state.parentID + '-' + self.props.id,
            parentId: self.state.parentID,
            onClick: self.handleMenuItemClick,
            onKeyUp: self.handleMenuItemKey
          },
          self.props.label
        )
      );
    }

    return React.createElement('div', null);
  },

  render: function render() {
    var self = this;

    return self.renderItem();
  }
});