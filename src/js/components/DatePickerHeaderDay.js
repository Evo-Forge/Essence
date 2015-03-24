'use strict';

var React = require('react/addons'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DatePickerHeaderDay',

    mixins: [ClassNames],

    getInitialState: function() {
      return {
        classes: {
          'e-picker-header-day-text': true
        },
        day: null
      };
    },

    componentDidMount: function () {
      var classes = this.state.classes;

      classes = ClassNames(classes, this.props.classes);

      this.setState({
        classes: classSet(classes),
        day: this.props.day
      });
    },

    render: function () {
      var self = this;
      return (
        <div className={self.state.classes}>
          {self.state.day}
        </div>
      );
    }
});
