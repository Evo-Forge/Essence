'use strict';

var React = require('react'),
    ReactText = require('./Text'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
  displayName: 'ToolBar',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      children: []
    };
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    // One item
    if (childrens === 1) {
      children.push(self.props.children);
    } else if (childrens > 1) {
      // Multiple items
      self.props.children.map(function (item, key) {
        item = React.cloneElement(item, {
          id: key,
          key: key
        });

        children.push(item);
      });
    }

    return children;
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.renderChildren();
  },

  renderTitle: function renderTitle() {
    if (this.props.title) {
      return React.createElement(ReactText, { text: this.props.title });
    }

    return null;
  },

  render: function render() {
    var self = this;

    return React.createElement(
      'div',
      { className: 'e-toolbar clearfix' },
      self.renderTitle(),
      self.renderChildren()
    );
  }
});