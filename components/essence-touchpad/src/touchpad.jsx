import React from 'react';
import ClassNames from 'classnames';
import './touchpad.less';
 
class TouchPad extends React.Component {
    
    constructor(props) {
        super(props);
        let self = this;
        
        this.state = {
            visible: this.props.visible,
            style: { 
                display: 'none', 
                top: '200px', 
                left: '200px' 
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
                display: (nextProps.visible ? 'block' : 'none'),
                top: (top < 0 ? 4 : top) + 'px', 
                left: (left < 0 ? 4 : left) + 'px'
            }
        });
    }

    closeTouchPad() {
        this.setState({
            visible: false,
            style: { display: 'none' }
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