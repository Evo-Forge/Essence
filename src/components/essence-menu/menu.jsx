import React from 'react';
import ClassNames from 'classnames';
import './menu.less';
 
class Menu extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.classes,
                this.props.className,
                {
                    'e-list': true
                }
            ),
        };
    }

	render() {
		return (
            <ul {...this.props} className={this.state.classes}>
                {this.props.children}
            </ul>
        );
	}
}

export default Menu;