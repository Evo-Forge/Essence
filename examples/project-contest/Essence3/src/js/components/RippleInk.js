'use strict';

var React = require('react/addons'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
    displayName: 'RippleInk',

    render: function () {
      var rippleStyle = {
            left: this.props.clickPosition.x + 'px',
            top: this.props.clickPosition.y + 'px',
            backgroundColor: this.props.bgColor
          },
          ripple = (
            <div
              key={this.props.clickPosition.x}
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
