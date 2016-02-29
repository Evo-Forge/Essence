'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'ToastItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: {
          'toast': true
        }
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = ClassNames(self.state.classes, self.props.classes),
          height = parseInt(
            window.getComputedStyle (ReactDOM.findDOMNode(self))
            .getPropertyValue('height').replace("px", "")
          ),
          lineHeight = parseInt(
              window.getComputedStyle (ReactDOM.findDOMNode(self))
            .getPropertyValue('line-height').replace("px", "")
          );

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

          if (!classes["toast-multiline"]) {
            classes["toast-multiline"] = true;
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
          classes = classSet(self.state.classes);

      return (
        <div
          className={classes}
          id={self.props.id}
          style={style}
        >
          {self.props.children}
        </div>
      );
    }
});