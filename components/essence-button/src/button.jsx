import React from 'react';
import ClassNames from 'classnames';
import RippleInk from 'essence-core/src/rippleink/rippleink.jsx';
import BackgroundColor from 'essence-core/src/utils/BackgroundColor';
import ClickPosition from 'essence-core/src/utils/ClickPosition';
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
            color: BackgroundColor(event),
            position: ClickPosition(event, boundingClient)
        });

        return (
            this.props.onClick || true
        );
    }

    renderBtn() {
        let buttonType = this.props.type || 'default flat';
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