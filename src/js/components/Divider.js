'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'Divider',

    getInitialState: function() {
      return {
        classes: {
          'e-divider': true
        }
      };
    },

    componentDidMount: function () {
      this.setState({
        classes: this.state.classes
      });
    },

    renderChildren: function () {
      var self = this,
          classes = classSet(ClassNames(self.state.classes, self.props.classes));

      return (<div className={classes} />);
    },

    render: function () {
      var self = this;
      return self.renderChildren();
    }
});