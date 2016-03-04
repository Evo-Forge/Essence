import React from 'react';
import ClassNames from 'classnames';
import './text.less';

class Text extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                {'e-badge': props.badge ? true : false},
                this.props.className, 
                this.props.classes
            )
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            classes: ClassNames(
                {'e-badge': nextProps.badge ? true : false},
                nextProps.className, 
                nextProps.classes
            )
        });
    }

    renderText() {
        let textType = this.props.type;
    	let textBadge = this.props.badge.toString().substring(0, 3);

    	switch (textType) {
    		case 'a':
    			return (<a {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</a>);
    		break;
    		case 'p':
    			return (<p {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</p>);
    		break;
    		case 'label':
    			return (<label {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</label>);
    		break;
    		case 'strong':
    			return (<strong {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</strong>);
    		break;
    		case 'small':
    			return (<small {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</small>);
    		break;
    		case 'caption':
    			return (<caption {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</caption>);
    		break;
    		case 'h1':
    			return (<h1 {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</h1>);
    		break;
    		case 'h2':
    			return (<h2 {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</h2>);
    		break;
    		case 'h3':
    			return (<h3 {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</h3>);
    		break;
    		case 'h4':
    			return (<h4 {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</h4>);
    		break;
    		case 'h5':
    			return (<h5 {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</h5>);
    		break;
    		case 'h6':
    			return (<h6 {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</h6>);
    		break;
    		case 'sup':
    			return (<sup {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</sup>);
    		break;
    		case 'sub':
    			return (<sub {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</sub>);
    		break;
    		case 'em':
                return (<em {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</em>);
            break;
            case 'blockquote':
                return (<blockquote {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</blockquote>);
            break;
            case 'cite':
    			return (<cite {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</cite>);
    		break;
    		default:
    			return (<span {...this.props} data-badge={textBadge} className={this.state.classes}>{this.props.children}</span>);
    		break;
    	}
    }

	render() {
		return this.renderText();
	}
}

Text.defaultProps = {
    type: 'div',
    badge: ''
};

module.exports = Text;