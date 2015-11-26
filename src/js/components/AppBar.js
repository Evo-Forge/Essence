'use strict';

var React = require('react'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'AppBar',

    getInitialState: function() {
      return {
        children: []
      };
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      // One item
      if (childrens === 1) {
        children.push(self.props.children);
      } else if (childrens > 1) {
      // Multiple items
        self.props.children.map(function (item, key) {
          item = (
            React.cloneElement(item, {
              id: key,
              key: key
            })
          );

          children.push(item);
        });
      }

      return children;
    },

    componentWillReceiveProps: function () {
      this.renderChildren();
    },

    render: function () {
      var self = this,
          classes = classSet(self.props.classes, "e-appbar clearfix");

      return (
        <div className={classes}>
          {self.renderChildren()}
        </div>
      );
    }
});