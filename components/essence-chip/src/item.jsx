import React from 'react';
import ClassNames from 'classnames';
 
class ChipItem extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.classes,
                this.props.className,
                {
                    'e-chip': true,
                    'clearfix': true,
                    'press': false,
                    'focus': false,
                    'first': this.props.first,
                    'active': this.props.active,
                    'open': false
                }
            ),
            isOpen: this.props.open
        };
    }

    renderImage() {
      return (
        <div className={'e-chip-image e-left'}>
          <img 
            src={this.props.image} 
            alt={this.props.imageAlt}
            onClick={this.setClick.bind(this)}
            onTouch={this.setClick.bind(this)}  />
        </div>
      );
    }

    renderText() {
        if (!this.props.name) return;

        return (
            <div className={'e-chip-text e-left'}>
                <span 
                    onClick={this.setClick.bind(this)}
                    onTouch={this.setClick.bind(this)} 
                    className={'e-chip-name'}>
                    {this.props.name}
                </span>
                <span 
                    onClick={this.setClick.bind(this)}
                    onTouch={this.setClick.bind(this)}
                    className={'e-chip-adress'}>
                    {this.props.email}
                </span>
            </div>
        );
    }

    handleClasses(ev) {
        return (
            {
                'e-chip': true,
                'clearfix': true,
                'press': false,
                'focus': (ev.type === 'mouseenter'),
                'active': this.props.active,
                'open': this.state.isOpen
            }
        );
    }

    setFocus(ev) {
        this.setState({
            classes: ClassNames(
                this.props.classes,
                this.props.className,
                this.handleClasses(ev)
            )
        });

        ev.preventDefault();
    }

    setClick(ev) {
        let targetID = ev.target.id;
        
        this.setState({
            classes: ClassNames(
                this.props.classes,
                this.props.className,
                this.handleClasses(ev),
                'active'
            )
        });

        if (!this.state.isOpen) {
            this.openChip();
        }
        ev.preventDefault();
    }

    openChip() {
        this.setState({
            isOpen: true
        });
        this.props.handleOpenChip();
    }

    componentDidMount() {
        this.setState({
            classes: ClassNames(
                this.props.classes,
                this.props.className,
                this.handleClasses(this)
            )
        });
    }

    renderCloseButton() {
        if (!this.props.active) return;
        return (
            <button
                className={'e-close-btn e-right'}
                onClick={this.props.handleCloseChip.bind(this)}
            />
        );
    }

    renderChip() {
        return (
            <div
                {...this.props}
                className={this.state.classes}
                onClick={this.setClick.bind(this)}
                onMouseEnter={this.setFocus.bind(this)}
                onMouseOut={this.setFocus.bind(this)}
            >
                {this.renderImage()}
                {this.renderText()}
                {this.renderCloseButton()}
            </div>
        );
    }
    
	render() {
        let displayChip = this.props.open || this.props.first ? 'block' : 'none';
		return (
            <div style={{display: displayChip}}>
                {this.renderChip()}
            </div>
        );
	}
}

module.exports = ChipItem;