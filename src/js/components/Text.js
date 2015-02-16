'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Text',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        classes: [],
        text: false
      };
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
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

      self.subscribe('changeText_' + self.props.id, self.changeText);
    },

    componentDidUnmount: function () {
      this.unsubscribe('changeText_' + this.props.id, null);
    },

    changeText: function (newText) {
      var self = this;
      if (newText) {
        self.setState({
          text: newText
        });
      }
    },

    renderChildren: function () {
      var self = this,
          appendText = null,
          text = this.state.text ? this.state.text :
            (self.props.text) ? (self.props.text) : null,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        children.push(self.props.children);
      } else if (childrens > 1) {
        self.props.children.map(function (item) {
          children.push(item);
        });
      }

      if (text && self.props.appendText) {
        appendText = self.props.appendText;
      }

      return (
        <span
          className={self.state.classes}
          onClick={self.props.onClick}
          key={self.props.id}
          id={self.props.id}
        >
          {appendText}
          {text}
          {children}
        </span>
      );
    },

    render: function () {
      var self = this;
      return self.renderChildren();
    }
});
