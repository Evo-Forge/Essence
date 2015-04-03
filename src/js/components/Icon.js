'use strict';

var React = require('react/addons'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Icon',

    mixins: [ClassNames],

    getInitialState: function() {
      return {
        classes: []
      };
    },

    renderChildren() {
      var self = this,
          classes = ClassNames([], self.props.classes);

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
