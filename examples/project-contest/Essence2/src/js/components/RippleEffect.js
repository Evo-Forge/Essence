'use strict';

var React = require('react/addons'),
    Position = require('../utils/Position'),
    ClickPosition = require('../utils/ClickPosition'),
    BackgroundColor = require('../utils/BackgroundColor'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
    displayName: 'RippleInk',

    render: function () {

      var element = this.props.element,
          parentPosition = Position (element.currentTarget),
          clickPosition = ClickPosition (element, parentPosition),
          bgColor = BackgroundColor(element),
          rippleStyle = {
            left: clickPosition.x + 'px',
            top: clickPosition.y + 'px',
            backgroundColor: bgColor
          },
          ripple = (
            <div
              key={clickPosition.x}
              className={'e-ripple-effect'}
              style={rippleStyle}
              >
            </div>
          );

      return (
        <div
          ref="rippleAnimate"
          className={"e-ripple-container"}
          >
            <ReactCSSTransitionGroup
              transitionName="e-ripple-effect"
            >
              {ripple}
            </ReactCSSTransitionGroup>
        </div>
      );
    }
});
