'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DatePickerItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: {
          'e-picker-container': true
        }
      };
    },

    componentDidMount: function () {
      var classes = this.state.classes || [];

      this.setState({
        classes: classes
      });
    },

    renderDatePicker: function () {
      var self = this,
          classes = classSet( Utils.classNames(self.state.classes, self.props.classes) );

      return (
        <div className={classes}>
          {self.props.children}
        </div>
      );
    },

    render: function () {
      var self = this;
      return self.renderDatePicker();
    }
});
