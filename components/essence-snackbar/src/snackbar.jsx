import React from 'react';
import ClassNames from 'classnames';
import Timer from '../../essence-core/src/utils/Timer';
import './snackbar.less'; // require('!css!less!./snackbar.less');
 
class SnackBar extends React.Component {
	
	constructor(props) {
        super(props);
        let self = this;
        this.timeOut = false;
        this.state = {
            visible: this.props.visible,
        	classes: ClassNames(
                'snackbar',
                { 'snackbar-multiline' : false },
                this.props.classes,
                this.props.className
            ),
            delay: parseInt(this.props.delay) > 0 ? parseInt(this.props.delay) : 2000
        };

        if (this.props.visible) {
            this.timeOut = new Timer(function() {
                    self.setState({
                        style: {}
                    });
                },
                self.state.delay
            );
        }
    }

    componentDidMount() {
        let style       = window.getComputedStyle ? getComputedStyle(this.snackBar, null) : this.snackBar.currentStyle;
        let height      = parseInt( style['height']);
        let width       = parseInt( style['width']);
        let lineHeight  = parseInt( style['line-height']);
        let isMultiLine = Math.floor(height / lineHeight) > 1 ? true : false;
        
        let containerStyle = window.getComputedStyle ? getComputedStyle(this.snackBarContainer, null) : this.snackBarContainer.currentStyle;
        let snackbarStyle = {
            bottom: this.props.visible ? '0' : 'initial',
            opacity: this.props.visible ? 1 : 0,
            zIndex: this.props.visible ? 1 : 0,
            marginRight: '-' + (parseInt( containerStyle['width'] ) / 2) + 'px'
        };

        this.setState({
            classes: ClassNames(
                this.state.classes,
                { 'snackbar-multiline' : isMultiLine }
            ),
            style: snackbarStyle
        });
        
        return;
    }

    actionBtn() {
        if (this.props.action) {
            return (
                <button className={'e-btn-flat action'}>
                    {this.props.action}
                </button>
            );
        }
        return;
    }

    pauseTimer() {
        if (this.timeOut) {
            this.timeOut.pause();
        }
    }
    
    resumeTimer() {
        if (this.timeOut) {
            this.timeOut.resume();
        }
    }

	render() {
		return (
            <div
                style={this.state.style}
                className={this.state.classes}
                ref={(ref) => this.snackBarContainer = ref}
                onMouseOver={this.pauseTimer.bind(this)}
                onMouseOut={this.resumeTimer.bind(this)}
            >
                <div 
                    className={'snackbar-message'}
                    ref={(ref) => this.snackBar = ref}
                >
                    {this.props.children}
                </div>
                {this.actionBtn()}
            </div>
        );
	}
}

export default SnackBar;