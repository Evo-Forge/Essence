import React from 'react';
import ClassNames from 'classnames';
 
class DataTableRow extends React.Component {
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
            <tr className={this.state.classes} ref={(ref) => this.dataTableRow = ref}>
                {this.props.children}
            </tr>
        );
    }
}

export default DataTableRow;