'use strict';

var React = require('react/addons');

module.exports = React.createClass({
    displayName: 'ToolBar',

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
            React.addons.cloneWithProps(item, {
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

    renderTitle: function () {
      if (this.props.title) {
        return (
          <span>{this.props.title}</span>
        );
      }

      return null;
    },

    render: function () {
      var self = this;

      return (
        <div className="e-toolbar clearfix">
          {self.renderTitle()}
          {self.renderChildren()}
        </div>
      );
    }
});
