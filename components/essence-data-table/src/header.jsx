import React from 'react';
import ClassNames from 'classnames';
 
class DataTableHeader extends React.Component {
    constructor(props) {
        super(props);
        let self = this;
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return (
            <thead className={this.state.classes} ref={(ref) => this.dataTableHeader = ref}>
                {this.props.children}
            </thead>
        );
    }
}

module.exports = DataTableHeader;