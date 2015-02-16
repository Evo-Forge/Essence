'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Icon',

    getInitialState: function() {
      return {
        classes: []
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      if (self.props.classes) {
        (self.props.classes.split(" ")).map(function (s) {
          classes[s] = true;
        });
      }

      if (self.props.name) {
        classes["e-icon-"+self.props.name] = true;
      }

      self.setState({
        classes: classSet(classes)
      });
    },

    render: function () {
      var self = this;

      return (
          <i className={self.state.classes} />
      );
    }
});
