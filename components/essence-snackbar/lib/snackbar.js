'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Timer = require('essence-core/src/utils/Timer.js');

var _Timer2 = _interopRequireDefault(_Timer);

require('./snackbar.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./snackbar.less');

var SnackBar = (function (_React$Component) {
    _inherits(SnackBar, _React$Component);

    function SnackBar(props) {
        _classCallCheck(this, SnackBar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SnackBar).call(this, props));

        var self = _this;
        _this.timeOut = false;
        _this.state = {
            visible: _this.props.visible,
            classes: (0, _classnames2.default)('snackbar', { 'snackbar-multiline': false }, _this.props.classes, _this.props.className),
            delay: parseInt(_this.props.delay) > 0 ? parseInt(_this.props.delay) : 2000
        };

        if (_this.props.visible) {
            _this.timeOut = new _Timer2.default(function () {
                self.setState({
                    style: {}
                });
            }, self.state.delay);
        }
        return _this;
    }

    _createClass(SnackBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var style = window.getComputedStyle ? getComputedStyle(this.snackBar, null) : this.snackBar.currentStyle;
            var height = parseInt(style['height']);
            var width = parseInt(style['width']);
            var lineHeight = parseInt(style['line-height']);
            var isMultiLine = Math.floor(height / lineHeight) > 1 ? true : false;

            var containerStyle = window.getComputedStyle ? getComputedStyle(this.snackBarContainer, null) : this.snackBarContainer.currentStyle;
            var snackbarStyle = {
                bottom: this.props.visible ? '0' : 'initial',
                opacity: this.props.visible ? 1 : 0,
                zIndex: this.props.visible ? 1 : 0,
                marginRight: '-' + parseInt(containerStyle['width']) / 2 + 'px'
            };

            this.setState({
                classes: (0, _classnames2.default)(this.state.classes, { 'snackbar-multiline': isMultiLine }),
                style: snackbarStyle
            });

            return;
        }
    }, {
        key: 'actionBtn',
        value: function actionBtn() {
            if (this.props.action) {
                return _react2.default.createElement(
                    'button',
                    { className: 'e-btn-flat action' },
                    this.props.action
                );
            }
            return;
        }
    }, {
        key: 'pauseTimer',
        value: function pauseTimer() {
            if (this.timeOut) {
                this.timeOut.pause();
            }
        }
    }, {
        key: 'resumeTimer',
        value: function resumeTimer() {
            if (this.timeOut) {
                this.timeOut.resume();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                {
                    style: this.state.style,
                    className: this.state.classes,
                    ref: function ref(_ref2) {
                        return _this2.snackBarContainer = _ref2;
                    },
                    onMouseOver: this.pauseTimer.bind(this),
                    onMouseOut: this.resumeTimer.bind(this)
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'snackbar-message',
                        ref: function ref(_ref) {
                            return _this2.snackBar = _ref;
                        }
                    },
                    this.props.children
                ),
                this.actionBtn()
            );
        }
    }]);

    return SnackBar;
})(_react2.default.Component);

exports.default = SnackBar;