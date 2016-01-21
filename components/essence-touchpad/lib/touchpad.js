'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./touchpad.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TouchPad = (function (_React$Component) {
    _inherits(TouchPad, _React$Component);

    function TouchPad(props) {
        _classCallCheck(this, TouchPad);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TouchPad).call(this, props));

        var self = _this;

        _this.state = {
            visible: _this.props.visible,
            style: {
                display: 'none',
                top: '200px',
                left: '200px'
            },
            classes: (0, _classnames2.default)('e-touchpad', _this.props.classes, _this.props.className)
        };
        return _this;
    }

    _createClass(TouchPad, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var top = nextProps.position.top - 108,
                left = nextProps.position.left - 108;
            this.setState({
                style: {
                    display: nextProps.visible ? 'block' : 'none',
                    top: (top < 0 ? 4 : top) + 'px',
                    left: (left < 0 ? 4 : left) + 'px'
                }
            });
        }
    }, {
        key: 'closeTouchPad',
        value: function closeTouchPad() {
            this.setState({
                visible: false,
                style: { display: 'none' }
            });
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
                    ref: function ref(_ref) {
                        return _this2.TouchPadContainer = _ref;
                    }
                },
                _react2.default.createElement('div', { className: 'blur' }),
                this.props.children,
                _react2.default.createElement(
                    'button',
                    {
                        type: 'button',
                        className: 'e-ripple close e-btn-default flat',
                        onClick: this.closeTouchPad.bind(this)
                    },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'i',
                            { className: 'e-icon-navigation-close' },
                            _react2.default.createElement('span', { className: 'label' })
                        )
                    )
                )
            );
        }
    }]);

    return TouchPad;
})(_react2.default.Component);

exports.default = TouchPad;