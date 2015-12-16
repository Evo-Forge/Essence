import React from 'react';
import ClassNames from 'classnames';
import './divider.less';
 
class Divider extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames('e-divider', this.props.className, this.props.classes)
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

export default Divider;