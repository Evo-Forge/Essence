'use strict';

var React = require('react'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    DateFormat = require('../utils/DateFormat'),
    classSet = require('classnames');

module.exports = React.createClass({
  displayName: 'DatePickerHeader',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    var newDate = new Date(),
        currentDate = {
      day: newDate.getDate(),
      year: newDate.getFullYear(),
      month: DateFormat('month', newDate.getMonth()),
      dayName: DateFormat('day', newDate.getDay())
    };

    return {
      classes: {
        'e-picker-header': true
      },
      date: {
        day: currentDate.day,
        year: currentDate.year,
        month: currentDate.month,
        dayName: currentDate.dayName }
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = this.state.classes;

    classes = ClassNames(classes, this.props.classes);

    self.setState({
      classes: classes
    });

    self.subscribe('actions:datepicker', function (data) {
      if (data.action === 'setValue' && self.props.parentId === data.id) {
        self.publish('actions:input', {
          action: 'setValue',
          value: DateFormat('date', self.state.date),
          id: data.id
        });
      }
    });
  },

  renderDateMonth: function renderDateMonth() {
    var self = this;

    if (self.state.date.month) {
      return React.createElement(
        'div',
        { className: 'e-picker-header-month' },
        self.state.date.month
      );
    }

    return null;
  },

  renderDateDay: function renderDateDay() {
    var self = this;
    if (self.state.date.day) {
      return React.createElement(
        'div',
        { className: 'e-picker-header-day' },
        self.state.date.day
      );
    }

    return null;
  },

  renderDateYear: function renderDateYear() {
    var self = this;
    if (self.state.date.year) {
      return React.createElement(
        'div',
        { className: 'e-picker-header-year' },
        self.state.date.year
      );
    }

    return null;
  },

  render: function render() {
    console.log('DatePickerHeader render self.state.date', this.props);
    var self = this,
        dayName = self.state.date ? self.state.date.dayName : '',
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
        dayName
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