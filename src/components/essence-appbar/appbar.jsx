import React from 'react';
import ClassNames from 'classnames';
import './appbar.less';
 
class AppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames('e-appbar clearfix', this.props.className, this.props.classes)
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

export default AppBar;