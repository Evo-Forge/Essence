'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DialogItemHeader',

    getInitialState: function() {
      return {
        classes: {
          'e-dialogs-header': true,
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
        <div className={self.state.classes}>
          {self.props.children}
        </div>
      );
    }
});
