'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'Image',

  getInitialState: function getInitialState() {
    return {
      classes: {}
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    var self = this;
    self.renderChildren();
  },

  renderChildren: function renderChildren() {
    var self = this,
        classes = classSet(Utils.classNames(self.state.classes, self.props.classes));

    return React.createElement('img', {
      className: classes,
      key: self.props.id,
      id: self.props.id,
      src: self.props.src,
      alt: self.props.alt,
      width: self.props.width,
      height: self.props.height });
  },

  render: function render() {
    return this.renderChildren();
  }
});