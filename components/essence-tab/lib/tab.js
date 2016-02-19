'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./tab.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./tab.less');

var Tab = (function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab(props) {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, props));

        _this.state = {
            revert: false,
            previous: 0,
            selected: 0,
            classes: (0, _classnames2.default)(_this.props.classes, _this.props.className)
        };
        return _this;
    }

    _createClass(Tab, [{
        key: 'selectTab',
        value: function selectTab(callback, index) {
            var currentTab = this.refs['tab-' + index];

            if (currentTab) {
                this.tabList.scrollLeft = currentTab.getBoundingClientRect().left;
            }

            this.setState({
                revert: this.state.previous > currentTab.getBoundingClientRect().left ? true : false,
                previous: currentTab.getBoundingClientRect().left,
                selected: index
            });

            if (callback) {
                return callback();
            }
        }
    }, {
        key: 'renderIndicator',
        value: function renderIndicator() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                className: (0, _classnames2.default)('indicator', this.props.indicator),
                ref: function ref(_ref) {
                    return _this2.tabIndicator = _ref;
                } });
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader() {
            var _this3 = this;

            var self = this,
                headers = this.props.data.header;

            var content = headers.map(function (item, key) {
                var active = self.state.selected === key ? 'active' : '',
                    indicator = self.state.selected === key ? self.renderIndicator() : null;

                return _react2.default.createElement(
                    'li',
                    {
                        onClick: self.selectTab.bind(self, item.callback, key),
                        onTouch: self.selectTab.bind(self, item.callback, key),
                        key: 'tab-' + key,
                        ref: 'tab-' + key,
                        className: active },
                    _react2.default.createElement(
                        'a',
                        null,
                        item.context
                    ),
                    indicator
                );
            });

            return _react2.default.createElement(
                'nav',
                { className: (0, _classnames2.default)('e-tabs scrollable', this.state.classes) },
                _react2.default.createElement(
                    'ul',
                    {
                        className: 'e-tabs-list e-row',
                        ref: function ref(_ref2) {
                            return _this3.tabList = _ref2;
                        } },
                    content
                )
            );
        }
    }, {
        key: 'renderRows',
        value: function renderRows() {
            var self = this;
            var rows = this.props.data.rows;
            var content = _react2.default.Children.map(rows, function (item, key) {
                var active = self.state.selected === key ? ' active' : '';
                return _react2.default.createElement(
                    'div',
                    {
                        key: 'row-' + key,
                        className: 'e-card e-shadow-1 e-tab-content' + active },
                    item
                );
            });

            return content;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.renderHeader(),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('e-tabs-container', { 'revert': this.state.revert }) },
                    this.renderRows()
                )
            );
        }
    }]);

    return Tab;
})(_react2.default.Component);

module.exports = Tab;