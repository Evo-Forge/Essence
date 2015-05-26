'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'NavigationHeader',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-nav-header': true
      }
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
      'header',
      { className: self.state.classes },
      self.props.children
    );
  }
});