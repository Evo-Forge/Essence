'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _essenceSwitch = require('essence-switch');

var _essenceSwitch2 = _interopRequireDefault(_essenceSwitch);

var _essenceMenu = require('essence-menu');

var _essenceMenu2 = _interopRequireDefault(_essenceMenu);

var _essenceTooltip = require('essence-tooltip');

var _essenceTooltip2 = _interopRequireDefault(_essenceTooltip);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _column = require('./column');

var _column2 = _interopRequireDefault(_column);

require('./table.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataTable = (function (_React$Component) {
    _inherits(DataTable, _React$Component);

    function DataTable(props) {
        _classCallCheck(this, DataTable);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DataTable).call(this, props));

        _this.state = {
            sortIcon: {},
            classes: (0, _classnames2.default)('datatable', _this.props.classes, _this.props.className),
            tooltips: {},
            selectedRows: {},
            selectedAllRows: false
        };
        return _this;
    }

    _createClass(DataTable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var selected = {},
                dataObj = this.props.data;

            if (dataObj.rows) {
                dataObj.rows.map(function (row, rowIndex) {
                    selected['row-' + rowIndex] = false;
                });
            }

            this.setState({
                selectedRows: selected
            });
        }
    }, {
        key: 'checkRows',
        value: function checkRows() {
            var selectedRows = this.state.selectedRows,
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
    }, {
        key: 'checkRow',
        value: function checkRow(rowIndex, row) {
            var selectedRows = this.state.selectedRows;

            selectedRows['row-' + rowIndex] = !selectedRows['row-' + rowIndex];

            this.setState({
                selectedRows: selectedRows
            });

            return this;
        }
    }, {
        key: 'handleSort',
        value: function handleSort(callback, columnIndex) {
            if (callback && columnIndex) {
                switch (this.state.sortIcon[columnIndex]) {
                    case 'hardware-keyboard-arrow-down':
                        this.setState({
                            sortIcon: _defineProperty({}, columnIndex, 'hardware-keyboard-arrow-up')
                        });
                        break;
                    case 'hardware-keyboard-arrow-up':
                        this.setState({
                            sortIcon: _defineProperty({}, columnIndex, 'hardware-keyboard-arrow-down')
                        });
                        break;
                    default:
                        this.setState({
                            sortIcon: _defineProperty({}, columnIndex, 'hardware-keyboard-arrow-up')
                        });
                        break;
                }

                return callback();
            }
            return;
        }
    }, {
        key: 'renderTooltip',
        value: function renderTooltip(text, index) {
            return _react2.default.createElement(_essenceTooltip2.default, {
                text: text,
                key: 'tooltip-' + index,
                visible: this.state.tooltips[index] || false });
        }
    }, {
        key: 'tooltipShow',
        value: function tooltipShow(columnIndex) {
            this.setState({
                tooltips: _defineProperty({}, columnIndex, true)
            });
        }
    }, {
        key: 'tooltipHide',
        value: function tooltipHide(columnIndex) {
            this.setState({
                tooltips: _defineProperty({}, columnIndex, false)
            });
        }
    }, {
        key: 'renderSortIcon',
        value: function renderSortIcon(index) {
            var icon = this.state.sortIcon[index] || '';

            return _react2.default.createElement('span', { key: 'sort-icon-' + (index || ''), className: 'e-icon-' + icon });
        }
    }, {
        key: 'renderHeaderContent',
        value: function renderHeaderContent(context, index) {
            return _react2.default.createElement(
                'span',
                {
                    key: 'header-content-' + index,
                    onMouseEnter: this.tooltipShow.bind(this, index),
                    onMouseLeave: this.tooltipHide.bind(this, index)
                },
                context
            );
            return;
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader() {
            var self = this,
                dataObj = this.props.data;

            if (dataObj.header) {
                var rows = dataObj.header.map(function (arr, index) {
                    return _react2.default.createElement(
                        _column2.default,
                        {
                            key: index,
                            className: { 'e-text-left': index === 0 ? true : false },
                            onClick: self.handleSort.bind(self, arr.onSorting, index),
                            onTouch: self.handleSort.bind(self, arr.onSorting, index)
                        },
                        [index === 0 ? null : self.renderSortIcon(index), self.renderHeaderContent(arr.name, index), arr.tooltip ? self.renderTooltip(arr.tooltip, index) : null]
                    );
                });

                return _react2.default.createElement(
                    _header2.default,
                    { classes: 'e-text-grey-400', key: 'header' },
                    _react2.default.createElement(
                        _row2.default,
                        null,
                        [_react2.default.createElement(
                            _column2.default,
                            { key: 'checkall' },
                            _react2.default.createElement(_essenceSwitch2.default, {
                                type: 'checkbox',
                                name: 'checkall',
                                onClick: this.checkRows.bind(self),
                                onTouch: this.checkRows.bind(self)
                            })
                        ), rows]
                    )
                );
            }
        }
    }, {
        key: 'renderFooter',
        value: function renderFooter() {
            var self = this,
                dataObj = this.props.data,
                totalColumns = Object.keys(dataObj.header).length + 1; // total colSpan

            if (dataObj.footer) {
                return _react2.default.createElement(
                    _footer2.default,
                    { classes: 'e-text-grey-600', key: 'footer' },
                    _react2.default.createElement(
                        _row2.default,
                        null,
                        _react2.default.createElement(
                            _column2.default,
                            { colSpan: totalColumns },
                            'Rows per page:',
                            _react2.default.createElement(
                                _essenceMenu2.default,
                                { type: 'cover', placeholder: dataObj.footer.limit },
                                _react2.default.createElement(
                                    'span',
                                    {
                                        onClick: dataObj.footer.pagination.callback,
                                        onTouch: dataObj.footer.pagination.callback,
                                        placeholder: dataObj.footer.limit },
                                    dataObj.footer.limit
                                ),
                                _react2.default.createElement(
                                    'span',
                                    {
                                        onClick: dataObj.footer.pagination.callback,
                                        onTouch: dataObj.footer.pagination.callback,
                                        placeholder: dataObj.footer.limit * 2 },
                                    dataObj.footer.limit * 2
                                ),
                                _react2.default.createElement(
                                    'span',
                                    {
                                        onClick: dataObj.footer.pagination.callback,
                                        onTouch: dataObj.footer.pagination.callback,
                                        placeholder: dataObj.footer.limit * 5 },
                                    dataObj.footer.limit * 5
                                ),
                                _react2.default.createElement(
                                    'span',
                                    {
                                        onClick: dataObj.footer.pagination.callback,
                                        onTouch: dataObj.footer.pagination.callback,
                                        placeholder: dataObj.footer.limit * 10 },
                                    dataObj.footer.limit * 10
                                )
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                dataObj.footer.pagination.start
                            ),
                            '-',
                            _react2.default.createElement(
                                'span',
                                null,
                                dataObj.footer.pagination.end,
                                ' of '
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                dataObj.footer.total
                            ),
                            _react2.default.createElement(
                                'span',
                                {
                                    className: 'prev',
                                    onClick: dataObj.footer.prev.callback,
                                    onTouch: dataObj.footer.prev.callback },
                                dataObj.footer.prev.context
                            ),
                            _react2.default.createElement(
                                'span',
                                {
                                    className: 'next',
                                    onClick: dataObj.footer.next.callback,
                                    onTouch: dataObj.footer.next.callback },
                                dataObj.footer.next.context
                            )
                        )
                    )
                );
            }
        }
    }, {
        key: 'renderRows',
        value: function renderRows() {
            var self = this,
                selectedRows = this.state.selectedRows,
                dataObj = this.props.data;

            if (dataObj.rows) {
                return _react2.default.createElement(
                    _body2.default,
                    { classes: 'e-text-grey-700', key: 'body' },
                    dataObj.rows.map(function (row, rowIndex) {
                        return _react2.default.createElement(
                            _row2.default,
                            {
                                key: 'row-' + rowIndex,
                                ref: 'row-' + rowIndex,
                                selected: selectedRows['row-' + rowIndex]
                            },
                            [_react2.default.createElement(
                                _column2.default,
                                { key: 'check-' + rowIndex },
                                _react2.default.createElement(_essenceSwitch2.default, {
                                    type: 'checkbox',
                                    name: 'check-' + rowIndex,
                                    checked: selectedRows['row-' + rowIndex],
                                    onClick: this.checkRow.bind(this, rowIndex) })
                            ), row.map(function (arr, arrIndex) {
                                return _react2.default.createElement(
                                    _column2.default,
                                    {
                                        className: { 'e-text-left': arrIndex === 0 ? true : false },
                                        key: rowIndex + arrIndex
                                    },
                                    arr
                                );
                            }, this)]
                        );
                    }, this)
                );
            }
            return;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            if (this.props.data) {
                return [this.renderHeader(), this.renderRows(), this.renderFooter()];
            }

            return this.props.children;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'table',
                { className: this.state.classes, ref: function ref(_ref) {
                        return _this2.dataTable = _ref;
                    } },
                this.renderChildren()
            );
        }
    }]);

    return DataTable;
})(_react2.default.Component);

DataTable.defaultProps = {
    data: null
};

module.exports = DataTable;