import React from 'react';
import ClassNames from 'classnames';
import './icon.less';
 
class Icon extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                'e-icon-' + this.props.name,
                this.props.className,
                this.props.classes
            )
        };
    }

	render() {
		return (
            <i {...this.props} className={this.state.classes}/>
        );
	}
}

export default Icon;