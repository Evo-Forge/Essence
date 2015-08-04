'use strict';

var React = require('react/addons'),
    Mobile = require('../utils/Mobile'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DialogItemFooter',

    mixins: [Mobile, ClassNames],

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
