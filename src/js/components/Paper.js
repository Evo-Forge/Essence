'use strict';

var React = require('react'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'Paper',

    getInitialState: function() {
      return {
        classes: {
          'e-paper-components': true
        }
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      if (self.props.classes) {
        classes = ClassNames(classes, self.props.classes);
      }

      self.setState({
        classes: classSet(classes)
      });
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        children.push(self.props.children);
      } else {
        self.props.children.map(function (item, key) {
          item = (
            React.cloneElement(item, {
              id: key,
              key: key
            })
          );
          children.push(item);
        });
      }

      return children;
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
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