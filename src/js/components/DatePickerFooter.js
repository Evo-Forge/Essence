'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'DatePickerFooter',

    getInitialState: function() {
      return {
        classes: {
          'e-picker-main-actions': true,
          'clearfix': true
        }
      };
    },

    componentDidMount: function () {
      var classes = this.state.classes || [];

      classes = ClassNames(classes, this.props.classes);

      this.setState({
        classes: classes
      });
    },

    render: function () {
      var self = this,
          classes = classSet(self.state.classes);

      return (
        <div
          ref='datepicker-footer'
          className={classes}
        >
          {self.props.children}
        </div>
      );
    }
});