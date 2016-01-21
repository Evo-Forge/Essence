import React from 'react';
import ClassNames from 'classnames';
import './touchpad.less';
 
class TouchPad extends React.Component {
    
    constructor(props) {
        super(props);
        let self = this;
        
        this.state = {
            visible: this.props.visible,
            close: false,
            style: { 
                visibility: 'hidden',                 
                opacity: '0',                 
                width: '0',
                height: '0',
                top: '50%', 
                left: '50%' 
            },
            classes: ClassNames(
                'e-touchpad',
                this.props.classes,
                this.props.className
            )
        };
    }

    componentWillReceiveProps(nextProps) {
        let top = (nextProps.position.top - 108),
            left = (nextProps.position.left - 108);
        this.setState({
            style: { 
                visibility: (nextProps.visible ? 'visible' : 'hidden'),
                opacity: (nextProps.visible ? '1' : '0'),
                top: (top < 0 ? 4 : top) + 'px', 
                left: (left < 0 ? 4 : left) + 'px'
            },
            close: (nextProps.visible ? true : false),
        });
    }

    closeTouchPad() {
        let style = this.state.style;

        style.visibility = 'hidden';
        style.width = '0';
        style.height = '0';
        style.opacity = '0';

        this.setState({
            visible: false,
            style: style,
            close: false
        });
    }

    render() {
        return (
            <div
                style={this.state.style}
                className={this.state.classes}
                ref={(ref) => this.TouchPadContainer = ref}
            >
                <div className={'blur'} />
                {this.props.children}

                <button 
                    type='button'
                    style={ this.state.close ? {display: 'block'} : {display: 'none'} }
                    className={'e-ripple close e-btn-default flat'}
                    onClick={this.closeTouchPad.bind(this)}
                >
                    <div className={'container'}>
                        <i className={'e-icon-navigation-close'}>
                            <span className={'label'} />
                        </i>
                    </div>
                </button>
            </div>
        );
    }
}

export default TouchPad;