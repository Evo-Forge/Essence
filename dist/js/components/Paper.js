'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'Paper',

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-paper-components': true
      }
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = self.state.classes;

    if (self.props.classes) {
      classes = Utils.classNames(classes, self.props.classes);
    }

    self.setState({
      classes: classSet(classes)
    });
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    if (childrens === 1) {
      children.push(self.props.children);
    } else {
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
    var self = this;
    self.renderChildren();
  },

  render: function render() {
    var self = this;

    return React.createElement(
      'div',
      { className: self.state.classes },
      self.props.children
    );
  }
});