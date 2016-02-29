'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Slider',

    renderChildren: function () {
      return this.props.children;
    },

    componentWillReceiveProps: function () {
      this.renderChildren();
    },

    render: function () {
      return this.renderChildren();
    }
});