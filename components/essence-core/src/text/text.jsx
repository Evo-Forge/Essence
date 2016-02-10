import React from 'react';
import ClassNames from 'classnames';
import './text.less';  // require("!css!less!./text.less");

class Text extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(this.props.className, this.props.classes)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            classes: ClassNames(nextProps.className, nextProps.classes)
        });
    }

    renderText() {
    	let textType = this.props.type;

    	switch (textType) {
    		case 'a':
    			return (<a {...this.props} className={this.state.classes}>{this.props.children}</a>);
    		break;
    		case 'p':
    			return (<p {...this.props} className={this.state.classes}>{this.props.children}</p>);
    		break;
    		case 'label':
    			return (<label {...this.props} className={this.state.classes}>{this.props.children}</label>);
    		break;
    		case 'strong':
    			return (<strong {...this.props} className={this.state.classes}>{this.props.children}</strong>);
    		break;
    		case 'small':
    			return (<small {...this.props} className={this.state.classes}>{this.props.children}</small>);
    		break;
    		case 'caption':
    			return (<caption {...this.props} className={this.state.classes}>{this.props.children}</caption>);
    		break;
    		case 'h1':
    			return (<h1 {...this.props} className={this.state.classes}>{this.props.children}</h1>);
    		break;
    		case 'h2':
    			return (<h2 {...this.props} className={this.state.classes}>{this.props.children}</h2>);
    		break;
    		case 'h3':
    			return (<h3 {...this.props} className={this.state.classes}>{this.props.children}</h3>);
    		break;
    		case 'h4':
    			return (<h4 {...this.props} className={this.state.classes}>{this.props.children}</h4>);
    		break;
    		case 'h5':
    			return (<h5 {...this.props} className={this.state.classes}>{this.props.children}</h5>);
    		break;
    		case 'h6':
    			return (<h6 {...this.props} className={this.state.classes}>{this.props.children}</h6>);
    		break;
    		case 'sup':
    			return (<sup {...this.props} className={this.state.classes}>{this.props.children}</sup>);
    		break;
    		case 'sub':
    			return (<sub {...this.props} className={this.state.classes}>{this.props.children}</sub>);
    		break;
    		case 'em':
    			return (<em {...this.props} className={this.state.classes}>{this.props.children}</em>);
    		break;
    		default:
    			return (<span {...this.props} className={this.state.classes}>{this.props.children}</span>);
    		break;
    	}
    }

	render() {
		return this.renderText();
	}
}

module.exports = Text;
// export default Text;