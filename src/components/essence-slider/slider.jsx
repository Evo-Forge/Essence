import React from 'react';
import ClassNames from 'classnames';
import './slider.less';

class Slider extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                'e-slider',
                {
                    'discrete': (this.props.discrete ? true : false),
                    'zero': (parseInt(this.props.start) > 1 ? false : true)
                },
                this.props.className,
                this.props.classes
            ),
            isHidden: '',
            isMoving: false,
            discrete: (this.props.start || 0),
            inputValue: (this.props.start || 0),
            handleStyles: { left: this.props.start ? this.props.start+'%' : '0%' },
            fillStyles: { width: this.props.start ? this.props.start+'%' : '0%' },
            discreteStyles: {},
            discreteActive: ''
        };
    }

    handleMoveStart() {
        this.setState({
            isMoving: true,
            discreteActive: 'active',
            isHidden: (this.props.discrete) ? '-hide' : ''
        });
    }

    handleMoveEnd() {
        this.setState({
            isHidden: '',
            isMoving: false,
            discreteActive: ''
        });
    }

    handleMove(event) {
        this.handleDrag(event);
    }

    handleDrag(event) {
        let discreteStyles = this.state.discreteStyles;
        let clientX = (this.state.isMobile) ?
              event.changedTouches[0].clientX : event.clientX;
        let sliderParent = this.sliderParent;
        let offset = clientX - sliderParent.offsetParent.offsetLeft;
        let horizontal = ((offset / sliderParent.offsetWidth ) * 100).toFixed(0);
        let horizontalFill = horizontal;
        let offsetPercentage = ((offset / sliderParent.offsetWidth ) * 100);

        if (offsetPercentage < 1) {
            horizontal = horizontalFill = 0;
        } else if (offsetPercentage > 100) {
            horizontal = horizontalFill = 100;
        }

        if (this.props.steps || parseInt(this.props.step)) {
            let stepValue = parseInt(this.props.step) || 20;
            horizontal = horizontalFill = (Math.round((horizontal / stepValue)) * stepValue);
        }

        if (event.screenX !== 0) {
            this.setState({
                discrete: horizontal,

                handleStyles: {
                    left: horizontal + '%'
                },

                fillStyles: {
                    width: horizontalFill + '%'
                },
                inputValue: horizontal
            });
        }

        this.setState({
            discreteStyles: { marginLeft: horizontal + '%' },
            classes: ClassNames( 
                'e-slider',
                {
                    'discrete': (this.props.discrete ? true : false),
                    'zero': (parseInt(horizontal) > 1 ? false : true)
                },
                this.props.className,
                this.props.classes
            )
        });

        this.sliderInput.value = horizontal;

        event.preventDefault();
    }

    steps() {
        var steps = [];
        let step = 0;
        let stepValue = parseInt(this.props.step) || 20;
        let stepMaximum = (100 / stepValue) - stepValue;
        let scrollFix = (
            <div
                className={'e-step'}
                style={{marginLeft: '99.8%'}}
                key={'step-99.8'}
            />
        );

        for (let step; step <= stepMaximum; step += stepValue) {
            steps.push(
                <div
                    className={'e-step'}
                    style={{ marginLeft: step + '%' }}
                    key={'step-' + step}
                />
            );
        }

        steps.push(scrollFix);

        if (this.props.steps || parseInt(this.props.step) > 0) {
            return (
                <div className={'e-steps'}>{steps}</div>
            );
        }

        return;
    }

    discrete() {
        let discreteStyles = this.state.discreteStyles;
        if (this.props.discrete) {
            return (
                <div
                    className={'e-discrete-value ' + this.state.discreteActive}
                    style={discreteStyles}
                >
                    {this.state.discrete}
                </div>
            );
        }
        return;
    }

    fill() {
        if (this.props.fill || !this.props.disable) { 
            return (
                <div
                    className={'e-fill'}
                    style={this.state.fillStyles}
                />
            );
        }
        return;
    }

    renderSlider() {
        let sliderClasses = ClassNames(
            {'disabled': this.props.disable ? true : false}, 
            this.state.classes
        );
        return (
            <div
                className={sliderClasses}
                onMouseLeave={this.handleMoveEnd.bind(this)}
                onMouseDown={this.handleMoveStart.bind(this)}
                onMouseUp={this.handleMoveEnd.bind(this)}
                onMouseMove={this.state.isMoving ? this.handleMove.bind(this) : null}
                onTouchStart={this.handleMoveStart.bind(this)}
                onTouchEnd={this.handleMoveEnd.bind(this)}
                onTouchMove={this.state.isMoving ? this.handleMove.bind(this) : null}
                ref={(ref) => this.sliderParent = ref}
            >
                <div className={'e-slider-track'}>
                    <div
                        className={'e-slider-handle' + this.state.isHidden}
                        ref={(ref) => this.sliderHandle = ref}
                        style={this.state.handleStyles}
                    />
                </div>
                {this.fill()}
                {this.discrete()}
                {this.steps()}
                <input
                    type='hidden'
                    ref={(ref) => this.sliderInput = ref}
                    name={this.props.name || 'sliderInput'} 
                    defaultValue={this.state.inputValue}
                />
            </div>
        );
    }

	render() {
		return this.renderSlider();
	}
}

export default Slider;