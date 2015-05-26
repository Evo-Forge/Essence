'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    PubSub = require('../mixins/PubSub');

module.exports = React.createClass({
  displayName: 'Progress',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      classes: [],
      isMobile: Utils.mobile.isMobile()
    };
  },

  renderChildren: function renderChildren() {
    var self = this,
        progressType = self.props.type ? self.props.type : false,
        progressSmall = self.props.small ? ' small' : '';

    if (progressType === 'slider') {
      return React.createElement(
        'div',
        { className: 'e-progress-slider' },
        React.createElement('div', { className: 'e-progress-slider-line' }),
        React.createElement('div', { className: 'break dot1' }),
        React.createElement('div', { className: 'break dot2' }),
        React.createElement('div', { className: 'break dot3' })
      );
    }

    if (progressType === 'circle') {
      return React.createElement(
        'div',
        { className: 'e-progress-circle' + progressSmall },
        React.createElement(
          'div',
          { className: 'ball-frame ball-frame-1' },
          React.createElement('div', { className: 'round-ball' })
        ),
        React.createElement(
          'div',
          { className: 'ball-frame ball-frame-2' },
          React.createElement('div', { className: 'round-ball' })
        ),
        React.createElement(
          'div',
          { className: 'ball-frame ball-frame-3' },
          React.createElement('div', { className: 'round-ball' })
        ),
        React.createElement(
          'div',
          { className: 'ball-frame ball-frame-4' },
          React.createElement('div', { className: 'round-ball' })
        ),
        React.createElement(
          'div',
          { className: 'ball-frame ball-frame-5' },
          React.createElement('div', { className: 'round-ball' })
        )
      );
    }

    if (progressType === 'dots') {
      return React.createElement(
        'div',
        { className: 'e-progress-dots' },
        React.createElement('div', { className: 'e-progress-dot e-progress-dot-1' }),
        React.createElement('div', { className: 'e-progress-dot e-progress-dot-2' }),
        React.createElement('div', { className: 'e-progress-dot e-progress-dot-3' }),
        React.createElement('div', { className: 'e-progress-dot e-progress-dot-4' }),
        React.createElement('div', { className: 'e-progress-dot e-progress-dot-5' })
      );
    }

    if (progressType === 'fix') {
      return React.createElement(
        'div',
        { className: 'e-progress-fix' },
        React.createElement('div', { className: 'e-progress-fix-slider' })
      );
    }

    if (progressType === 'dynamic') {
      return React.createElement(
        'div',
        { className: 'e-progress-dynamic' },
        React.createElement('div', { className: 'e-progress-dynamic-slider' }),
        React.createElement('div', { className: 'e-progress-dynamic-slider second-slider' })
      );
    }

    return '';
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.renderChildren();
  },

  render: function render() {
    var self = this;

    return React.createElement(
      'div',
      null,
      self.renderChildren()
    );
  }
});