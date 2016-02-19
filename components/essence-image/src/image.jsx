import React from 'react';
import ClassNames from 'classnames';
import './image.less'; // require('!css!less!./image.less');
 
class Image extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(this.props.className, this.props.classes)
        };
    }

	render() {
		return (
            <img {...this.props} className={this.state.classes}/>
        );
	}
}

module.exports = Image;