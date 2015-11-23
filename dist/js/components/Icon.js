'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
  displayName: 'Icon',

  getInitialState: function getInitialState() {
    return {
      classes: {}
    };
  },

  renderChildren: function renderChildren() {
    var self = this,
        classes = [ClassNames(self.state.classes, self.props.classes)];

    if (self.props.name) {

      classes.forEach(function (element) {
        classes.push(element);
      });

      classes.push('e-icon-' + self.props.name);

      return React.createElement('i', { className: classSet(classes), onClick: self.props.onClick });
    }

    return null;
  },

  render: function render() {
    return this.renderChildren();
  }
});