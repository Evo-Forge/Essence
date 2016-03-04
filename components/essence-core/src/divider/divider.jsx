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

    componentWillReceiveProps(nextProps) {
        this.setState({
            classes: ClassNames('e-divider', nextProps.className, nextProps.classes)
        });
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

module.exports = Divider;