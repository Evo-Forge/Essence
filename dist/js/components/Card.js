'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'Card',

  render: function render() {
    var self = this;
    return self.props.children;
  }
});