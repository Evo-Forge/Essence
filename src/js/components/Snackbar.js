'use strict';

var React = require('react/addons');

module.exports = React.createClass({
    displayName: 'Snackbar',

    getInitialState: function() {
      return {
        children: []
      };
    },

    renderChildren: function () {
      var self = this;

      if (self.props.children) {
        return self.props.children;
      }

      return null;
    },

    render: function () {
      var self = this;
      return (
        <div>{self.renderChildren()}</div>
      );
    }
});
