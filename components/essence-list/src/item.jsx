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

    componentWillReceiveProps(nextProps) {
        this.setState({
            classes: ClassNames(
                nextProps.classes,
                nextProps.className
            )
        });
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

module.exports = ListItem;