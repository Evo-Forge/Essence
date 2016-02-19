import React from 'react';
import ClassNames from 'classnames';
import {Utils} from 'essence-core';
import './snackbar.less'; // require('!css!less!./snackbar.less');
 
class SnackBar extends React.Component {
	constructor(props) {
        super(props);
        let self = this;
        this.timeOut = false;
        this.state = {
        	classes: ClassNames(
                'snackbar',
                { 'snackbar-multiline' : false },
                this.props.classes,
                this.props.className
            ),
            visible: props.visible,
            onStart: props.onStart,
            onPause: props.onPause,
            onResume: props.onResume,
            onEnd: props.onEnd,
            delay: parseInt(this.props.delay) > 0 ? parseInt(this.props.delay) : 2000
        };

        if (props.visible) {
            this.timeOut = new Utils.Timer(function() {
                    self.setState({
                        style: {
                            bottom: '-2000px',
                            opacity: 0,
                            zIndex: 0
                        },
                        visible: false
                    });
                    if (props.onEnd) {
                        props.onEnd();
                    }
                },
                self.state.delay
            );
        }
    }

    snackbarStyle(visible) {
        let style       = window.getComputedStyle ? getComputedStyle(this.snackBar, null) : this.snackBar.currentStyle;
        let height      = parseInt( style['height']);
        let width       = parseInt( style['width']);
        let lineHeight  = parseInt( style['line-height']);
        let isMultiLine = Math.floor(height / lineHeight) > 1 ? true : false;
        
        let containerStyle = window.getComputedStyle ? getComputedStyle(this.snackBarContainer, null) : this.snackBarContainer.currentStyle;
        let inlineStyle = {
            bottom: visible ? '20px' : '-2000px',
            opacity: visible ? 1 : 0,
            zIndex: visible ? 1 : 0,
            marginRight: '-' + (parseInt( containerStyle['width'] ) / 2) + 'px'
        };

        return {
            isMultiLine: isMultiLine,
            inlineStyle: inlineStyle
        };
    }

    componentWillReceiveProps(nextProps) {
        let self = this;
        let snackbarStyles = this.snackbarStyle(nextProps.visible);
        let delay = parseInt(nextProps.delay) > 0 ? parseInt(nextProps.delay) : 2000;

        this.setState({
            classes: ClassNames(
                'snackbar',
                nextProps.classes,
                nextProps.className,
                { 'snackbar-multiline' : snackbarStyles.isMultiLine }
            ),
            delay: delay,
            onStart: nextProps.onStart,
            onPause: nextProps.onPause,
            onResume: nextProps.onResume,
            onEnd: nextProps.onEnd,
            visible: nextProps.visible,
            style: snackbarStyles.inlineStyle
        });

        if (nextProps.visible) {
            this.timeOut = new Utils.Timer(function() {
                    self.setState({
                        style: {
                            bottom: '-2000px',
                            opacity: 0,
                            zIndex: 0
                        },
                        visible: false
                    });
                    if (nextProps.onEnd) {
                        nextProps.onEnd();
                    }
                },
                delay
            );
            if (this.state.onStart) {
                this.state.onStart();
            }
        }
    }

    componentDidMount() {
        let snackbarStyles = this.snackbarStyle(this.state.visible);
        this.setState({
            classes: ClassNames(
                this.state.classes,
                { 'snackbar-multiline' : snackbarStyles.isMultiLine }
            ),
            style: snackbarStyles.inlineStyle
        });
        if (this.state.onStart && this.state.visible) {
            this.state.onStart();
        }
    }

    componentWillUnmount() {
        if (this.state.onEnd && this.state.visible) {
            this.state.onEnd();
        } 
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
            if (this.state.onPause && this.state.visible) {
                this.state.onPause();
            }
        }
    }
    
    resumeTimer() {
        if (this.timeOut) {
            this.timeOut.resume();
            if (this.state.onResume && this.state.visible) {
                this.state.onResume();
            }
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

module.exports = SnackBar;