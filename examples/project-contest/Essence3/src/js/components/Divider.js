'use strict';

var React = require('react/addons'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Divider',

    mixins: [ClassNames],

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
