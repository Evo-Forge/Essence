import React from 'react';
import ClassNames from 'classnames';
import Switch from 'essence-switch';
import Menu from 'essence-menu';
import Tooltip from 'essence-tooltip';

import DataTableRow from './row';
import DataTableBody from './body';
import DataTableHeader from './header';
import DataTableFooter from './footer';
import DataTableColumn from './column';

import './table.less';
 
class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortIcon: {},
            classes: ClassNames(
                'datatable',
                this.props.classes,
                this.props.className
            ),
            tooltips: {},
            selectedRows: {},
            selectedAllRows: false
        };
    }

    componentDidMount() {
        let selected = {},
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

    handleSort(callback, columnIndex) {
        if (callback && columnIndex) {
            switch (this.state.sortIcon[columnIndex]) {
                case 'hardware-keyboard-arrow-down':
                    this.setState({
                        sortIcon: {[columnIndex]: 'hardware-keyboard-arrow-up'}
                    });
                    break;
                case 'hardware-keyboard-arrow-up':
                    this.setState({
                        sortIcon: {[columnIndex]: 'hardware-keyboard-arrow-down'}
                    });
                    break;
                default:
                    this.setState({
                        sortIcon: {[columnIndex]: 'hardware-keyboard-arrow-up'}
                    });
                    break;
            }

            return callback();
        }
        return;
    }

    renderTooltip(text, index) {
        return (
            <Tooltip 
                text={text} 
                key={'tooltip-' + index} 
                visible={this.state.tooltips[index] || false} />
        );
    }

    tooltipShow(columnIndex) {
        this.setState({
            tooltips: {[columnIndex]: true }
        });
    }

    tooltipHide(columnIndex) {
        this.setState({
            tooltips: {[columnIndex]: false }
        });
    }

    renderSortIcon(index) {
        let icon = this.state.sortIcon[index] || '';

        return (<span key={'sort-icon-' + (index || '')} className={'e-icon-' + icon} />);
    }

    renderHeaderContent(context, index) {
        return (
            <span 
                key={'header-content-' + index} 
                onMouseEnter={this.tooltipShow.bind(this, index)}
                onMouseLeave={this.tooltipHide.bind(this, index)}
            >
                {context}
            </span>
        );
        return;
    }

    renderHeader() {
        let self = this,
            dataObj = this.props.data;

        if (dataObj.header) {
            var rows = (dataObj.header).map(function(arr, index){ 
                return (
                    <DataTableColumn
                        key={index}
                        className={{'e-text-left': (index === 0 ? true : false)}}
                        onClick={self.handleSort.bind(self, arr.onSorting, index)}
                        onTouch={self.handleSort.bind(self, arr.onSorting, index)}
                    >
                        {[
                            (index === 0 ? null : self.renderSortIcon(index)), 
                            (self.renderHeaderContent(arr.name, index)),
                            (arr.tooltip ? self.renderTooltip(arr.tooltip, index) : null)
                        ]}
                    </DataTableColumn>
                );
            });

            return (
                <DataTableHeader classes={'e-text-grey-400'} key={'header'}>
                    <DataTableRow>
                    {[
                        <DataTableColumn key={'checkall'}>
                            <Switch 
                                type='checkbox' 
                                name='checkall'
                                onClick={this.checkRows.bind(self)} 
                                onTouch={this.checkRows.bind(self)} 
                            />
                        </DataTableColumn>,
                        rows
                    ]}
                    </DataTableRow>
                </DataTableHeader>
            );
        }
    }

    renderFooter() {
        let self = this,
            dataObj = this.props.data,
            totalColumns = Object.keys(dataObj.header).length + 1; // total colSpan

        if (dataObj.footer) {
            return (
                <DataTableFooter classes={'e-text-grey-600'} key={'footer'}>
                    <DataTableRow>
                        <DataTableColumn colSpan={totalColumns}>
                            Rows per page:

                            <Menu type={'cover'} placeholder={dataObj.footer.limit}>
                                <span 
                                    onClick={dataObj.footer.pagination.callback} 
                                    onTouch={dataObj.footer.pagination.callback} 
                                    placeholder={dataObj.footer.limit}>
                                    {dataObj.footer.limit}
                                </span>
                                <span 
                                    onClick={dataObj.footer.pagination.callback} 
                                    onTouch={dataObj.footer.pagination.callback} 
                                    placeholder={(dataObj.footer.limit * 2)}>
                                    {dataObj.footer.limit * 2}
                                </span>
                                <span 
                                    onClick={dataObj.footer.pagination.callback} 
                                    onTouch={dataObj.footer.pagination.callback} 
                                    placeholder={(dataObj.footer.limit * 5)}>
                                    {dataObj.footer.limit * 5}
                                </span>
                                <span 
                                    onClick={dataObj.footer.pagination.callback} 
                                    onTouch={dataObj.footer.pagination.callback} 
                                    placeholder={(dataObj.footer.limit * 10)}>
                                    {dataObj.footer.limit * 10}
                                </span>
                            </Menu>

                            <span>{dataObj.footer.pagination.start}</span>
                            -
                            <span>{dataObj.footer.pagination.end} of </span>
                            <span>{dataObj.footer.total}</span>
                            <span 
                                className={'prev'} 
                                onClick={dataObj.footer.prev.callback} 
                                onTouch={dataObj.footer.prev.callback}>
                                {dataObj.footer.prev.context}
                            </span>
                            <span 
                                className={'next'} 
                                onClick={dataObj.footer.next.callback} 
                                onTouch={dataObj.footer.next.callback}>
                                {dataObj.footer.next.context}
                            </span>
                        </DataTableColumn>
                    </DataTableRow>
                </DataTableFooter>
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
                                        <DataTableColumn
                                            className={{'e-text-left': (arrIndex === 0 ? true : false)}}
                                            key={rowIndex + arrIndex}
                                        >
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
        return;
    }

    renderChildren() {
        if (this.props.data) {
            return [this.renderHeader(), this.renderRows(), this.renderFooter()];
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

DataTable.defaultProps = {
    data: null
};

module.exports = DataTable;