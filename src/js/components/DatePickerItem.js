'use strict';

var React = require('react'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'DatePickerItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: {
          'e-picker-container': true
        }
      };
    },

    componentDidMount: function () {
      var classes = this.state.classes || [];

      this.setState({
        classes: classes
      });
    },

    renderDatePicker: function () {
      var self = this,
          classes = classSet( ClassNames(self.state.classes, self.props.classes) );

      return (
        <div className={classes}>
          {self.props.children}
        </div>
      );
    },

    render: function () {
      var self = this;
      return self.renderDatePicker();
    }
});