import React from 'react';
import ClassNames from 'classnames';
import './tooltip.less';
 
class Tooltip extends React.Component {
    constructor(props) {
        super(props);
        let self = this;
        
        this.state = {
            style: null,
            visible: props.visible,
            target: props.target,
            position: props.position || 'bottom',
            classes: ClassNames(
                'e-tooltip',
                props.classes,
                props.className
            )
        }
    }

    setStyle() {
        if (!document.querySelector(this.state.target)) { return; }

        let position = this.state.position;
        let target = document.querySelector(this.state.target);
        let props = target.getBoundingClientRect();

        let style = {};
        let left = props.left + (props.width / 2);
        let top = props.top + (props.height / 2);
        let marginLeft = -1 * (this.Tooltip.offsetWidth / 2);
        let marginTop = -1 * (this.Tooltip.offsetHeight / 2);

        style.left = left;
        style.top = top;
        style.marginLeft = marginLeft;
        style.marginTop = marginTop + 'px';

        if (left + marginLeft < 0) {
            style.left = 0;
            style.marginLeft = 0;
        } else {
            style.left = left + 'px';
            style.marginLeft = marginLeft + 'px';
        }

        if (position === 'top') {
            style.top = top - this.Tooltip.offsetHeight - 10 + 'px';
        } else {
            style.top = top + props.height + 10 + 'px';
        }

        return style;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            style: this.setStyle(),
            visible: nextProps.visible,
            target: nextProps.target
        });
    }

    render() {
        return (
            <div className={this.state.classes} ref={(ref) => this.TooltipContainer = ref}>
                <span 
                    style={this.state.style} 
                    ref={(ref) => this.Tooltip = ref} 
                    className={(this.state.visible ? 'active' : '')}>
                    {this.props.text || this.props.children}
                </span>
            </div>
        );
    }
}

module.exports = Tooltip;