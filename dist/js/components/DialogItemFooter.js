'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'DialogItemFooter',

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-dialogs-actions': true }
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = self.state.classes;

    classes = Utils.classNames(classes, self.props.classes);

    self.setState({
      classes: classSet(classes)
    });
  },

  render: function render() {
    var self = this;

    return React.createElement(
      'div',
      { className: self.state.classes },
      self.props.children
    );
  }
});