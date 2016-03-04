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
            uniqueID: 'slider_'+Date.now(),
            zeroActive: props.start ? false : true,
            discreteActive: false,
            start: props.start || 0,
            dataValue: props.start || 0,
            lowerColor: props.lowerColor,
            lowerFlex: props.start ? (props.start / props.max)+' 1 0%' : '0 1 0%',
            upperColor: props.upperColor,
            upperFlex: props.start ? 1 - (props.start / props.max)+' 1 0%' : '1 1 0%'
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
                lowerFlex: (sliderValue / self.props.max)+' 1 0%',
                upperFlex: 1 - (sliderValue / self.props.max)+' 1 0%'
            });
        }, false);

    }

    renderDiscreteStyle() {
        if (this.props.discrete && !this.props.disabled) {
            let style = '#'+this.state.uniqueID+'.discrete input[type=range]::-webkit-slider-thumb:after{content: "' + parseInt(this.state.dataValue) + '"},'+'#'+this.state.uniqueID+'.discrete input[type=range]::-moz-range-thumb:after{content: "' + parseInt(this.state.dataValue) + '"},'+'#'+this.state.uniqueID+'.discrete input[type=range]::-ms-thumb:after{content: "' + parseInt(this.state.dataValue) + '"}';
            return (
                <style key={'style_' + this.state.uniqueID} dangerouslySetInnerHTML={{__html: style}} />
            );
        }
    }

	render() {
        return (
            <div id={this.state.uniqueID} 
                className={ClassNames('e-slider', 
                    {'discrete': this.state.discreteActive}, 
                    {'zero': this.state.zeroActive},
                    {'disabled': this.props.disabled}
                )}>
                <input 
                    type='range'
                    {...this.props}
                    ref={(ref) => this.sliderInput = ref} 
                    defaultValue={this.state.dataValue} 
                    data-discrete={this.state.dataValue} 
                />
                <div className={'track'}>
                    <div className={ClassNames('left', this.state.lowerColor)} style={{flex: this.state.lowerFlex}} />
                    <div className={ClassNames('right', this.state.upperColor)} style={{flex: this.state.upperFlex}} />
                </div>
                {this.renderDiscreteStyle()}
            </div>
        );
	}
}

Slider.defaultProps = {
    min: 0,
    max: 100,
    start: null,
    disabled: null,
    discrete: false,
    lowerColor: 'e-background-indigo-400',
    upperColor: 'e-background-grey-100',
};

module.exports = Slider;