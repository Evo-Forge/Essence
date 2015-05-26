'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'Btn',

  getInitialState: function getInitialState() {
    return {
      children: [],
      classes: []
    };
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    if (childrens === 1) {
      children.push(self.props.children);
    } else if (childrens > 1) {
      self.props.children.map(function (item) {
        children.push(item);
      });
    }

    return children;
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    var self = this;
    self.renderChildren();
  },

  render: function render() {
    var self = this,
        classes = self.props.classes || [];

    return React.createElement(
      'div',
      { className: classSet(classes) },
      self.props.children
    );
  }
});