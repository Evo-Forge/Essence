'use strict';

var React = require('react/addons'),
    Text = require('./Text'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'ToolBar',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        children: []
      };
    },

    componentDidMount: function () {
      // Empty
    },

    componentDidUnmount: function () {
      // Empty
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
          <Text text={this.props.title} />
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
