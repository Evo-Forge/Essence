'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./switch.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./switch.less');

var Switch = (function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch(props) {
        _classCallCheck(this, Switch);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).call(this, props));

        _this.state = {
            type: _this.props.type,
            onChange: _this.props.onChange,
            checked: false,
            classes: (0, _classnames2.default)(_this.props.className, _this.props.classes)
        };
        return _this;
    }

    _createClass(Switch, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                classes: (0, _classnames2.default)(nextProps.className, nextProps.classes),
                type: nextProps.type,
                checked: nextProps.checked,
                onChange: nextProps.onChange
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(event) {
            this.setState({
                checked: event.target.checked
            });

            if (this.state.onChange) {
                return this.state.onChange();
            }
        }
    }, {
        key: 'renderSwitch',
        value: function renderSwitch() {
            var switchType = this.state.type;
            switch (switchType) {
                case 'switches':
                    return _react2.default.createElement(
                        'span',
                        { className: (0, _classnames2.default)('e-switches', this.state.classes) },
                        _react2.default.createElement(
                            'label',
                            null,
                            this.props.beforeText,
                            _react2.default.createElement('input', _extends({}, this.props, {
                                type: 'checkbox',
                                defaultChecked: this.state.checked,
                                onChange: this.onChange.bind(this)
                            })),
                            _react2.default.createElement('span', { className: 'e-switches-toggle' }),
                            this.props.afterText
                        )
                    );
                    break;
                case 'radio':
                    return _react2.default.createElement(
                        'span',
                        { className: (0, _classnames2.default)('e-radio', 'e-radio-success', this.state.classes) },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', _extends({}, this.props, {
                                type: 'radio',
                                defaultChecked: this.state.checked,
                                onChange: this.onChange.bind(this)
                            })),
                            _react2.default.createElement('span', { className: 'absolute circle' }),
                            _react2.default.createElement('span', { className: 'absolute e-check' }),
                            this.props.text
                        )
                    );
                    break;
                case 'checkbox':
                default:
                    return _react2.default.createElement(
                        'span',
                        { className: (0, _classnames2.default)('e-checkbox', this.state.classes) },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', _extends({}, this.props, {
                                type: 'checkbox',
                                className: 'toggle',
                                defaultChecked: this.state.checked,
                                onChange: this.onChange.bind(this)
                            })),
                            _react2.default.createElement('span', { className: 'absolute e-wave' }),
                            _react2.default.createElement('span', { className: 'absolute e-check-valid' }),
                            this.props.text
                        )
                    );
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: 'e-switch' },
                this.renderSwitch()
            );
        }
    }]);

    return Switch;
})(_react2.default.Component);

module.exports = Switch;