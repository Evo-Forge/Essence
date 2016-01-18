'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./chip.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./chip.less');

var Chip = (function (_React$Component) {
    _inherits(Chip, _React$Component);

    function Chip(props) {
        _classCallCheck(this, Chip);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chip).call(this, props));

        _this.state = {
            isOpen: false,
            isActive: false,
            classes: (0, _classnames2.default)({
                'chips': false
            }, _this.props.classes, _this.props.className)
        };
        return _this;
    }

    _createClass(Chip, [{
        key: 'openChip',
        value: function openChip(event, item) {
            this.setState({
                isOpen: true,
                classes: (0, _classnames2.default)({
                    'chips': true
                }, this.props.classes, this.props.className)
            });
            return this;
        }
    }, {
        key: 'closeChip',
        value: function closeChip(event, item) {
            this.setState({
                isOpen: false,
                isActive: false,
                classes: (0, _classnames2.default)({
                    'chips': false
                }, this.props.classes, this.props.className)
            });
            return this;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var self = this;
            return _react2.default.Children.map(this.props.children, function (child, key) {
                var chipItem = _react2.default.cloneElement(child, {
                    ref: function ref(_ref) {
                        return self.chipItemChild = _ref;
                    },
                    handleCloseChip: self.closeChip.bind(self),
                    handleOpenChip: self.openChip.bind(self),
                    first: key === 0 ? true : false,
                    open: self.state.isOpen ? true : false,
                    active: self.state.isActive ? true : false
                });

                return _react2.default.createElement(
                    'li',
                    { key: key, ref: function ref(_ref2) {
                            return self.chipItem = _ref2;
                        } },
                    chipItem
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                _extends({}, this.props, { style: { listStyle: 'none' }, className: this.state.classes }),
                this.renderChildren()
            );
        }
    }]);

    return Chip;
})(_react2.default.Component);

exports.default = Chip;