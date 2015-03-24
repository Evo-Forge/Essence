'use strict';

var React = require('react/addons'),
    ClassNames = require('../utils/ClassNames'),
    DateFormat = require('../utils/DateFormat'),
    classSet = React.addons.classSet,
    currentDate = new Date();

module.exports = React.createClass({
    displayName: 'DatePickerHeader',

    mixins: [ClassNames, DateFormat],

    getDefaultProps() {
      return {
        name: 'DatePickerHeader',
        date: {
          day: currentDate.getDate(),
          year: currentDate.getFullYear(),
          month: DateFormat('month', currentDate.getMonth()),
          dayName: DateFormat('day', currentDate.getDay()),
        }
      };
    },

    getInitialState () {
      return {
        classes: {
          'e-picker-header': true
        },
        date: {
          day: currentDate.getDate(),
          year: currentDate.getFullYear(),
          month: DateFormat('month', currentDate.getMonth()),
          dayName: DateFormat('day', currentDate.getDay()),
        }
      };
    },

    componentWillReceiveProps() {
      var self = this;
      self._updateDate();
    },

    componentDidMount() {
      var self = this,
          classes = this.state.classes;

      classes = ClassNames(classes, this.props.classes);

      self.setState({
        classes: classes
      });
    },

    _updateDate() {
      var self = this;

      self.setState({
        month: self.props.date.month,
        dayName: self.props.date.dayName,
        day: self.props.date.day,
        year: self.props.date.year,
      });
    },

    renderDateMonth: function () {
      var self = this;

      if (self.state.month) {
        return (
          <div className={"e-picker-header-month"}>
            {self.state.month}
          </div>
        );
      }

      return null;
    },

    renderDateDay: function () {
      var self = this;
      if (self.state.day) {
        return (
          <div className={"e-picker-header-day"}>
            {self.state.day}
          </div>
        );
      }

      return null;
    },

    renderDateYear: function () {
      var self = this;
      if (self.state.year) {
        return (
          <div className={"e-picker-header-year"}>
            {self.state.year}
          </div>
        );
      }

      return null;
    },

    render: function () {
      var self = this,
          classes = classSet(self.state.classes);

      return (
        <header
            ref='DatePickerHeaderDate'
            className={classes}
        >
          <div className={'e-picker-header-day-text'}>
            {self.state.dayName}
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
