'use strict';

var React = require('react/addons'),
    BtnItem = require('./BtnItem'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'ToastItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: ""
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = [],
          height = parseInt(
            window.getComputedStyle (self.getDOMNode())
            .getPropertyValue('height').replace("px", "")
          ),
          lineHeight = parseInt(
              window.getComputedStyle (self.getDOMNode())
            .getPropertyValue('line-height').replace("px", "")
          );

      classes.push("toast");

      self.setState({
        classes: classes
      });

      // Subscribe to ToastBar show event
      self.subscribe('toast:'+self.props.id, function () {
        self.setState({
          style: {
            bottom: '0',
            opacity: 1,
            zIndex: 1
          }
        });

        if ( Math.floor(height / lineHeight) > 1 ) {

          if (classes.indexOf("toast-multiline") < 0) {
            classes.push("toast-multiline");
          }

          self.setState({
            classes: classes
          });
        }

        setTimeout(function() {
            self.setState({
              style: {}
            });
          },
          2000
        );
      });
    },

    render: function () {
      var self = this,
          style = self.state.style,
          classes = self.state.classes;

      return (
        <div className={classes} id={self.props.id} style={style}>
          <span>
            {self.props.children}
          </span>
        </div>
      );
    }
});
