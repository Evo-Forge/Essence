import React from 'react';
import ClassNames from 'classnames';
 
class DataTableColumn extends React.Component {
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
            <td 
                {...this.props}
                className={this.state.classes}
                ref={(ref) => this.dataTableColumn = ref}
            >
                {this.props.children}
            </td>
        );
    }
}

module.exports = DataTableColumn;