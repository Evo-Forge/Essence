import React from 'react';
import ClassNames from 'classnames';
import Timer from '../essence-core/utils/Timer';
import './toast.less';
 
class ToastBar extends React.Component {
    
    constructor(props) {
        super(props);
        let self = this;
        this.timeOut = false;
        this.state = {
            visible: this.props.visible,
            classes: ClassNames(
                'toast',
                { 'toast-multiline' : false },
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
        let style       = window.getComputedStyle ? getComputedStyle(this.toastBar, null) : this.toastBar.currentStyle;
        let height      = parseInt( style['height']);
        let width       = parseInt( style['width']);
        let lineHeight  = parseInt( style['line-height']);
        let isMultiLine = Math.floor(height / lineHeight) > 1 ? true : false;
        
        let containerStyle = window.getComputedStyle ? getComputedStyle(this.toastBarContainer, null) : this.toastBarContainer.currentStyle;
        let toastStyle = {
            bottom: this.props.visible ? '20px' : 'initial',
            opacity: this.props.visible ? 1 : 0,
            zIndex: this.props.visible ? 1 : 0,
            marginRight: '-' + (parseInt( containerStyle['width'] ) / 2) + 'px'
        };

        this.setState({
            classes: ClassNames(
                this.state.classes,
                { 'toast-multiline' : isMultiLine }
            ),
            style: toastStyle
        });
        
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

export default ToastBar;