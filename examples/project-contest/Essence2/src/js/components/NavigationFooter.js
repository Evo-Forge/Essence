'use strict';

var React = require('react/addons'),
    Icon = require('./Icon'),
    Mobile = require('../utils/Mobile'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'NavigationFooter',

    mixins: [PubSub, ClassNames],

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
