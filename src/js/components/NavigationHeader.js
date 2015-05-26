'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'NavigationHeader',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        classes: {
          'e-nav-header': true
        }
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      classes = Utils.classNames(classes, self.props.classes);

      self.setState({
        classes: classSet(classes)
      });
    },

    render: function () {
      var self = this;

      return (
        <header className={self.state.classes}>
          {self.props.children}
        </header>
      );
    }
});
