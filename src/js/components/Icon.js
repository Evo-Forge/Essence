'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'Icon',

    getInitialState: function() {
      return {
        classes: {}
      };
    },

    renderChildren() {
      var self = this,
          classes = [ClassNames(self.state.classes, self.props.classes)];

      if (self.props.name) {
        
        classes.forEach(function(element){
          classes.push(element);
        });

        classes.push('e-icon-'+self.props.name);

        return (
            <i className={classSet(classes)} onClick={self.props.onClick} />
        );
      }

      return null;
    },

    render: function () {
      return this.renderChildren();
    }
});