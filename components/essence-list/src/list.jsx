import React from 'react';
import ClassNames from 'classnames';
import './list.less'; // require('!css!less!./list.less');
 
class List extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.classes,
                this.props.className,
                {
                    'e-list': (this.props.type === 'big-icon' || this.props.type === 'navigation' || this.props.type === 'expand') ? false : true,
                    'e-list-big-icon': this.props.type === 'big-icon' ? true : false,
                    'e-list-navigation': this.props.type === 'navigation' ? true : false,
                    'e-sublist-navigation': this.props.type === 'sublist' ? true : false,
                    'e-list-inline': this.props.type === 'inline' ? true : false,
                    'has-icon': this.props.icon ? true : false,
                    'has-avatar': this.props.avatar ? true : false,
                    'has-checkbox': this.props.type === 'checkbox' ? true : false,
                    'has-right-checkbox': this.props.position === 'right' ? true : false,
                    'has-dropdown': this.props.type === 'expand' ? true : false,
                    'has-switches': this.props.type === 'switch' ? true : false,
                    'left': false,
                    'right': false,
                    'clearfix': this.props.type === 'big-icon' ? true : false,
                    'two-line': this.props.type === 'two-line' ? true : false,
                    'multi-line': this.props.type === 'multi-line' ? true : false,
                    'single-line': this.props.type === 'single-line' && (this.props.type !== 'navigation' || this.props.type !== 'expand') ? true : false
                }
            )
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            classes: ClassNames(
                nextProps.classes,
                nextProps.className,
                {
                    'e-list': (nextProps.type === 'big-icon' || nextProps.type === 'navigation' || nextProps.type === 'expand') ? false : true,
                    'e-list-big-icon': nextProps.type === 'big-icon' ? true : false,
                    'e-list-navigation': nextProps.type === 'navigation' ? true : false,
                    'e-sublist-navigation': nextProps.type === 'sublist' ? true : false,
                    'e-list-inline': nextProps.type === 'inline' ? true : false,
                    'has-icon': nextProps.icon ? true : false,
                    'has-avatar': nextProps.avatar ? true : false,
                    'has-checkbox': nextProps.type === 'checkbox' ? true : false,
                    'has-right-checkbox': nextProps.position === 'right' ? true : false,
                    'has-dropdown': nextProps.type === 'expand' ? true : false,
                    'has-switches': nextProps.type === 'switch' ? true : false,
                    'left': false,
                    'right': false,
                    'clearfix': nextProps.type === 'big-icon' ? true : false,
                    'two-line': nextProps.type === 'two-line' ? true : false,
                    'multi-line': nextProps.type === 'multi-line' ? true : false,
                    'single-line': nextProps.type === 'single-line' && (nextProps.type !== 'navigation' || nextProps.type !== 'expand') ? true : false
                }
            )
        });
    }

	render() {
		return (
            <ul {...this.props} className={this.state.classes}>
                {this.props.children}
            </ul>
        );
	}
}



module.exports = List;