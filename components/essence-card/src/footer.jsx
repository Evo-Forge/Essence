import React from 'react';
import ClassNames from 'classnames';
import './card.less'; // require('!css!less!./card.less');
 
class CardFooter extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                'card-suplimentary-actions',
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

module.exports = CardFooter;