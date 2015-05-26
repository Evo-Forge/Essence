'use strict';

var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  displayName: 'RippleInk',

  render: function render() {
    var rippleStyle = {
      left: this.props.clickPosition.x + 'px',
      top: this.props.clickPosition.y + 'px',
      backgroundColor: this.props.bgColor
    },
        ripple = React.createElement('div', {
      key: this.props.clickPosition.x,
      className: 'e-ripple-effect',
      style: rippleStyle
    });

    return React.createElement(
      'div',
      {
        ref: 'rippleAnimate',
        className: 'e-ripple-container'
      },
      React.createElement(
        ReactCSSTransitionGroup,
        {
          transitionName: 'e-ripple-effect'
        },
        ripple
      )
    );
  }
});