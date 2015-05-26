'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'AppBar',

  getInitialState: function getInitialState() {
    return {
      children: []
    };
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    // One item
    if (childrens === 1) {
      children.push(self.props.children);
    } else if (childrens > 1) {
      // Multiple items
      self.props.children.map(function (item, key) {
        item = React.addons.cloneWithProps(item, {
          id: key,
          key: key
        });

        children.push(item);
      });
    }

    return children;
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.renderChildren();
  },

  render: function render() {
    var self = this;

    return React.createElement(
      'div',
      { className: 'e-appbar clearfix' },
      self.renderChildren()
    );
  }
});