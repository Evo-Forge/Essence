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

require('./dialog.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./dialog.less');

var Dialog = (function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));

        var dialogVisible = _this.props.visible;
        _this.state = {
            visible: dialogVisible,
            classes: (0, _classnames2.default)(_this.props.classes, _this.props.className, { 'transparent': !dialogVisible }, _this.props.full ? 'e-dialog-full' : 'e-dialog')
        };
        return _this;
    }

    _createClass(Dialog, [{
        key: 'toggle',
        value: function toggle() {
            var newVisibleState = !this.state.visible;

            this.setState({
                visible: newVisibleState
            });

            if (!newVisibleState) {
                this.setState({
                    classes: (0, _classnames2.default)('transparent', this.state.classes)
                });
            }
        }
    }, {
        key: 'overlay',
        value: function overlay() {
            if (this.state.visible) {
                return _react2.default.createElement('div', {
                    style: { display: 'block' },
                    onClick: this.toggle.bind(this),
                    className: 'e-modal-bg'
                });
            }
            return;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    _extends({}, this.props, {
                        className: this.state.classes
                    }),
                    this.props.children
                ),
                this.overlay()
            );
        }
    }]);

    return Dialog;
})(_react2.default.Component);

exports.default = Dialog;