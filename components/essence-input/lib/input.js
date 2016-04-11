'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./input.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./input.less');

var Input = (function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

        _this.state = {
            counter: {
                current: 0,
                maximum: parseInt(_this.props.counter)
            },
            inputClasses: (0, _classnames2.default)('e-input', { 'empty': _this.props.value || _this.props.defaultValue ? false : true }),
            inputValue: _this.props.value || _this.props.defaultValue || '',
            classes: (0, _classnames2.default)('e-input-group', _this.props.className, _this.props.classes)
        };
        return _this;
    }

    _createClass(Input, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                classes: (0, _classnames2.default)('e-input-group', nextProps.className, nextProps.classes)
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var counter = this.state.counter;
            var value = this.currentInput.value;

            if (value.length >= counter.maximum && this.props.counter) {
                value = value.substr(0, counter.maximum);
            }

            counter.current = value.length;

            this.setState({
                counter: counter,
                inputValue: value,
                inputClasses: (0, _classnames2.default)('e-input', { 'empty': value.length > 0 ? false : true })
            });

            if (this.props.onChange) {
                return this.props.onChange(event);
            }
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            if (this.props.label || !this.props.placeholder) {
                return _react2.default.createElement(
                    'span',
                    { className: 'floating-label' },
                    this.props.label
                );
            }
            return;
        }
    }, {
        key: 'renderHint',
        value: function renderHint() {
            if (!this.props.hint) {
                return _react2.default.createElement(
                    'span',
                    { className: 'e-hint' },
                    this.props.hint
                );
            }
            return;
        }
    }, {
        key: 'renderCounter',
        value: function renderCounter() {
            if (this.props.counter) {
                return _react2.default.createElement(
                    'span',
                    { className: 'e-count' },
                    this.state.counter.current,
                    '/',
                    this.state.counter.maximum
                );
            }
            return;
        }
    }, {
        key: 'renderEffect',
        value: function renderEffect() {
            return _react2.default.createElement('span', { className: 'e-input-efects' });
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _this2 = this;

            var inputType = this.props.type;

            switch (inputType) {
                case 'textarea':
                    return _react2.default.createElement('textarea', _extends({}, this.props, {
                        className: this.state.inputClasses,
                        onChange: this.handleChange.bind(this),
                        defaultValue: this.state.inputValue,
                        value: this.state.inputValue,
                        ref: function ref(_ref) {
                            return _this2.currentInput = _ref;
                        }
                    }));
                    break;
                default:
                    return _react2.default.createElement('input', _extends({}, this.props, {
                        className: this.state.inputClasses,
                        defaultValue: this.state.inputValue,
                        value: this.state.inputValue,
                        onChange: this.handleChange.bind(this),
                        ref: function ref(_ref2) {
                            return _this2.currentInput = _ref2;
                        }
                    }));
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.state.classes },
                this.renderInput(),
                this.renderCounter(),
                this.renderEffect(),
                this.renderLabel(),
                this.renderHint()
            );
        }
    }]);

    return Input;
})(_react2.default.Component);

Input.defaultProps = {
    counter: false,
    value: undefined,
    label: undefined,
    placeholder: undefined,
    hint: undefined,
    type: 'text'
};

module.exports = Input;