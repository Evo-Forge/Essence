'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Btn',

    getInitialState: function() {
      return {
        children: [],
        classes: []
      };
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        children.push(self.props.children);
      } else if (childrens > 1) {
        self.props.children.map(function (item) {
          children.push(item);
        });
      }

      return children;
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      if (self.props.classes) {
        (self.props.classes.split(" ")).map(function (s) {
          classes[s] = true;
        });
      }

      self.setState({
        classes: classSet(classes)
      });
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    render: function () {
      var self = this;

      return (
        <div className={self.state.classes}>
          {self.renderChildren()}
        </div>
      );
    }
});
