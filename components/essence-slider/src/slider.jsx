import React from 'react';
import ClassNames from 'classnames';
import './slider.less';

class Slider extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                {
                    'discrete': (this.props.discrete ? true : false),
                    'zero': (parseInt(this.props.start) > 1 ? false : true)
                },
                this.props.className,
                this.props.classes
            ),
            lowerColor: props.lowerColor || 'e-background-indigo-400',
            lowerWidth: this.props.start ? this.props.start+'%' : '0%',
            upperColor: props.upperColor || 'e-background-grey-100',
            upperWidth: this.props.start ? 100 - this.props.start+'%' : '100%'
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
                <input type='range' {...this.props} ref={(ref) => this.sliderInput = ref} defaultValue={this.state.inputValue} />
                <div className={'background'}>
                    <div className={ClassNames('lower', this.state.lowerColor)} style={{width: this.state.lowerWidth}} />
                    <div className={ClassNames('upper', this.state.upperColor)} style={{width: this.state.upperWidth}} />
                </div>
            </div>
        );
	}
}

module.exports = Slider;