'use strict';

var React = require('react/addons'),
    BtnItem = require('./BtnItem'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'BottomSheetsItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: {

        }
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = [];

      self.setState({
        classes: classes
      });

      self.subscribe('actions:bottomsheets', function (data) {
        console.log(data);
      });
    },

    render: function () {
      var self = this,
          style = self.state.style,
          classes = self.state.classes;

      return (
        <div
          id={self.props.id}
          style={style}
          className={classes}
        >
          <div className={"snackbar-message"}>
            {self.props.children}
          </div>
        </div>
      );
    }
});
