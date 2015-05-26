'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'Icon',

  getInitialState: function getInitialState() {
    return {
      classes: []
    };
  },

  renderChildren: function renderChildren() {
    var self = this,
        classes = Utils.classNames([], self.props.classes);

    if (self.props.name) {
      classes['e-icon-' + self.props.name] = true;
    }

    if (self.props.name) {
      return React.createElement('i', { className: classSet(classes), onClick: self.props.onClick });
    }

    return null;
  },

  render: function render() {
    var self = this;
    return self.renderChildren();
  }
});