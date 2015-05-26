'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'Snackbar',

  getInitialState: function getInitialState() {
    return {
      children: []
    };
  },

  renderChildren: function renderChildren() {
    var self = this;

    if (self.props.children) {
      return self.props.children;
    }

    return null;
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