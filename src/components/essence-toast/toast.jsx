import React from 'react';
import ClassNames from 'classnames';
import Timer from '../essence-core/utils/Timer';
import './toast.less';
 
class Toast extends React.Component {
	
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
            style: {
                bottom: this.props.visible ? '0' : 'initial',
                opacity: this.props.visible ? 1 : 0,
                zIndex: this.props.visible ? 1 : 0
            },
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
        let style       = window.getComputedStyle ? getComputedStyle(this.Toast, null) : this.Toast.currentStyle;
        let height      = parseInt( style['height']);
        let lineHeight  = parseInt( style['line-height']);
        let isMultiLine = Math.floor(height / lineHeight) > 1 ? true : false;

        this.setState({
            classes: ClassNames(
                this.state.classes,
                { 'snackbar-multiline' : isMultiLine }
            )
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
                ref={(ref) => this.Toast = ref}
                onMouseOver={this.pauseTimer.bind(this)}
                onMouseOut={this.resumeTimer.bind(this)}
            >
                <div 
                    className={'toast-message'}
                >
                    {this.props.children}
                </div>
            </div>
        );
	}
}

export default Toast;