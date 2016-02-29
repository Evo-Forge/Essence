'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'Image',

    getInitialState: function() {
      return {
        classes: {}
      };
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    renderChildren: function () {
      var self = this,
          classes = classSet(ClassNames(self.state.classes, self.props.classes));

      return (
        <img
          className={classes}
          key={self.props.id}
          id={self.props.id}
          src={self.props.src}
          alt={self.props.alt}
          width={self.props.width}
          height={self.props.height}
        />
      );
    },

    render: function () {
      return this.renderChildren();
    }
});