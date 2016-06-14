import React from 'react';
import ClassNames from 'classnames';
import './switch.less'; // require('!css!less!./switch.less');

class Switch extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            onChange: props.onChange,
            checked: false,
            value: props.value || props.defaultValue,
        	classes: ClassNames(
                props.className,
                props.classes
            )
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            classes: ClassNames(
                nextProps.className,
                nextProps.classes
            ),
            type: nextProps.type,
            checked: nextProps.checked,
            value: nextProps.value || nextProps.defaultValue,
            onChange: nextProps.onChange
        });
    }

    onChange(event) {
        this.setState({
            checked: event.target.checked,
            value: event.target.value,
        });

        if (this.state.onChange) {
            return this.state.onChange(event);
        }
    }

    renderSwitch() {
    	let switchType = this.state.type;
    	switch (switchType) {
            case 'switches':
                return (
                    <span className={ClassNames('e-switches', this.state.classes)}>
                        <label>
                            {this.props.beforeText}
                            <input
                                {...this.props}
                                type={'checkbox'}
                                defaultChecked={this.state.checked}
                                defaultValue={this.state.value}
                                onChange={this.onChange.bind(this)}
                            />
                            <span className={'e-switches-toggle'} />
                            {this.props.afterText}
                        </label>
                    </span>
                );
                break;
            case 'radio':
                return (
                    <span className={ClassNames('e-radio', 'e-radio-success', this.state.classes)}>
                        <label>
                            <input
                                {...this.props}
                                type={'radio'}
                                defaultChecked={this.state.checked}
                                defaultValue={this.state.value}
                                onChange={this.onChange.bind(this)}
                            />
                            <span className={'absolute circle'} />
                            <span className={'absolute e-check'} />
                            {this.props.text}
                        </label>
                    </span>
                );
                break;
    		case 'checkbox':
            default:
                return (
                    <span className={ClassNames('e-checkbox', this.state.classes)}>
                        <label>
                            <input
                                {...this.props}
                                type={'checkbox'}
                                className={'toggle'}
                                defaultChecked={this.state.checked}
                                defaultValue={this.state.value}
                                onChange={this.onChange.bind(this)}
                            />
                            <span className={'absolute e-wave'} />
                            <span className={'absolute e-check-valid'} />
                            {this.props.text}
                        </label>
                    </span>
                );
    			break;
    	}
	}

	render() {
		return (
            <span className={'e-switch'}>
                {this.renderSwitch()}
            </span>
        );
	}
}

module.exports = Switch;