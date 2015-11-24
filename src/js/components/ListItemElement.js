'use strict';

var React = require('react'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'ListItemElement',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        text: false
      };
    },

    componentDidMount: function () {
      var classes = this.state.classes;

      this.setState({
        classes: classes
      });
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    renderChildren: function () {
      var self = this,
          classes = classSet( ClassNames(self.state.classes, this.props.classes) );

      if (self.props.element) {
        return (
          <li className={classes}>
            <a
              id={self.props.element.id}
              href={self.props.element.link}
              onClick={self.props._onClick}
            >
              {self.props.element.text}
            </a>
          </li>
        );
      }

      return (
        <li className={classes}>
          {self.props.children}
        </li>
      );
    },

    render: function () {
      var self = this;
      return self.renderChildren();
    }
});