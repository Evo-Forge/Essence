'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./slider.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = (function (_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Slider).call(this, props));

        _this.state = {
            classes: (0, _classnames2.default)(_this.props.className, _this.props.classes),
            uniqueID: 'slider_' + Date.now(),
            zeroActive: props.start ? false : true,
            discreteActive: false,
            start: props.start || 0,
            dataValue: props.start || 0,
            lowerColor: props.lowerColor,
            lowerFlex: props.start ? props.start / props.max + ' 1 0%' : '0 1 0%',
            upperColor: props.upperColor,
            upperFlex: props.start ? 1 - props.start / props.max + ' 1 0%' : '1 1 0%'
        };
        return _this;
    }

    _createClass(Slider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;

            if (this.props.discrete) {
                this.sliderInput.addEventListener('mousedown', function () {
                    self.setState({
                        discreteActive: true
                    });
                }, false);

                this.sliderInput.addEventListener('mouseup', function () {
                    self.setState({
                        discreteActive: false
                    });
                }, false);
            }

            this.sliderInput.addEventListener('input', function () {
                var sliderValue = self.sliderInput.value;

                self.setState({
                    dataValue: sliderValue,
                    zeroActive: sliderValue < 1 ? true : false,
                    lowerFlex: sliderValue / self.props.max + ' 1 0%',
                    upperFlex: 1 - sliderValue / self.props.max + ' 1 0%'
                });
            }, false);
        }
    }, {
        key: 'renderDiscreteStyle',
        value: function renderDiscreteStyle() {
            if (this.props.discrete && !this.props.disabled) {
                var style = '#' + this.state.uniqueID + '.discrete input[type=range]::-webkit-slider-thumb:after{content: "' + parseInt(this.state.dataValue) + '"},' + '#' + this.state.uniqueID + '.discrete input[type=range]::-moz-range-thumb:after{content: "' + parseInt(this.state.dataValue) + '"},' + '#' + this.state.uniqueID + '.discrete input[type=range]::-ms-thumb:after{content: "' + parseInt(this.state.dataValue) + '"}';
                return _react2.default.createElement('style', { key: 'style_' + this.state.uniqueID, dangerouslySetInnerHTML: { __html: style } });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: this.state.uniqueID,
                    className: (0, _classnames2.default)('e-slider', { 'discrete': this.state.discreteActive }, { 'zero': this.state.zeroActive }, { 'disabled': this.props.disabled }) },
                _react2.default.createElement('input', _extends({
                    type: 'range'
                }, this.props, {
                    ref: function ref(_ref) {
                        return _this2.sliderInput = _ref;
                    },
                    defaultValue: this.state.dataValue,
                    'data-discrete': this.state.dataValue
                })),
                _react2.default.createElement(
                    'div',
                    { className: 'track' },
                    _react2.default.createElement('div', { className: (0, _classnames2.default)('left', this.state.lowerColor), style: { flex: this.state.lowerFlex } }),
                    _react2.default.createElement('div', { className: (0, _classnames2.default)('right', this.state.upperColor), style: { flex: this.state.upperFlex } })
                ),
                this.renderDiscreteStyle()
            );
        }
    }]);

    return Slider;
})(_react2.default.Component);

Slider.defaultProps = {
    min: 0,
    max: 100,
    start: null,
    disabled: null,
    discrete: false,
    lowerColor: 'e-background-indigo-400',
    upperColor: 'e-background-grey-100'
};

module.exports = Slider;