import React from 'react';
import ClassNames from 'classnames';
import './switch.less';
 
class Switch extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.className, 
                this.props.classes
            )
        };
    }

    renderSwitch() {
    	let switchType = this.props.type;
    	switch (switchType) {
            case 'switches':
                let switchesClasses = ClassNames(
                    'e-switches',
                    this.state.classes
                );
                return (
                    <div className={switchesClasses}>
                        <label>
                            {this.props.beforeText}
                            <input
                                type="checkbox"
                                defaultChecked={this.props.checked}
                                disabled={this.props.disable}
                            />
                            <span className={"e-switches-toggle"} />
                            {this.props.afterText}
                        </label>
                    </div>
                );
                break;
            case 'radio':
                let radioClasses = ClassNames(
                    'e-radio',
                    'e-radio-success',
                    this.state.classes
                );
                return (
                    <div className={radioClasses}>
                        <label>
                            <input
                                type="radio"
                                name={this.props.name}
                                defaultChecked={this.props.checked}
                                defaultValue={this.props.defaultValue}
                            />
                            <span className={"absolute circle"} />
                            <span className={"absolute e-check"} />
                            {this.props.text}
                        </label>
                    </div>
                );
                break;

    		case 'checkbox':
            default:
                let checkboxClasses = ClassNames(
                    'e-checkbox',
                    this.state.classes
                );
                return (
                    <div className={checkboxClasses}>
                        <label>
                            <input
                                type="checkbox"
                                name={this.props.name}
                                defaultChecked={this.props.checked}
                                className={"toggle"}
                            />
                            <span className={"absolute e-wave"} />
                            <span className={"absolute e-check-valid"} />
                            {this.props.text}
                        </label>
                    </div>
                );
    			break;
    	}
	}

	render() {
		return (
            <div className={'e-switch'}>
                {this.renderSwitch()}
            </div>
        );
	}
}

export default Switch;