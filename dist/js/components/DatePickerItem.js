'use strict';

var React = require('react'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
  displayName: 'DatePickerItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      style: {},
      classes: {
        'e-picker-container': true
      }
    };
  },

  componentDidMount: function componentDidMount() {
    var classes = this.state.classes || [];

    this.setState({
      classes: classes
    });
  },

  renderDatePicker: function renderDatePicker() {
    var self = this,
        classes = classSet(ClassNames(self.state.classes, self.props.classes));

    return React.createElement(
      'div',
      { className: classes },
      self.props.children
    );
  },

  render: function render() {
    var self = this;
    return self.renderDatePicker();
  }
});