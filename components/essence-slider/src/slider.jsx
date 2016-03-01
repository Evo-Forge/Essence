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
            zeroActive: false,
            discreteActive: false,
            start: props.start || 0,
            dataValue: props.start || 0,
            lowerColor: props.lowerColor || 'e-background-indigo-400',
            lowerFlex: props.start ? (props.start / 100)+' 1 0%' : '0 1 0%',
            upperColor: props.upperColor || 'e-background-grey-100',
            upperFlex: props.start ? 1 - (props.start / 100)+' 1 0%' : '1 1 0%'
        };
    }

    componentDidMount() {
        let self = this;

        if (this.props.discrete) {
            this.sliderInput.addEventListener('mousedown', function() {
                self.setState({
                    discreteActive: true
                });
            }, false);
            
            this.sliderInput.addEventListener('mouseup', function() {
                self.setState({
                    discreteActive: false
                });
            }, false);
        }

        this.sliderInput.addEventListener('input', function() {
            let sliderValue = self.sliderInput.value;

            self.setState({
                dataValue: sliderValue,
                zeroActive: sliderValue < 1 ? true : false,
                lowerFlex: (sliderValue / 100)+' 1 0%',
                upperFlex: 1 - (sliderValue / 100)+' 1 0%'
            });
        }, false);

    }

	render() {
        return (
            <div className={ClassNames('e-slider', 
                {'discrete': this.state.discreteActive}, 
                {'zero': this.state.zeroActive},
                {'disabled': this.props.disabled}
            )}>
                <input type='range' {...this.props} ref={(ref) => this.sliderInput = ref} defaultValue={this.state.dataValue} data-discrete={this.state.dataValue} />
                <div className={'track'}>
                    <div className={ClassNames('left', this.state.lowerColor)} style={{flex: this.state.lowerFlex}} />
                    <div className={ClassNames('right', this.state.upperColor)} style={{flex: this.state.upperFlex}} />
                </div>
            </div>
        );
	}
}

module.exports = Slider;