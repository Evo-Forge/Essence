'use strict';

var React = require('react'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'Highlighter',

    mixins: [PubSub],

    getInitialState: function () {
      return {
        direction: 'to-right',
        styles: {
          left: 0,
          right: 0
        },
        Highlighter: false
      };
    },

    componentDidMount: function () {
      var self = this;

      self.subscribe('highlighterCSS:'+self.props.id, function (position) {
        self.setState({
          direction: position.direction,
          styles: {
            left: position.left,
            right: position.right
          },
          highlighter: self
        });
      });
    },

    render: function () {
      var self = this;

      return (
        <div
          id={'highlighter_for_' + self.props.id}
          key={self.props.id}
          className={'e-tabs-highlighter ' + self.state.direction}
          style={self.state.styles}>
        </div>
      );
    }
});
