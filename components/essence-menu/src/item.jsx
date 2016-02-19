import React from 'react';
import ClassNames from 'classnames';
 
class MenuItem extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }
    
	render() {
		return (
            <li 
                {...this.props} 
                className={this.state.classes}
            >
                {this.props.children}
            </li>
        );
	}
}

module.exports = MenuItem;