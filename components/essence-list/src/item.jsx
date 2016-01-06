import React from 'react';
import ClassNames from 'classnames';
 
class ListItem extends React.Component {
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

export default ListItem;