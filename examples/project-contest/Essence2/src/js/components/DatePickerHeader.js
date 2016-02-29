'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    DateFormat = require('../utils/DateFormat'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DatePickerHeader',

    mixins: [PubSub, ClassNames, DateFormat],

    getDefaultProps() {
      var newDate = new Date(),
          currentDate = {
            day: newDate.getDate(),
            year: newDate.getFullYear(),
            month: DateFormat('month', newDate.getMonth()),
            dayName: DateFormat('day', newDate.getDay())
          };

      return {
        name: 'DatePickerHeader',
        date: {
          day: currentDate.day,
          year: currentDate.year,
          month: currentDate.month,
          dayName: currentDate.dayName,
        }
      };
    },

    getInitialState() {
      return {
        classes: {
          'e-picker-header': true
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
            value: DateFormat('date', self.props.date),
            id: data.id
          });
        }
      });
    },

    renderDateMonth() {
      var self = this;

      if (self.props.date.month) {
        return (
          <div className={"e-picker-header-month"}>
            {self.props.date.month}
          </div>
        );
      }

      return null;
    },

    renderDateDay() {
      var self = this;
      if (self.props.date.day) {
        return (
          <div className={"e-picker-header-day"}>
            {self.props.date.day}
          </div>
        );
      }

      return null;
    },

    renderDateYear() {
      var self = this;
      if (self.props.date.year) {
        return (
          <div className={"e-picker-header-year"}>
            {self.props.date.year}
          </div>
        );
      }

      return null;
    },

    render() {
      var self = this,
          classes = classSet(self.state.classes);

      return (
        <header
            ref='DatePickerHeaderDate'
            className={classes}
        >
          <div className={'e-picker-header-day-text'}>
            {self.props.date.dayName}
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
