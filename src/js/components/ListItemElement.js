'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'ListItemElement',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        text: false
      };
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    renderChildren: function () {
      var self = this,
          classes = self.state.classes;

      classes = classSet(classes);

      return (
        <li>
          <a
            id={self.props.element.id}
            href={self.props.element.link}
            onClick={self.props._onClick}
          >
            {self.props.element.text}
          </a>
        </li>
      );
    },

    render: function () {
      var self = this;
      return self.renderChildren();
    }
});
