'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Icon',

    getInitialState: function() {
      return {
        classes: []
      };
    },

    renderChildren() {
      var self = this,
          classes = Utils.classNames([], self.props.classes);

      if (self.props.name) {
        classes["e-icon-"+self.props.name] = true;
      }

      if (self.props.name) {
        return (
            <i className={classSet(classes)} onClick={self.props.onClick} />
        );
      }

      return null;
    },

    render: function () {
      var self = this;
      return self.renderChildren();
    }
});
