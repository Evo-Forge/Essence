import React from 'react';
import ClassNames from 'classnames';
import './touchpad.less';
 
class TouchPad extends React.Component {
    
    constructor(props) {
        super(props);
        let self = this;
        
        this.state = {
            visible: this.props.visible,
            classes: ClassNames(
                'e-touchpad',
                this.props.classes,
                this.props.className
            )
        };
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
            </div>
        );
    }
}

export default TouchPad;