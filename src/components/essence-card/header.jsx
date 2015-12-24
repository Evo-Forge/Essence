import React from 'react';
import ClassNames from 'classnames';
import './card.less';
 
class CardHeader extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                'card-header',
                'clearfix',
                this.props.classes,
                this.props.className
            )
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

export default CardHeader;