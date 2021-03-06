import React from 'react';
import ClassNames from 'classnames';
import {Utils} from 'essence-core';
import './toast.less'; // require('!css!less!./toast.less');
 
class ToastBar extends React.Component {

    constructor(props) {
        super(props);
        let self = this;
        this.timeOut = false;
        this.state = {
            classes: ClassNames(
                'toast',
                { 'toast-multiline' : false },
                props.classes,
                props.className
            ),
            visible: props.visible,
            onStart: props.onStart,
            onPause: props.onPause,
            onResume: props.onResume,
            onEnd: props.onEnd,
            delay: parseInt(props.delay) > 0 ? parseInt(props.delay) : 2000
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

    toastStyle(visible) {
        let style       = window.getComputedStyle ? getComputedStyle(this.toastBar, null) : this.toastBar.currentStyle;
        let height      = parseInt( style['height']);
        let width       = parseInt( style['width']);
        let lineHeight  = parseInt( style['line-height']);
        let isMultiLine = Math.floor(height / lineHeight) > 1 ? true : false;
        
        let containerStyle = window.getComputedStyle ? getComputedStyle(this.toastBarContainer, null) : this.toastBarContainer.currentStyle;
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
        let toastStyles = this.toastStyle(nextProps.visible);
        let delay = parseInt(nextProps.delay) > 0 ? parseInt(nextProps.delay) : 2000;

        this.setState({
            classes: ClassNames(
                'toast',
                nextProps.classes,
                nextProps.className,
                { 'toast-multiline' : toastStyles.isMultiLine }
            ),
            delay: delay,
            onStart: nextProps.onStart,
            onPause: nextProps.onPause,
            onResume: nextProps.onResume,
            onEnd: nextProps.onEnd,
            visible: nextProps.visible,
            style: toastStyles.inlineStyle
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
        let toastStyles = this.toastStyle(this.state.visible);
        this.setState({
            classes: ClassNames(
                this.state.classes,
                { 'toast-multiline' : toastStyles.isMultiLine }
            ),
            style: toastStyles.inlineStyle
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
                ref={(ref) => this.toastBarContainer = ref}
                onMouseOver={this.pauseTimer.bind(this)}
                onMouseOut={this.resumeTimer.bind(this)}
            >
                <div 
                    className={'toast-message'}
                    ref={(ref) => this.toastBar = ref}
                >
                    {this.props.children}
                </div>                
            </div>
        );
    }
}

module.exports = ToastBar;