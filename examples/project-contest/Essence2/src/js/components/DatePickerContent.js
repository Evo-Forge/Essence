'use strict';

var React = require('react/addons'),
    ClassNames = require('../utils/ClassNames'),
    DateFormat = require('../utils/DateFormat'),
    Text = require('./Text'),
    Icon = require('./Icon'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DatePickerContent',

    mixins: [ClassNames, DateFormat],

    getInitialState: function() {
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

    componentDidMount: function () {
      var classes = this.state.classes || [];

      classes = ClassNames(classes, this.props.classes);

      this.setState({
        classes: classes
      });
    },

    _monthTotalDays: function (newDate) {
        var theDate = new Date(newDate.getFullYear(), newDate.getMonth(), 1);

        theDate.setMonth(theDate.getMonth() + 1);
        theDate.setDate(theDate.getDate() - 1);

        return theDate.getDate();
    },

    _monthWeekDays: function (newDate) {
      var self = this,
          monthTotalDays = self._monthTotalDays(newDate),
          days = [];

      for (var i = 1; i <= monthTotalDays; i++) {
        days.push(new Date(newDate.getFullYear(), newDate.getMonth(), i));
      }

      return days;
    },

    _monthDays: function (newDate) {
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

    _prevMonth: function () {
      var self = this,
          d = new Date(self.state.currentDate),
          n = new Date(d.getFullYear(), d.getMonth() - 1, d.getDate());

      this.setState({
        currentDate: n
      });
    },

    _nextMonth: function () {
      var self = this,
          d = new Date(self.state.currentDate),
          n = new Date(d.getFullYear(), d.getMonth() + 1, d.getDate());

      this.setState({
        currentDate: n
      });
    },

    _setActive(newDate) {
      var self = this;

      self.setState({
        dateSelected: newDate.day
      });

      self.props.onClick(this, newDate);
    },

    renderNavigation: function () {
      var self = this,
          month = DateFormat('month', self.state.currentDate.getMonth()),
          year = self.state.currentDate.getFullYear();
      return (
        <div className={'e-picker-calendar-slider'}>
          <Text classes={'e-picker-selected-month'}>{month}</Text>
          <Text> </Text>
          <Text classes={'e-picker-selected-year'}>{year}</Text>
          <Text
            classes={'simple-button e-picker-control left'}
            onClick={self._prevMonth}
          >
            <Icon name='navigation-chevron-left' />
          </Text>
          <Text
            classes={'simple-button e-picker-control right'}
            onClick={self._nextMonth}
          >
            <Icon name='navigation-chevron-right' />
          </Text>
        </div>
      );
    },

    renderDay: function (weeks) {
      var self = this;

      return weeks.map(function(day, index) {
        if (day) {
          var currentDay = new Date(day),
              isActive = (currentDay.getDate() === self.state.dateSelected) ? " active" : "",
              newDate = {
                day: currentDay.getDate(),
                dayName: DateFormat('day', currentDay.getDay()),
                month: DateFormat('month', currentDay.getMonth()),
                year: currentDay.getFullYear()
              };

          return (
            <div
              key={index}
              className={"e-picker-calendar-week-date" + isActive}
              onClick={self._setActive.bind(this, newDate)}
            >
              <button
              className={'simple-button'}
              >
                {currentDay ? currentDay.getDate() : currentDay}
              </button>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className={"e-picker-calendar-week-date"}
            />
          );
        }
      }, this);
    },

    renderWeeks: function () {
      var self = this,
          d = new Date(self.state.currentDate),
          n = new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          days = self._monthDays(n);

      return days.map(function (week, index) {
        return (
          <div
            key={index}
            className={"e-picker-calendar-week-dates"}
          >
            {self.renderDay(week)}
          </div>
        );
      }, this);
    },

    renderCalendar: function () {
      var self = this;

      return (
        <div
          ref='datepicker-content'
          className={'e-picker-calendar-container-padding'}
        >
          <ul className={"e-picker-calendar-week-days"}>
            <li>S</li>
            <li>M</li>
            <li>T</li>
            <li>W</li>
            <li>T</li>
            <li>F</li>
            <li>S</li>
          </ul>
          {self.renderWeeks()}
        </div>
      );
    },

    render: function () {
      var self = this,
          classes = classSet(self.state.classes);

      return (
        <div
          className={classes}
        >
          {self.renderNavigation()}
          {self.renderCalendar()}
        </div>
      );
    }
});
