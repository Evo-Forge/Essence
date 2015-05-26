'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'CardItemFooter',

  getInitialState: function getInitialState() {
    return {
      classes: {
        'card-suplimentary-actions': true,
        'clearfix': true
      }
    };
  },

  componentDidMount: function componentDidMount() {
    var classes = this.state.classes || [];

    classes = Utils.classNames(classes, this.props.classes);

    this.setState({
      classes: classes
    });
  },

  render: function render() {
    var self = this,
        classes = classSet(self.state.classes);

    return React.createElement(
      'div',
      { className: classes },
      this.props.children
    );
  }
});