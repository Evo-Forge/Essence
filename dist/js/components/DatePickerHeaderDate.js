'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'DatePickerHeaderDate',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-picker-header-big-show': true
      },
      month: null,
      day: null,
      year: null };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = self.state.classes;

    classes = Utils.classNames(classes, self.props.classes);

    self.setState({
      classes: classSet(classes),
      month: self.state.month || self.props.month,
      day: self.state.day || self.props.day,
      year: self.state.year || self.props.year });
  },

  updateDate: function updateDate(newDate) {
    var self = this;

    self.setState({
      month: newDate.month,
      day: newDate.day,
      year: newDate.year });
  },

  renderDateMonth: function renderDateMonth() {
    var self = this;

    if (self.state.month) {
      return React.createElement(
        'div',
        { className: 'e-picker-header-month' },
        self.state.month
      );
    }

    return null;
  },

  renderDateDay: function renderDateDay() {
    var self = this;
    if (self.state.day) {
      return React.createElement(
        'div',
        { className: 'e-picker-header-day' },
        self.state.day
      );
    }

    return null;
  },

  renderDateYear: function renderDateYear() {
    var self = this;
    if (self.state.year) {
      return React.createElement(
        'div',
        { className: 'e-picker-header-year' },
        self.state.year
      );
    }

    return null;
  },

  render: function render() {
    var self = this;
    return React.createElement(
      'div',
      {
        ref: 'DatePickerHeaderDate',
        className: self.state.classes
      },
      self.renderDateMonth(),
      self.renderDateDay(),
      self.renderDateYear()
    );
  }
});