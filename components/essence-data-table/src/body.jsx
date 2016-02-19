import React from 'react';
import ClassNames from 'classnames';
 
class DataTableBody extends React.Component {
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
            <tbody className={this.state.classes} ref={(ref) => this.dataTableBody = ref}>
                {this.props.children}
            </tbody>
        );
    }
}

module.exports = DataTableBody;