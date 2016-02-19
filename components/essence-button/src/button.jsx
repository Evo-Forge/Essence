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
            ripple: this.props.ripple,
            type: this.props.type,
            label: this.props.label,
            isDisabled: this.props.isDisabled,
            icon: this.props.icon,
            tooltipText: this.props.tooltipText,
            tooltipPosition: this.props.tooltipPosition,
            color: '',
            position: {
                x: 0,
                y: 0
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            classes: ClassNames(
                {'e-ripple': nextProps.ripple === false ? false : true },
                nextProps.className,
                nextProps.classes
            ),
            ripple: nextProps.ripple,
            type: nextProps.type,
            label: nextProps.label,
            isDisabled: nextProps.isDisabled,
            icon: nextProps.icon,
            tooltipText: nextProps.tooltipText,
            tooltipPosition: nextProps.tooltipPosition
        });
    }

    renderRipple() {
        if (this.state.ripple === false) {
            return;
        }

        return (
            <RippleInk
                color={this.state.color}
                position={this.state.position}/>
        );
    }

    renderContent() {
        if (this.state.type === 'touchpad') {
            return (
                <div className={'container'}>
                    <i key={'touchpad-icon'} className={'e-icon-' + this.state.icon}>
                        <span key={'touchpad-label'} className={'label'}>{this.state.label}</span>
                    </i>
                </div>
            );
        }

        if (this.state.icon) {
            return (
                <i className={'e-icon-' + this.state.icon}/>
            )
        }

        return (this.state.label || '');
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
        let buttonType = this.state.type === 'touchpad' ? 'default flat' : this.state.type || 'default flat';
        let buttonClasses = ClassNames(this.state.classes, 'e-btn-' + buttonType);
        let disableOption = {};
        if (this.state.isDisabled) {
            disableOption['disabled'] = 'disabled';
        } else {
            disableOption = {};
        }
        return (
            <button 
                {...this.props}
                className={buttonClasses}
                onClick={this.handleClick.bind(this)}
                onTouch={this.handleClick.bind(this)}
                ref={(ref) => this.currentButton = ref}
                data-tooltip={this.state.tooltipText}
                data-position={this.state.tooltipPosition || 'top' }
                {...disableOption}
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

module.exports = Btn;