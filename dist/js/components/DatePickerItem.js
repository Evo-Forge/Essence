'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

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
        classes = classSet(Utils.classNames(self.state.classes, self.props.classes));

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