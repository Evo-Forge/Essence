'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _essenceCore = require('essence-core');

require('./stepper.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stepper = (function (_React$Component) {
    _inherits(Stepper, _React$Component);

    function Stepper(props) {
        _classCallCheck(this, Stepper);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Stepper).call(this, props));

        _this.state = {
            documentSize: _essenceCore.Utils.Client.documentSize(),
            selected: props.currentStep,
            maxSteps: props.steps.length,
            currentStep: props.currentStep,
            activeColor: props.activeColor,
            inactiveColor: props.inactiveColor,
            classes: (0, _classnames2.default)(props.classes, props.className)
        };
        return _this;
    }

    _createClass(Stepper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;

            window.addEventListener('resize', function () {
                self.setState({
                    documentSize: _essenceCore.Utils.Client.documentSize()
                });
            }, true);
        }
    }, {
        key: 'selectStepper',
        value: function selectStepper(callback, index) {
            if (this.props.editable) {
                this.setState({
                    selected: index,
                    currentStep: index
                });

                if (callback) {
                    return callback();
                }
            }
        }
    }, {
        key: 'continueStepper',
        value: function continueStepper(callback) {
            var nextStep = this.state.currentStep + 1;

            this.setState({
                selected: nextStep,
                currentStep: nextStep
            });

            if (callback) {
                return callback(nextStep);
            }
        }
    }, {
        key: 'backStepper',
        value: function backStepper(callback) {
            var nextStep = this.state.currentStep - 1;
            this.setState({
                selected: nextStep,
                currentStep: nextStep
            });

            if (callback) {
                return callback(nextStep);
            }
        }
    }, {
        key: 'renderHorizontal',
        value: function renderHorizontal() {
            var _this2 = this;

            var self = this,
                stepsHeader = null,
                stepsContent = null,
                steps = this.props.steps;

            if (steps.length > 0) {
                var _stepsHeader = steps.map(function (item, key) {
                    if (!item.title) return;
                    return _react2.default.createElement(
                        'li',
                        {
                            key: 'stepper-' + key,
                            onClick: self.selectStepper.bind(self, item.callback, key),
                            onTouch: self.selectStepper.bind(self, item.callback, key),
                            className: (0, _classnames2.default)({ progress: self.state.currentStep > key, active: self.state.selected === key }) },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: (0, _classnames2.default)('step-icon', self.state.currentStep > key || self.state.selected === key ? self.state.activeColor : '', self.state.currentStep < key ? self.state.inactiveColor : '') },
                                self.state.currentStep > key ? _react2.default.createElement('i', { className: 'e-icon-action-done' }) : key + 1
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: (0, _classnames2.default)('title', { 'hasOptional': item.optional }) },
                                item.title,
                                item.optional ? _react2.default.createElement(
                                    'div',
                                    { className: 'optional' },
                                    item.optional
                                ) : null
                            ),
                            steps.length - 1 !== key && item.title ? _react2.default.createElement('span', { className: 'connector' }) : null
                        )
                    );
                });

                var _stepsContent = steps.map(function (item, key) {
                    var active = self.state.selected === key;
                    return _react2.default.createElement(
                        'div',
                        { key: 'stepper-content-' + key, className: (0, _classnames2.default)('e-stepper-content', { active: active }) },
                        item.content
                    );
                });

                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'nav',
                        { className: (0, _classnames2.default)('e-steppers', this.state.classes, { noneditable: !this.props.editable }) },
                        _react2.default.createElement(
                            'ul',
                            { className: 'e-steppers-list e-no-padding', ref: function ref(_ref) {
                                    return _this2.stepperList = _ref;
                                } },
                            _stepsHeader
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('e-steppers-container') },
                        _stepsContent,
                        this.renderActions()
                    )
                );
            }
            return;
        }
    }, {
        key: 'renderVertical',
        value: function renderVertical() {
            var self = this,
                stepsItems = null,
                steps = this.props.steps;

            if (steps.length > 0) {
                var _stepsItems = steps.map(function (item, key) {
                    if (!item.title) return;
                    return _react2.default.createElement(
                        'div',
                        { key: 'stepper-' + key,
                            className: (0, _classnames2.default)({ progress: self.state.currentStep > key, active: self.state.selected === key }) },
                        _react2.default.createElement(
                            'div',
                            { className: 'e-steppers-list' },
                            _react2.default.createElement(
                                'span',
                                { className: (0, _classnames2.default)('step-icon', self.state.currentStep > key || self.state.selected === key ? self.state.activeColor : '', self.state.currentStep < key ? self.state.inactiveColor : '') },
                                self.state.currentStep > key ? _react2.default.createElement('i', { className: 'e-icon-action-done' }) : key + 1
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: (0, _classnames2.default)('title', { 'hasOptional': item.optional }) },
                                item.title,
                                item.optional ? _react2.default.createElement(
                                    'div',
                                    { className: 'optional' },
                                    item.optional
                                ) : null
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'e-steppers-container' },
                            _react2.default.createElement(
                                'div',
                                { className: (0, _classnames2.default)('e-stepper-content', { active: self.state.selected === key }) },
                                steps.length - 1 !== key ? _react2.default.createElement('span', { className: 'connector' }) : null,
                                item.content,
                                self.renderActions()
                            )
                        )
                    );
                });

                return _react2.default.createElement(
                    'div',
                    { className: 'e-steppers vertical' },
                    _stepsItems
                );
            }
            return;
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            if (this.props.steps.length > 0) {
                return _react2.default.createElement(
                    'div',
                    { className: 'e-padding-top-10 clearfix e-stepper-actions' },
                    this.state.documentSize < 3 || this.props.onBack && this.state.currentStep > 0 ? _react2.default.createElement(
                        'button',
                        {
                            onClick: this.backStepper.bind(this, this.props.onBack),
                            onTouch: this.backStepper.bind(this, this.props.onBack),
                            className: 'e-btn-default flat e-text-grey-400 e-left',
                            style: { backgroundColor: 'transparent' } },
                        'BACK'
                    ) : null,
                    this.state.documentSize < 3 || this.props.onContinue && this.state.currentStep < this.state.maxSteps ? _react2.default.createElement(
                        'button',
                        {
                            onClick: this.continueStepper.bind(this, this.props.onContinue),
                            onTouch: this.continueStepper.bind(this, this.props.onContinue),
                            className: 'e-btn-default flat e-text-blue-500 e-right',
                            style: { backgroundColor: 'transparent' } },
                        'CONTINUE'
                    ) : null
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.documentSize < 3) {
                return this.renderVertical();
            }

            return this.props.type === 'vertical' ? this.renderVertical() : this.renderHorizontal();
        }
    }]);

    return Stepper;
})(_react2.default.Component);

Stepper.defaultProps = {
    steps: {},
    type: 'horizontal',
    activeColor: 'e-background-indigo-400',
    inactiveColor: 'e-background-grey-400',
    editable: true,
    currentStep: 0,
    onContinue: null,
    onBack: null
};

module.exports = Stepper;