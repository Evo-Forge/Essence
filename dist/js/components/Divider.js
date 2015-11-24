'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
  displayName: 'Divider',

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-divider': true
      }
    };
  },

  componentDidMount: function componentDidMount() {
    this.setState({
      classes: this.state.classes
    });
  },

  renderChildren: function renderChildren() {
    var self = this,
        classes = classSet(ClassNames(self.state.classes, self.props.classes));

    return React.createElement('div', { className: classes });
  },

  render: function render() {
    var self = this;
    return self.renderChildren();
  }
});