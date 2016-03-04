import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import './rippleink.less';

class RippleInk extends React.Component {
	constructor(props) {
    super(props);
  }

  renderRipple() {
    let rippleStyle = {
      left: this.props.position.x + 'px',
      top: this.props.position.y + 'px',
      backgroundColor: this.props.color
    };

    return (
      <div
        ref='rippleInkAnimate'
        className={'e-ripple-container'}
        >
          <TransitionGroup
            transitionName='e-ripple-effect'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={50}
          >
            <div
              key={'rippleInkAnimate' + rippleStyle.left}
              className={'e-ripple-effect'}
              style={rippleStyle}
            />
          </TransitionGroup>
      </div>
    );
  }

	render() {
		return this.renderRipple();
	}
}

RippleInk.defaultProps = {
  position: {x: 0, y: 0},
  color: '#FFFFFF'
};

module.exports = RippleInk;