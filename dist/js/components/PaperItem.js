'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'PaperItem',

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-paper': true,
        'sharp': false,
        'circle': false
      }
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = self.state.classes;

    classes['sharp'] = self.props.type === 'sharp' ? true : false;
    classes['circle'] = self.props.type === 'circle' ? true : false;

    if (self.props.classes) {
      classes = Utils.classNames(classes, self.props.classes);
    }

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