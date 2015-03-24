'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'ListItemElement',

    mixins: [PubSub, ClassNames],

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
