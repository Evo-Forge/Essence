'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
            classes: (0, _classnames2.default)(_this.props.className, _this.props.classes)
        };
        return _this;
    }

    _createClass(Switch, [{
        key: 'renderSwitch',
        value: function renderSwitch() {
            var switchType = this.props.type;
            switch (switchType) {
                case 'switches':
                    var switchesClasses = (0, _classnames2.default)('e-switches', this.state.classes);
                    return _react2.default.createElement(
                        'div',
                        { className: switchesClasses },
                        _react2.default.createElement(
                            'label',
                            null,
                            this.props.beforeText,
                            _react2.default.createElement('input', {
                                type: 'checkbox',
                                defaultChecked: this.props.checked,
                                disabled: this.props.disable
                            }),
                            _react2.default.createElement('span', { className: 'e-switches-toggle' }),
                            this.props.afterText
                        )
                    );
                    break;
                case 'radio':
                    var radioClasses = (0, _classnames2.default)('e-radio', 'e-radio-success', this.state.classes);
                    return _react2.default.createElement(
                        'div',
                        { className: radioClasses },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', {
                                type: 'radio',
                                name: this.props.name,
                                defaultChecked: this.props.checked,
                                defaultValue: this.props.defaultValue
                            }),
                            _react2.default.createElement('span', { className: 'absolute circle' }),
                            _react2.default.createElement('span', { className: 'absolute e-check' }),
                            this.props.text
                        )
                    );
                    break;

                case 'checkbox':
                default:
                    var checkboxClasses = (0, _classnames2.default)('e-checkbox', this.state.classes);
                    return _react2.default.createElement(
                        'div',
                        { className: checkboxClasses },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', {
                                type: 'checkbox',
                                name: this.props.name,
                                defaultChecked: this.props.checked,
                                className: 'toggle'
                            }),
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
                'div',
                { className: 'e-switch' },
                this.renderSwitch()
            );
        }
    }]);

    return Switch;
})(_react2.default.Component);

exports.default = Switch;