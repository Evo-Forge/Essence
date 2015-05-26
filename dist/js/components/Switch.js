'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'Switch',

  getInitialState: function getInitialState() {
    return {
      children: []
    };
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    if (childrens === 1) {
      children.push(self.props.children);
    } else {
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

  render: function render() {
    var self = this;
    return React.createElement(
      'div',
      null,
      self.renderChildren()
    );
  }
});