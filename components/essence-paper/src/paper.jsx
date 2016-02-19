import React from 'react';
import ClassNames from 'classnames';
import './paper.less'; // require('!css!less!./paper.less');
 
class Paper extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                'e-paper', 
                'e-shadow-1',
                this.props.type,
                this.props.classes,
                this.props.className 
            )
        };
    }

	render() {
		return (
            <div 
                {...this.props} 
                className={this.state.classes}>
                {this.props.children}
            </div>
        );
	}
}

module.exports = Paper;