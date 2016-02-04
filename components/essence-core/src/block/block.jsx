import React from 'react';
import ClassNames from 'classnames';
import './block.less'; // require("!css!less!./block.less");
 
class Block extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(this.props.className, this.props.classes)
        };
    }

    renderBlock() {
    	let blockType = this.props.type;

    	switch (blockType) {
    		case 'span':
    			return (<span {...this.props} className={this.state.classes}>{this.props.children}</span>);
    			break;
    		case 'header':
    			return (<header {...this.props} className={this.state.classes}>{this.props.children}</header>);
    			break;
    		case 'footer':
                return (<footer {...this.props} className={this.state.classes}>{this.props.children}</footer>);
                break;
            case 'section':
    			return (<section {...this.props} className={this.state.classes}>{this.props.children}</section>);
    			break;
    		case 'ul':
    			return (<ul {...this.props} className={this.state.classes}>{this.props.children}</ul>);
    			break;
    		case 'li':
    			return (<li {...this.props} className={this.state.classes}>{this.props.children}</li>);
    			break;
    		case 'hr':
    			return (<hr {...this.props} className={this.state.classes}/>);
    			break;
    		case 'br':
    			return (<br {...this.props} className={this.state.classes}/>);
    			break;
    		default:
    			return (<div {...this.props} className={this.state.classes}>{this.props.children}</div>);
    			break;
    	}
	}

	render() {
		return this.renderBlock();
	}
}

module.exports = Block;
// export default Block;