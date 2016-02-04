import React from 'react';
import ClassNames from 'classnames';
import { Utils, RippleInk } from 'essence-core';
import './button.less'; //require('!css!less!./button.less');

class Btn extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                {'e-ripple': this.props.ripple === false ? false : true },
                this.props.className,
                this.props.classes
            ),
            color: '',
            position: {
                x: 0,
                y: 0
            }
        };
    }

    renderRipple() {
        if (this.props.ripple === false) {
            return;
        }

        return (
            <RippleInk
                color={this.state.color}
                position={this.state.position}/>
        );
    }

    renderContent() {
        if (this.props.type === 'touchpad') {
            return (
                <div className={'container'}>
                    <i key={'touchpad-icon'} className={'e-icon-' + this.props.icon}>
                        <span key={'touchpad-label'} className={'label'}>{this.props.label}</span>
                    </i>
                </div>
            );
        }

        if (this.props.icon) {
            return (
                <i className={'e-icon-' + this.props.icon}/>
            )
        }

        return (this.props.label || '');
    }

    handleClick(event) {
        let boundingClient = this.currentButton.getBoundingClientRect();
        
        this.setState({
            color: Utils.BackgroundColor(event),
            position: Utils.ClickPosition(event, boundingClient)
        });

        return (
            this.props.onClick ? this.props.onClick(event) : true
        );
    }

    renderBtn() {
        let buttonType = this.props.type === 'touchpad' ? 'default flat' : this.props.type || 'default flat';
        let buttonClasses = ClassNames(this.state.classes, 'e-btn-' + buttonType);
        return (
            <button 
                {...this.props} 
                className={buttonClasses}
                onClick={this.handleClick.bind(this)}
                onTouch={this.handleClick.bind(this)}
                ref={(ref) => this.currentButton = ref}
                data-tooltip={this.props.tooltipText}
                data-position={this.props.tooltipPosition || 'top' }
                type={this.props.submit ? 'submit' : 'button'}
            >
                {this.renderRipple()}
                {this.renderContent()}
            </button>
        );
    }

	render() {
		return this.renderBtn();
	}
}

export default Btn;