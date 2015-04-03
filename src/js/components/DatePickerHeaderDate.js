'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DatePickerHeaderDate',

    mixins: [PubSub, ClassNames],

    getInitialState() {
      return {
        classes: {
          'e-picker-header-big-show': true
        },
        month: null,
        day: null,
        year: null,
      };
    },

    componentDidMount() {
      var self = this,
          classes = self.state.classes;

      classes = ClassNames(classes, self.props.classes);

      self.setState({
        classes: classSet(classes),
        month: self.state.month || self.props.month,
        day: self.state.day || self.props.day,
        year: self.state.year || self.props.year,
      });

      /*self.subscribe('actions:datepicker', function (data) {
        if (data.action === "change") {
          self.setState({
            month: data.newDate.month,
            day: data.newDate.day,
            year: data.newDate.year,
          });
        }
      });*/
    },

    updateDate(newDate) {
      var self = this;

      self.setState({
        month: newDate.month,
        day: newDate.day,
        year: newDate.year,
      });
    },

    renderDateMonth() {
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

    renderDateDay() {
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

    renderDateYear() {
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


    render() {
      var self = this;
      return (
        <div
          ref='DatePickerHeaderDate'
          className={self.state.classes}
        >
          {self.renderDateMonth()}
          {self.renderDateDay()}
          {self.renderDateYear()}
        </div>
      );
    }
});
