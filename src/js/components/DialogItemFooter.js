'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'DialogItemFooter',

    getInitialState: function() {
      return {
        classes: {
          'e-dialogs-actions': true,
        }
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      classes = ClassNames(classes, self.props.classes);

      self.setState({
        classes: classSet(classes)
      });
    },

    render: function () {
      var self = this;

      return (
        <div className={self.state.classes}>
          {self.props.children}
        </div>
      );
    }
});