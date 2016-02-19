import React from 'react';
import ClassNames from 'classnames';
import './icon.less'; // require('!css!less!./icon.less');
 
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

    componentWillReceiveProps(nextProps) {
        this.setState({
            classes: ClassNames(
                'e-icon-' + nextProps.name,
                nextProps.className,
                nextProps.classes
            )
        });
    }

	render() {
		return (
            <i {...this.props} className={this.state.classes}/>
        );
	}
}

module.exports = Icon;