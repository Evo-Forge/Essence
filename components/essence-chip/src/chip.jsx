import React from 'react';
import ClassNames from 'classnames';
import './chip.less'; // require('!css!less!./chip.less');
 
class Chip extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isActive: false,
        	classes: ClassNames(
                {
                    'chips': false
                },
                this.props.classes,
                this.props.className
            )
        };
    }

    openChip(event, item) {
        this.setState({
            isOpen: true,
            classes: ClassNames(
                {
                    'chips': true
                },
                this.props.classes,
                this.props.className
            )
        });
        return this;
    }

    closeChip(event, item) {
        this.setState({
            isOpen: false,
            isActive: false,
            classes: ClassNames(
                {
                    'chips': false
                },
                this.props.classes,
                this.props.className
            )
        });
        return this;
    }


    renderChildren() {
        let self = this;
        return React.Children.map(this.props.children, function (child, key) {
            var chipItem = (
                React.cloneElement(child, {
                    ref: ((ref) => self.chipItemChild = ref),
                    handleCloseChip: self.closeChip.bind(self),
                    handleOpenChip: self.openChip.bind(self),
                    first: (key === 0 ? true : false),
                    open: (self.state.isOpen ? true : false),
                    active: (self.state.isActive ? true : false)
                })
            );
            
            return (
                <li key={key} ref={(ref) => self.chipItem = ref}>
                    {chipItem}
                </li>
            );
        });
    }

	render() {
		return (
            <ul {...this.props} style={{listStyle: 'none'}} className={this.state.classes}>
                {this.renderChildren()}
            </ul>
        );
	}
}

export default Chip;