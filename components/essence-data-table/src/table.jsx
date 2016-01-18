import React from 'react';
import ClassNames from 'classnames';
import './table.less';
 
class DataTable extends React.Component {
    constructor(props) {
        super(props);
        let self = this;
        this.state = {
            classes: ClassNames(
                'datatable',
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return (
            <table className={this.state.classes} ref={(ref) => this.dataTable = ref}>
                {this.props.children}
            </table>
        );
    }
}

export default DataTable;