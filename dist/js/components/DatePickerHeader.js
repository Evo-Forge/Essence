'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'DatePickerHeader',

  mixins: [PubSub],

  getDefaultProps: function getDefaultProps() {
    var newDate = new Date(),
        currentDate = {
      day: newDate.getDate(),
      year: newDate.getFullYear(),
      month: Utils.dateFormat('month', newDate.getMonth()),
      dayName: Utils.dateFormat('day', newDate.getDay())
    };

    return {
      name: 'DatePickerHeader',
      date: {
        day: currentDate.day,
        year: currentDate.year,
        month: currentDate.month,
        dayName: currentDate.dayName }
    };
  },

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-picker-header': true
      }
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = this.state.classes;

    classes = Utils.classNames(classes, this.props.classes);

    self.setState({
      classes: classes
    });

    self.subscribe('actions:datepicker', function (data) {
      if (data.action === 'setValue' && self.props.parentId === data.id) {
        self.publish('actions:input', {
          action: 'setValue',
          value: Utils.dateFormat('date', self.props.date),
          id: data.id
        });
      }
    });
  },

  renderDateMonth: function renderDateMonth() {
    var self = this;

    if (self.props.date.month) {
      return React.createElement(
        'div',
        { className: 'e-picker-header-month' },
        self.props.date.month
      );
    }

    return null;
  },

  renderDateDay: function renderDateDay() {
    var self = this;
    if (self.props.date.day) {
      return React.createElement(
        'div',
        { className: 'e-picker-header-day' },
        self.props.date.day
      );
    }

    return null;
  },

  renderDateYear: function renderDateYear() {
    var self = this;
    if (self.props.date.year) {
      return React.createElement(
        'div',
        { className: 'e-picker-header-year' },
        self.props.date.year
      );
    }

    return null;
  },

  render: function render() {
    var self = this,
        classes = classSet(self.state.classes);

    return React.createElement(
      'header',
      {
        ref: 'DatePickerHeaderDate',
        className: classes
      },
      React.createElement(
        'div',
        { className: 'e-picker-header-day-text' },
        self.props.date.dayName
      ),
      React.createElement(
        'div',
        { className: 'e-picker-header-big-show' },
        self.renderDateMonth(),
        self.renderDateDay(),
        self.renderDateYear()
      )
    );
  }
});