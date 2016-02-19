import React from 'react';
import ClassNames from 'classnames';
import './card.less'; // require('!css!less!./card.less');
 
class Card extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.classes,
                this.props.className,
                'card'
            ),
        };
    }

	render() {
		return (
            <div 
                {...this.props}
                className={this.state.classes}
            >
                {this.props.children}
            </div>
        );
	}
}

module.exports = Card;