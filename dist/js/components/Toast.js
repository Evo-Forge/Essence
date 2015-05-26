'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'Toast',

  getInitialState: function getInitialState() {
    return {
      children: []
    };
  },

  renderChildren: function renderChildren() {
    var self = this,
        children = [];

    self.props.children.map(function (item) {
      children.push(item);
    });

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