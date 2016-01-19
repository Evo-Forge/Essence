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
            <tr 
                className={this.state.classes + (this.props.selected ? ' selected' : '')} 
                ref={(ref) => this.dataTableRow = ref}
                {...this.props}
            >
                {this.props.children}
            </tr>
        );
    }
}

export default DataTableRow;