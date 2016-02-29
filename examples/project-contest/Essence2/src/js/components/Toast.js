'use strict';

var React = require('react/addons');

module.exports = React.createClass({
    displayName: 'Toast',

    getInitialState: function() {
      return {
        children: []
      };
    },

    renderChildren: function () {
      var self = this,
          children = [];

      self.props.children.map(function (item) {
        children.push(item);
      });

      return children;
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    render: function () {
      var self = this;
      return (
        <div>
          {self.renderChildren()}
        </div>
      );
    }
});
