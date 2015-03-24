'use strict';

var React = require('react/addons');

module.exports = React.createClass({
    displayName: 'BottomSheets',

    render: function () {
      var self = this;
      return self.props.children;
    }
});
