'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChipItem = (function (_React$Component) {
    _inherits(ChipItem, _React$Component);

    function ChipItem(props) {
        _classCallCheck(this, ChipItem);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChipItem).call(this, props));

        _this.state = {
            classes: (0, _classnames2.default)(_this.props.classes, _this.props.className, {
                'e-chip': true,
                'clearfix': true,
                'press': false,
                'focus': false,
                'first': _this.props.first,
                'active': _this.props.active,
                'open': false
            }),
            isOpen: _this.props.open
        };
        return _this;
    }

    _createClass(ChipItem, [{
        key: 'renderImage',
        value: function renderImage() {
            return _react2.default.createElement(
                'div',
                { className: 'e-chip-image e-left' },
                _react2.default.createElement('img', {
                    src: this.props.image,
                    alt: this.props.imageAlt,
                    onClick: this.setClick.bind(this),
                    onTouch: this.setClick.bind(this) })
            );
        }
    }, {
        key: 'renderText',
        value: function renderText() {
            if (!this.props.name) return;

            return _react2.default.createElement(
                'div',
                { className: 'e-chip-text e-left' },
                _react2.default.createElement(
                    'span',
                    {
                        onClick: this.setClick.bind(this),
                        onTouch: this.setClick.bind(this),
                        className: 'e-chip-name' },
                    this.props.name
                ),
                _react2.default.createElement(
                    'span',
                    {
                        onClick: this.setClick.bind(this),
                        onTouch: this.setClick.bind(this),
                        className: 'e-chip-adress' },
                    this.props.email
                )
            );
        }
    }, {
        key: 'handleClasses',
        value: function handleClasses(ev) {
            return {
                'e-chip': true,
                'clearfix': true,
                'press': false,
                'focus': ev.type === 'mouseenter',
                'active': this.props.active,
                'open': this.state.isOpen
            };
        }
    }, {
        key: 'setFocus',
        value: function setFocus(ev) {
            this.setState({
                classes: (0, _classnames2.default)(this.props.classes, this.props.className, this.handleClasses(ev))
            });

            ev.preventDefault();
        }
    }, {
        key: 'setClick',
        value: function setClick(ev) {
            var targetID = ev.target.id;

            this.setState({
                classes: (0, _classnames2.default)(this.props.classes, this.props.className, this.handleClasses(ev), 'active')
            });

            if (!this.state.isOpen) {
                this.openChip();
            }
            ev.preventDefault();
        }
    }, {
        key: 'openChip',
        value: function openChip() {
            this.setState({
                isOpen: true
            });
            this.props.handleOpenChip();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                classes: (0, _classnames2.default)(this.props.classes, this.props.className, this.handleClasses(this))
            });
        }
    }, {
        key: 'renderCloseButton',
        value: function renderCloseButton() {
            if (!this.props.active) return;
            return _react2.default.createElement('button', {
                className: 'e-close-btn e-right',
                onClick: this.props.handleCloseChip.bind(this)
            });
        }
    }, {
        key: 'renderChip',
        value: function renderChip() {
            return _react2.default.createElement(
                'div',
                _extends({}, this.props, {
                    className: this.state.classes,
                    onClick: this.setClick.bind(this),
                    onMouseEnter: this.setFocus.bind(this),
                    onMouseOut: this.setFocus.bind(this)
                }),
                this.renderImage(),
                this.renderText(),
                this.renderCloseButton()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var displayChip = this.props.open || this.props.first ? 'block' : 'none';
            return _react2.default.createElement(
                'div',
                { style: { display: displayChip } },
                this.renderChip()
            );
        }
    }]);

    return ChipItem;
})(_react2.default.Component);

module.exports = ChipItem;