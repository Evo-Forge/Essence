'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'Slider',

  renderChildren: function renderChildren() {
    return this.props.children;
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.renderChildren();
  },

  render: function render() {
    return this.renderChildren();
  }
});