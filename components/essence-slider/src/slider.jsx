import React from 'react';
import ClassNames from 'classnames';
import './slider.less';

class Slider extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.className,
                this.props.classes
            ),
            start: props.start || 0,
            lowerColor: props.lowerColor || 'e-background-indigo-400',
            lowerWidth: props.start ? props.start+'%' : '0%',
            upperColor: props.upperColor || 'e-background-grey-100',
            upperWidth: props.start ? 100 - props.start+'%' : '100%'
        };
    }

    componentDidMount() {
        let self = this;
        this.sliderInput.addEventListener('input', function() {
            let sliderValue = self.sliderInput.value;

            self.setState({
                lowerWidth: sliderValue+'%',
                upperWidth: 100 - sliderValue+'%'
            });
        }, false);      
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

	render() {
        return (
            <div className={'e-slider'}>
                <input type='range' {...this.props} ref={(ref) => this.sliderInput = ref} defaultValue={this.state.start} />
                <div className={'track'}>
                    <div className={ClassNames('left', this.state.lowerColor)} style={{width: this.state.lowerWidth}} />
                    <div className={ClassNames('right', this.state.upperColor)} style={{width: this.state.upperWidth}} />
                </div>
            </div>
        );
	}
}

module.exports = Slider;