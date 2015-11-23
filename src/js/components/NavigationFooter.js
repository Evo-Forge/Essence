'use strict';

var React = require('react'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'NavigationFooter',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        classes: {
          'e-nav-footer': true
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
        <footer className={self.state.classes}>
          {self.props.children}
        </footer>
      );
    }
});