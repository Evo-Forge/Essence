'use strict';

var React = require('react'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    DateFormat = require('../utils/DateFormat'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'DatePickerHeader',

    mixins: [PubSub],

    getInitialState() {
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
          dayName: currentDate.dayName,
        }
      };
    },

    componentDidMount() {
      var self = this,
          classes = this.state.classes;

      classes = ClassNames(classes, this.props.classes);

      self.setState({
        classes: classes
      });

      self.subscribe('actions:datepicker', function (data) {
        if (data.action === "setValue" && self.props.parentId === data.id) {
          self.publish('actions:input', {
            action: 'setValue',
            value: DateFormat('date', self.state.date),
            id: data.id
          });
        }
      });
    },

    renderDateMonth() {
      var self = this;

      if (self.state.date.month) {
        return (
          <div className={"e-picker-header-month"}>
            {self.state.date.month}
          </div>
        );
      }

      return null;
    },

    renderDateDay() {
      var self = this;
      if (self.state.date.day) {
        return (
          <div className={"e-picker-header-day"}>
            {self.state.date.day}
          </div>
        );
      }

      return null;
    },

    renderDateYear() {
      var self = this;
      if (self.state.date.year) {
        return (
          <div className={"e-picker-header-year"}>
            {self.state.date.year}
          </div>
        );
      }

      return null;
    },

    render() {
      console.log("DatePickerHeader render self.state.date", this.props);
      var self = this,
          dayName = self.state.date ? self.state.date.dayName : "",
          classes = classSet(self.state.classes);


      return (
        <header
            ref='DatePickerHeaderDate'
            className={classes}
        >
          <div className={'e-picker-header-day-text'}>
            {dayName}
          </div>
          <div className={'e-picker-header-big-show'}>
            {self.renderDateMonth()}
            {self.renderDateDay()}
            {self.renderDateYear()}
          </div>
        </header>
      );
    }
});