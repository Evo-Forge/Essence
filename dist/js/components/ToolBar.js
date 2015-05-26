'use strict';

var React = require('react/addons');

module.exports = React.createClass({
  displayName: 'ToolBar',

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

  renderTitle: function renderTitle() {
    if (this.props.title) {
      return React.createElement(
        'span',
        null,
        this.props.title
      );
    }

    return null;
  },

  render: function render() {
    var self = this;

    return React.createElement(
      'div',
      { className: 'e-toolbar clearfix' },
      self.renderTitle(),
      self.renderChildren()
    );
  }
});