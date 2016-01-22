import React from 'react';
import ClassNames from 'classnames';
import './tooltip.less';
 
class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        let self = this;
        
        this.state = {
            style: {
                display: (this.props.visible ? 'block' : 'none')
            },
            classes: ClassNames(
                'e-tooltip',
                this.props.classes,
                this.props.className
            )
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            style: { 
                display: (nextProps.visible ? 'block' : 'none')
            }
        });
    }

    render() {
        return (
            <div style={this.state.style} className={this.state.classes} ref={(ref) => this.Tooltip = ref}>
                <span>{this.props.text}</span>
            </div>
        );
    }
}

export default Tooltip;