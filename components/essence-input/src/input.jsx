import React from 'react';
import ClassNames from 'classnames';
import './input.less'; // require('!css!less!./input.less');

class Input extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            counter: {
                current: 0,
                maximum: parseInt(this.props.counter) || 50
            },
            inputClasses: ClassNames(
                'e-input',
                { 'empty': true }
            ),
            inputValue: this.props.value || this.props.defaultValue || '',
        	classes: ClassNames(this.props.className, this.props.classes)
        };
    }

    handleChange() {
        let counter = this.state.counter;
        let value = this.currentInput.value;

        if (value.length >= counter.maximum && this.props.counter) {
            value = value.substr(0, counter.maximum);
        }

        counter.current = value.length;

        this.setState({
            counter: counter,
            inputValue: value,
            inputClasses: ClassNames(
                'e-input',
                { 'empty': counter.current === 0 ? true : false }
            )
        });
    }

    renderLabel() {
        if (this.props.label || !this.props.placeholder) {
            return (
                <span className='floating-label'>
                    {this.props.label}
                </span>
            );
        }
        return;
    }

    renderHint() {
        if (!this.props.hint) {
            return (
                <span className='e-hint'>
                    {this.props.hint}
                </span>
            );
        }
        return;
    }

    renderCounter() {
        if (this.props.counter) {
            return (
                <span className={'e-count'}>
                {this.state.counter.current}/{this.state.counter.maximum}
                </span>
            )
        }
        return;
    }

    renderEffect() {
      return (
        <span className={'e-input-efects'} />
      )
    }

    renderInput() {
    	let inputType = this.props.type;

        switch (inputType) {
    		case 'textarea':
    			return (
                    <textarea
                        className={this.state.inputClasses}
                        onChange={this.handleChange.bind(this)}
                        defaultValue={this.state.inputValue}
                        value={this.state.inputValue}
                        ref={(ref) => this.currentInput = ref}
                        {...this.props}
                    />
                );
    			break;
    		default:
    			return (
                    <input
                        className={this.state.inputClasses}
                        defaultValue={this.state.inputValue}
                        value={this.state.inputValue}
                        onChange={this.handleChange.bind(this)}
                        ref={(ref) => this.currentInput = ref}
                        {...this.props}
                      />
                );
    			break;
    	}
    }

	render() {
		return (
            <div className={this.state.classes}>
                {this.renderInput()}
                {this.renderCounter()}
                {this.renderEffect()}
                {this.renderLabel()}
                {this.renderHint()}
            </div>
        );
	}
}

export default Input;