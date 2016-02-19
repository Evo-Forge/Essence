import React from 'react';
import ClassNames from 'classnames';
 
class DataTableFooter extends React.Component {
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
            <tfoot className={this.state.classes} ref={(ref) => this.dataTableFooter = ref}>
                {this.props.children}
            </tfoot>
        );
    }
}

module.exports = DataTableFooter;