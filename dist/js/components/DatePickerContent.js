'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    Icon = require('./Icon'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'DatePickerContent',

  getInitialState: function getInitialState() {
    var d = new Date();

    return {
      classes: {
        'e-picker-calendar-container': true
      },
      currentDate: this.props.currentDate || d,
      dateSelected: d.getDate(),
      currentWeek: []
    };
  },

  componentDidMount: function componentDidMount() {
    var classes = this.state.classes || [];

    classes = Utils.classNames(classes, this.props.classes);

    this.setState({
      classes: classes
    });
  },

  _monthTotalDays: function _monthTotalDays(newDate) {
    var theDate = new Date(newDate.getFullYear(), newDate.getMonth(), 1);

    theDate.setMonth(theDate.getMonth() + 1);
    theDate.setDate(theDate.getDate() - 1);

    return theDate.getDate();
  },

  _monthWeekDays: function _monthWeekDays(newDate) {
    var self = this,
        monthTotalDays = self._monthTotalDays(newDate),
        days = [];

    for (var i = 1; i <= monthTotalDays; i++) {
      days.push(new Date(newDate.getFullYear(), newDate.getMonth(), i));
    }

    return days;
  },

  _monthDays: function _monthDays(newDate) {
    var self = this,
        listDays = self._monthWeekDays(newDate),
        daysInWeek = [],
        noDays = 0,
        weekStart = 0,
        currentWeek = 0,
        totalWeekDays = 0;

    while (listDays.length) {
      weekStart = listDays[0].getDay();
      totalWeekDays = 7 - weekStart;
      noDays = 7 - totalWeekDays;
      currentWeek = listDays.splice(0, totalWeekDays);

      for (var i = 0; i < noDays; i++) {
        currentWeek.unshift(null);
      }

      daysInWeek.push(currentWeek);
    }

    return daysInWeek;
  },

  _prevMonth: function _prevMonth() {
    var self = this,
        d = new Date(self.state.currentDate),
        n = new Date(d.getFullYear(), d.getMonth() - 1, d.getDate());

    this.setState({
      currentDate: n
    });
  },

  _nextMonth: function _nextMonth() {
    var self = this,
        d = new Date(self.state.currentDate),
        n = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate());

    this.setState({
      currentDate: n
    });
  },

  _setActive: function _setActive(newDate) {
    var self = this;

    self.setState({
      dateSelected: newDate.day
    });

    self.props.onClick(this, newDate);
  },

  renderNavigation: function renderNavigation() {
    var self = this,
        month = Utils.dateFormat('month', self.state.currentDate.getMonth()),
        year = self.state.currentDate.getFullYear();
    return React.createElement(
      'div',
      { className: 'e-picker-calendar-slider' },
      React.createElement(
        'span',
        { className: 'e-picker-selected-month' },
        month
      ),
      React.createElement(
        'span',
        null,
        ' '
      ),
      React.createElement(
        'span',
        { className: 'e-picker-selected-year' },
        year
      ),
      React.createElement(
        'span',
        {
          className: 'simple-button e-picker-control left',
          onClick: self._prevMonth
        },
        React.createElement(Icon, { name: 'navigation-chevron-left' })
      ),
      React.createElement(
        'span',
        {
          className: 'simple-button e-picker-control right',
          onClick: self._nextMonth
        },
        React.createElement(Icon, { name: 'navigation-chevron-right' })
      )
    );
  },

  renderDay: function renderDay(weeks) {
    var self = this;

    return weeks.map(function (day, index) {
      if (day) {
        var currentDay = new Date(day),
            isActive = currentDay.getDate() === self.state.dateSelected ? ' active' : '',
            newDate = {
          day: currentDay.getDate(),
          dayName: Utils.dateFormat('day', currentDay.getDay()),
          month: Utils.dateFormat('month', currentDay.getMonth()),
          year: currentDay.getFullYear()
        };

        return React.createElement(
          'div',
          {
            key: index,
            className: 'e-picker-calendar-week-date' + isActive,
            onClick: self._setActive.bind(this, newDate)
          },
          React.createElement(
            'button',
            { className: 'simple-button' },
            currentDay ? currentDay.getDate() : currentDay
          )
        );
      } else {
        return React.createElement('div', {
          key: index,
          className: 'e-picker-calendar-week-date' });
      }
    }, this);
  },

  renderWeeks: function renderWeeks() {
    var self = this,
        d = new Date(self.state.currentDate),
        n = new Date(d.getFullYear(), d.getMonth(), d.getDate()),
        days = self._monthDays(n);

    return days.map(function (week, index) {
      return React.createElement(
        'div',
        {
          key: index,
          className: 'e-picker-calendar-week-dates'
        },
        self.renderDay(week)
      );
    }, this);
  },

  renderCalendar: function renderCalendar() {
    var self = this;

    return React.createElement(
      'div',
      {
        ref: 'datepicker-content',
        className: 'e-picker-calendar-container-padding'
      },
      React.createElement(
        'ul',
        { className: 'e-picker-calendar-week-days' },
        React.createElement(
          'li',
          null,
          'S'
        ),
        React.createElement(
          'li',
          null,
          'M'
        ),
        React.createElement(
          'li',
          null,
          'T'
        ),
        React.createElement(
          'li',
          null,
          'W'
        ),
        React.createElement(
          'li',
          null,
          'T'
        ),
        React.createElement(
          'li',
          null,
          'F'
        ),
        React.createElement(
          'li',
          null,
          'S'
        )
      ),
      self.renderWeeks()
    );
  },

  render: function render() {
    var self = this,
        classes = classSet(self.state.classes);

    return React.createElement(
      'div',
      {
        className: classes
      },
      self.renderNavigation(),
      self.renderCalendar()
    );
  }
});