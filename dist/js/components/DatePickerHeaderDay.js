'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'DatePickerHeaderDay',

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-picker-header-day-text': true
      },
      day: null
    };
  },

  componentDidMount: function componentDidMount() {
    var classes = this.state.classes;

    classes = Utils.classNames(classes, this.props.classes);

    this.setState({
      classes: classSet(classes),
      day: this.props.day
    });
  },

  render: function render() {
    var self = this;
    return React.createElement(
      'div',
      { className: self.state.classes },
      self.state.day
    );
  }
});