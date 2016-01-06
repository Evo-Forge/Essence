import React from 'react';
import ClassNames from 'classnames';
import './tab.less'; // require('!css!less!./tab.less');
 
class Tab extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.classes,
                this.props.className
            ),
        };
    }

	render() {
		return (
            <div {...this.props} className={this.state.classes}>
                {this.props.children}
            </div>
        );
	}
}

export default Tab;