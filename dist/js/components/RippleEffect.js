'use strict';

var React = require('react/addons'),
    Position = require('../utils/Position'),
    ClickPosition = require('../utils/ClickPosition'),
    BackgroundColor = require('../utils/BackgroundColor'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  displayName: 'RippleInk',

  render: function render() {

    var element = this.props.element,
        parentPosition = Position(element.currentTarget),
        clickPosition = ClickPosition(element, parentPosition),
        bgColor = BackgroundColor(element),
        rippleStyle = {
      left: clickPosition.x + 'px',
      top: clickPosition.y + 'px',
      backgroundColor: bgColor
    },
        ripple = React.createElement('div', {
      key: clickPosition.x,
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