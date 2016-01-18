'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./slider.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./slider.less');

var Slider = (function (_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Slider).call(this, props));

        _this.state = {
            classes: (0, _classnames2.default)('e-slider', {
                'discrete': _this.props.discrete ? true : false,
                'zero': parseInt(_this.props.start) > 1 ? false : true
            }, _this.props.className, _this.props.classes),
            isHidden: '',
            isMoving: false,
            discrete: _this.props.start || 0,
            inputValue: _this.props.start || 0,
            handleStyles: { left: _this.props.start ? _this.props.start + '%' : '0%' },
            fillStyles: { width: _this.props.start ? _this.props.start + '%' : '0%' },
            discreteStyles: {},
            discreteActive: ''
        };
        return _this;
    }

    _createClass(Slider, [{
        key: 'handleMoveStart',
        value: function handleMoveStart() {
            this.setState({
                isMoving: true,
                discreteActive: 'active',
                isHidden: this.props.discrete ? '-hide' : ''
            });
        }
    }, {
        key: 'handleMoveEnd',
        value: function handleMoveEnd() {
            this.setState({
                isHidden: '',
                isMoving: false,
                discreteActive: ''
            });
        }
    }, {
        key: 'handleMove',
        value: function handleMove(event) {
            this.handleDrag(event);
        }
    }, {
        key: 'handleDrag',
        value: function handleDrag(event) {
            var discreteStyles = this.state.discreteStyles;
            var clientX = this.state.isMobile ? event.changedTouches[0].clientX : event.clientX;
            var sliderParent = this.sliderParent;
            var offset = clientX - sliderParent.offsetParent.offsetLeft;
            var horizontal = (offset / sliderParent.offsetWidth * 100).toFixed(0);
            var horizontalFill = horizontal;
            var offsetPercentage = offset / sliderParent.offsetWidth * 100;

            if (offsetPercentage < 1) {
                horizontal = horizontalFill = 0;
            } else if (offsetPercentage > 100) {
                horizontal = horizontalFill = 100;
            }

            if (this.props.steps || parseInt(this.props.step)) {
                var stepValue = parseInt(this.props.step) || 20;
                horizontal = horizontalFill = Math.round(horizontal / stepValue) * stepValue;
            }

            if (event.screenX !== 0) {
                this.setState({
                    discrete: horizontal,

                    handleStyles: {
                        left: horizontal + '%'
                    },

                    fillStyles: {
                        width: horizontalFill + '%'
                    },
                    inputValue: horizontal
                });
            }

            this.setState({
                discreteStyles: { marginLeft: horizontal + '%' },
                classes: (0, _classnames2.default)('e-slider', {
                    'discrete': this.props.discrete ? true : false,
                    'zero': parseInt(horizontal) > 1 ? false : true
                }, this.props.className, this.props.classes)
            });

            this.sliderInput.value = horizontal;

            event.preventDefault();
        }
    }, {
        key: 'steps',
        value: function steps() {
            var steps = [];
            var step = 0;
            var stepValue = parseInt(this.props.step) || 20;
            var stepMaximum = 100 / stepValue - stepValue;
            var scrollFix = _react2.default.createElement('div', {
                className: 'e-step',
                style: { marginLeft: '99.8%' },
                key: 'step-99.8'
            });

            for (var _step; _step <= stepMaximum; _step += stepValue) {
                steps.push(_react2.default.createElement('div', {
                    className: 'e-step',
                    style: { marginLeft: _step + '%' },
                    key: 'step-' + _step
                }));
            }

            steps.push(scrollFix);

            if (this.props.steps || parseInt(this.props.step) > 0) {
                return _react2.default.createElement(
                    'div',
                    { className: 'e-steps' },
                    steps
                );
            }

            return;
        }
    }, {
        key: 'discrete',
        value: function discrete() {
            var discreteStyles = this.state.discreteStyles;
            if (this.props.discrete) {
                return _react2.default.createElement(
                    'div',
                    {
                        className: 'e-discrete-value ' + this.state.discreteActive,
                        style: discreteStyles
                    },
                    this.state.discrete
                );
            }
            return;
        }
    }, {
        key: 'fill',
        value: function fill() {
            if (this.props.fill || !this.props.disable) {
                return _react2.default.createElement('div', {
                    className: 'e-fill',
                    style: this.state.fillStyles
                });
            }
            return;
        }
    }, {
        key: 'renderSlider',
        value: function renderSlider() {
            var _this2 = this;

            var sliderClasses = (0, _classnames2.default)({ 'disabled': this.props.disable ? true : false }, this.state.classes);
            return _react2.default.createElement(
                'div',
                {
                    className: sliderClasses,
                    onMouseLeave: this.handleMoveEnd.bind(this),
                    onMouseDown: this.handleMoveStart.bind(this),
                    onMouseUp: this.handleMoveEnd.bind(this),
                    onMouseMove: this.state.isMoving ? this.handleMove.bind(this) : null,
                    onTouchStart: this.handleMoveStart.bind(this),
                    onTouchEnd: this.handleMoveEnd.bind(this),
                    onTouchMove: this.state.isMoving ? this.handleMove.bind(this) : null,
                    ref: function ref(_ref3) {
                        return _this2.sliderParent = _ref3;
                    }
                },
                _react2.default.createElement(
                    'div',
                    { className: 'e-slider-track' },
                    _react2.default.createElement('div', {
                        className: 'e-slider-handle' + this.state.isHidden,
                        ref: function ref(_ref) {
                            return _this2.sliderHandle = _ref;
                        },
                        style: this.state.handleStyles
                    })
                ),
                this.fill(),
                this.discrete(),
                this.steps(),
                _react2.default.createElement('input', {
                    type: 'hidden',
                    ref: function ref(_ref2) {
                        return _this2.sliderInput = _ref2;
                    },
                    name: this.props.name || 'sliderInput',
                    defaultValue: this.state.inputValue
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderSlider();
        }
    }]);

    return Slider;
})(_react2.default.Component);

exports.default = Slider;