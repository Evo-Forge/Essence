'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./tooltip.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = (function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip(props) {
        _classCallCheck(this, Tooltip);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tooltip).call(this, props));

        var self = _this;

        _this.state = {
            style: null,
            visible: props.visible,
            target: props.target,
            position: props.position || 'bottom',
            classes: (0, _classnames2.default)('e-tooltip', props.classes, props.className)
        };
        return _this;
    }

    _createClass(Tooltip, [{
        key: 'setStyle',
        value: function setStyle() {
            if (!document.querySelector(this.state.target)) {
                return;
            }

            var position = this.state.position;
            var target = document.querySelector(this.state.target);
            var props = target.getBoundingClientRect();

            var style = {};
            var left = props.left + props.width / 2;
            var top = props.top + props.height / 2;
            var marginLeft = -1 * (this.Tooltip.offsetWidth / 2);
            var marginTop = -1 * (this.Tooltip.offsetHeight / 2);

            style.left = left;
            style.top = top;
            style.marginLeft = marginLeft;
            style.marginTop = marginTop + 'px';

            if (left + marginLeft < 0) {
                style.left = 0;
                style.marginLeft = 0;
            } else {
                style.left = left + 'px';
                style.marginLeft = marginLeft + 'px';
            }

            if (position === 'top') {
                style.top = top - this.Tooltip.offsetHeight - 10 + 'px';
            } else {
                style.top = top + props.height + 10 + 'px';
            }

            return style;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                style: this.setStyle(),
                visible: nextProps.visible,
                target: nextProps.target
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: this.state.classes, ref: function ref(_ref2) {
                        return _this2.TooltipContainer = _ref2;
                    } },
                _react2.default.createElement(
                    'span',
                    {
                        style: this.state.style,
                        ref: function ref(_ref) {
                            return _this2.Tooltip = _ref;
                        },
                        className: this.state.visible ? 'active' : '' },
                    this.props.text || this.props.children
                )
            );
        }
    }]);

    return Tooltip;
})(_react2.default.Component);

module.exports = Tooltip;