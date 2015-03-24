'use strict';

var React = require('react/addons');

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
