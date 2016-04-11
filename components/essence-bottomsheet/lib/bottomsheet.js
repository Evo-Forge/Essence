'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./bottomsheet.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./bottomsheet.less');

var BottomSheet = (function (_React$Component) {
    _inherits(BottomSheet, _React$Component);

    function BottomSheet(props) {
        _classCallCheck(this, BottomSheet);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BottomSheet).call(this, props));

        var overlayVisible = props.visible;
        _this.state = {
            visible: overlayVisible,
            classes: (0, _classnames2.default)('e-bottom-sheet', { 'animate': overlayVisible }, { 'transparent': !overlayVisible }, props.className, props.classes),
            styles: {
                overlay: { display: 'block', zIndex: '6' },
                container: { position: 'relative' }
            },
            onStart: props.onStart,
            onEnd: props.onEnd
        };

        if (props.visible && props.onEnd) {
            props.onEnd();
        }
        return _this;
    }

    _createClass(BottomSheet, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                visible: nextProps.visible,
                classes: (0, _classnames2.default)('e-bottom-sheet', { 'animate': nextProps.visible }, { 'transparent': !nextProps.visible }, nextProps.className, nextProps.classes),
                onStart: nextProps.onStart,
                onEnd: nextProps.onEnd
            });

            if (!nextProps.visible) {
                this.setState({
                    classes: (0, _classnames2.default)('e-bottom-sheet', { 'transparent': true }, { 'animate': false }, nextProps.className, nextProps.classes)
                });
            }

            if (nextProps.visible && this.state.onStart) {
                this.state.onStart();
            }
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            var toggleVisible = !this.state.visible;

            this.setState({
                visible: toggleVisible
            });

            if (!toggleVisible) {
                this.setState({
                    classes: (0, _classnames2.default)('e-bottom-sheet', { 'transparent': true }, { 'animate': false }, this.props.className, this.props.classes)
                });

                if (this.props.visible && this.props.onEnd) {
                    this.props.onEnd();
                }
            }
        }
    }, {
        key: 'overlay',
        value: function overlay() {
            if (this.state.visible) {
                return _react2.default.createElement('div', {
                    style: this.state.styles.overlay,
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
                { style: this.state.styles.container },
                _react2.default.createElement(
                    'div',
                    _extends({}, this.props, { className: this.state.classes }),
                    this.props.children
                ),
                this.overlay()
            );
        }
    }]);

    return BottomSheet;
})(_react2.default.Component);

module.exports = BottomSheet;