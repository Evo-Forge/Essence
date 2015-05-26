'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'ToastItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      style: {},
      classes: {
        'toast': true
      }
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = Utils.classNames(self.state.classes, self.props.classes),
        height = parseInt(window.getComputedStyle(self.getDOMNode()).getPropertyValue('height').replace('px', '')),
        lineHeight = parseInt(window.getComputedStyle(self.getDOMNode()).getPropertyValue('line-height').replace('px', ''));

    self.setState({
      classes: classes
    });

    // Subscribe to ToastBar show event
    self.subscribe('toast:' + self.props.id, function () {
      self.setState({
        style: {
          bottom: '0',
          opacity: 1,
          zIndex: 1
        }
      });

      if (Math.floor(height / lineHeight) > 1) {

        if (!classes['toast-multiline']) {
          classes['toast-multiline'] = true;
        }

        self.setState({
          classes: classes
        });
      }

      setTimeout(function () {
        self.setState({
          style: {}
        });
      }, 2000);
    });
  },

  render: function render() {
    var self = this,
        style = self.state.style,
        classes = classSet(self.state.classes);

    return React.createElement(
      'div',
      {
        className: classes,
        id: self.props.id,
        style: style
      },
      self.props.children
    );
  }
});