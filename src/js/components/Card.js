'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'Card',

    render: function () {
      var self = this;
      return self.props.children;
    }
});