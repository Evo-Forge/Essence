import React from 'react';
import ClassNames from 'classnames';
import './input.less'; // require('!css!less!./input.less');

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: {
                current: 0,
                maximum: parseInt(this.props.counter)
            },
            inputClasses: ClassNames(
                'e-input',
                { 'empty': this.props.value || this.props.defaultValue ? false : true }
            ),
            inputValue: this.props.value || this.props.defaultValue || '',
            classes: ClassNames('e-input-group', this.props.className, this.props.classes)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            classes: ClassNames('e-input-group', nextProps.className, nextProps.classes)
        });
    }

    handleChange(event) {
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
                { 'empty': value.length > 0 ? false : true }
            )
        });

        if (this.props.onChange) {
            return this.props.onChange(event);
        }
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
                        {...this.props}
                        className={this.state.inputClasses}
                        onChange={this.handleChange.bind(this)}
                        defaultValue={this.state.inputValue}
                        value={this.state.inputValue}
                        ref={(ref) => this.currentInput = ref}
                    />
                );
                break;
            default:
                return (
                    <input
                        {...this.props}
                        className={this.state.inputClasses}
                        defaultValue={this.state.inputValue}
                        value={this.state.inputValue}
                        onChange={this.handleChange.bind(this)}
                        ref={(ref) => this.currentInput = ref}
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

Input.defaultProps = {
    counter: false,
    value: undefined,
    label: undefined,
    placeholder: undefined,
    hint: undefined,
    type: 'text'
};

module.exports = Input;