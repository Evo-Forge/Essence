'use strict';

var React = require('react'),
    PubSub = require('../mixins/PubSub');

module.exports = React.createClass({
  displayName: 'Highlighter',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      direction: 'to-right',
      styles: {
        display: 'none',
        left: 0,
        right: 0
      },
      Highlighter: false
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this;

    self.subscribe('highlighterCSS:' + self.props.id, function (target) {
      var targetLeft = target.element.parentNode.offsetLeft,
          stateLeft = self.state.styles.left;

      self.setState({
        direction: targetLeft <= stateLeft ? 'to-left' : 'to-right',
        styles: {
          display: target.display,
          left: target.left,
          right: target.right
        },
        highlighter: self
      });
    });
  },

  render: function render() {
    var self = this;

    return React.createElement('div', {
      id: 'highlighter_for_' + self.props.id,
      key: self.props.id,
      className: 'e-tabs-highlighter ' + self.state.direction,
      style: self.state.styles });
  }
});