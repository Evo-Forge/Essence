import React from 'react';
import ClassNames from 'classnames';
import './touchpad.less';
 
class TouchPad extends React.Component {
    
    constructor(props) {
        super(props);
        let self = this;
        
        this.state = {
            visible: props.visible || false,
            close: false,
            style: {},
            classes: ClassNames(
                'e-touchpad',
                {'inline': props.inline},
                props.classes,
                props.className
            )
        };
    }

    componentWillReceiveProps(nextProps) {
        let top = (nextProps.position.top - (nextProps.inline ? 54 : 108)),
            left = (nextProps.position.left - (nextProps.inline ? 54 : 108));

        this.setState({
            style: {
                top: (top < 0 ? 4 : top) + 'px', 
                left: (left < 0 ? 4 : left) + 'px'
            },
            visible: (nextProps.visible ? true : false),
            close: (nextProps.visible ? true : false),
            classes: ClassNames(
                'e-touchpad',
                {'inline': nextProps.inline},
                nextProps.classes,
                nextProps.className
            )
        });
    }

    renderClose() {
        return (
            <button 
                type='button'
                style={ {display: this.state.close ? 'block' : 'none'} }
                className={'e-btn-default flat close'}
                onClick={this.closeTouchPad.bind(this)}
            >
                <div className={'container'}>
                    <i className={'e-icon-navigation-close'}>
                        <span className={'label'} />
                    </i>
                </div>
            </button>
        );
    }

    closeTouchPad() {
        this.setState({
            visible: false,
            close: false
        });
    }

    renderTouchPad() {
        if (this.props.inline) {
            return (
                <div
                    style={this.state.style}
                    className={ ClassNames( this.state.classes, {'show' : this.state.visible} ) }
                    ref={(ref) => this.TouchPadContainer = ref}>
                    {this.props.children}
                </div>
            );
        }
        return (
            <div
                style={this.state.style}
                className={ ClassNames( this.state.classes, {'show' : this.state.visible} ) }
                ref={(ref) => this.TouchPadContainer = ref}>
                <div className={'blur'} />
                {this.props.children}
                {this.renderClose()}
            </div>
        )
    }

    render() {
        return this.renderTouchPad();
    }
}

module.exports = TouchPad;