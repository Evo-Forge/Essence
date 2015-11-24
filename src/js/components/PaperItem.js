'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'PaperItem',

    getInitialState: function() {
      return {
        classes: {
          'e-paper': true,
          'sharp': false,
          'circle': false
        }
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      classes['sharp'] = (self.props.type === 'sharp') ? true : false;
      classes['circle'] = (self.props.type === 'circle') ? true : false;

      if (self.props.classes) {
        classes = ClassNames(classes, self.props.classes);
      }

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