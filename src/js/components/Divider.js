'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Divider',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        classes: [{
          'divider': true
        }],
        text: false
      };
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    renderChildren: function () {
      var self = this,
          classes = self.state.classes,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        children.push(self.props.children);
      } else if (childrens > 1) {
        self.props.children.map(function (item) {
          children.push(item);
        });
      }

      classes = classSet(classes);

      return (<hr className={classes} />);
    },

    render: function () {
      var self = this;
      return self.renderChildren();
    }
});
