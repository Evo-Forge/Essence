import React from 'react';
import ClassNames from 'classnames';
import Switch from '../../essence-switch/src/switch.jsx';

import DataTableRow from './row.jsx';
import DataTableBody from './body.jsx';
import DataTableHeader from './header.jsx';
import DataTableColumn from './column.jsx';

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
            ),
            selectedRows: {},
            selectedAllRows: false
        };
    }

    componentDidMount() {
        let self = this,
            selected = {},
            dataObj = this.props.data;

        if (dataObj.rows) {
            (dataObj.rows).map(function(row, rowIndex){
                selected['row-'+rowIndex] = false;
            });
        }

        this.setState({
            selectedRows: selected
        });
    }

    checkRows() {
        let selectedRows = this.state.selectedRows,
            selectedAllRows = this.state.selectedAllRows;

        for (var rowIndex in selectedRows) {
            selectedRows[rowIndex] = !selectedAllRows;
        };

        this.setState({
            selectedRows: selectedRows,
            selectedAllRows: !selectedAllRows
        });

        return this;
    }

    checkRow(rowIndex, row) {
        let selectedRows = this.state.selectedRows;
        
        selectedRows['row-'+rowIndex] = !selectedRows['row-'+rowIndex];

        this.setState({
            selectedRows: selectedRows
        });

        return this;
    }

    renderHeader() {
        let self = this,
            dataObj = this.props.data;

        if (dataObj.header) {
            var rows = (dataObj.header).map(function(arr, index){ 
                return (<DataTableColumn key={index}>{arr.name}</DataTableColumn>);
            });

            return (
                <DataTableHeader classes={'e-text-grey-400'} key={'header'}>
                    <DataTableRow>
                    {[
                        <DataTableColumn key={'checkall'}>
                            <Switch 
                                type='checkbox' 
                                name='checkall'
                                onClick={this.checkRows.bind(self)} />
                        </DataTableColumn>,
                        rows
                    ]}
                    </DataTableRow>
                </DataTableHeader>
            );
        }
    }

    renderRows() {
        let self = this,
            selectedRows = this.state.selectedRows,
            dataObj = this.props.data;

        if (dataObj.rows) {
            return (
               <DataTableBody classes={'e-text-grey-700'} key={'body'}>
                {
                    dataObj.rows.map(function(row, rowIndex){
                        return (
                            <DataTableRow 
                                key={'row-'+rowIndex} 
                                ref={'row-'+rowIndex} 
                                selected={selectedRows['row-'+rowIndex]}
                            >
                            {[
                                <DataTableColumn key={'check-'+rowIndex}>
                                    <Switch 
                                        type='checkbox' 
                                        name={'check-'+rowIndex}
                                        checked={selectedRows['row-'+rowIndex]}
                                        onClick={this.checkRow.bind(this, rowIndex)} />
                                </DataTableColumn>,
                                row.map(function(arr, arrIndex){
                                    return (
                                        <DataTableColumn key={rowIndex + arrIndex}>
                                            {arr}
                                        </DataTableColumn>
                                    )
                                }, this)
                            ]}
                            </DataTableRow>
                        );
                    }, this)
                }
                </DataTableBody>);
        }
        return '';
    }

    renderChildren() {
        let data = this.props.data;

        if (data) {
            return [this.renderHeader(), this.renderRows()];
        }

        return this.props.children;
    }

    render() {
        return (
            <table className={this.state.classes} ref={(ref) => this.dataTable = ref}>
                {this.renderChildren()}
            </table>
        );
    }
}

export default DataTable;