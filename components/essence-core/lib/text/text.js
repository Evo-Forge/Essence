'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./text.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = (function (_React$Component) {
    _inherits(Text, _React$Component);

    function Text(props) {
        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, props));

        _this.state = {
            classes: (0, _classnames2.default)({ 'e-badge': props.badge ? true : false }, _this.props.className, _this.props.classes)
        };
        return _this;
    }

    _createClass(Text, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                classes: (0, _classnames2.default)({ 'e-badge': nextProps.badge ? true : false }, nextProps.className, nextProps.classes)
            });
        }
    }, {
        key: 'renderText',
        value: function renderText() {
            var textType = this.props.type;
            var textBadge = this.props.badge.toString().substring(0, 3);

            switch (textType) {
                case 'a':
                    return _react2.default.createElement(
                        'a',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'p':
                    return _react2.default.createElement(
                        'p',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'label':
                    return _react2.default.createElement(
                        'label',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'strong':
                    return _react2.default.createElement(
                        'strong',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'small':
                    return _react2.default.createElement(
                        'small',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'caption':
                    return _react2.default.createElement(
                        'caption',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'h1':
                    return _react2.default.createElement(
                        'h1',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'h2':
                    return _react2.default.createElement(
                        'h2',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'h3':
                    return _react2.default.createElement(
                        'h3',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'h4':
                    return _react2.default.createElement(
                        'h4',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'h5':
                    return _react2.default.createElement(
                        'h5',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'h6':
                    return _react2.default.createElement(
                        'h6',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'sup':
                    return _react2.default.createElement(
                        'sup',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'sub':
                    return _react2.default.createElement(
                        'sub',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'em':
                    return _react2.default.createElement(
                        'em',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'blockquote':
                    return _react2.default.createElement(
                        'blockquote',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'cite':
                    return _react2.default.createElement(
                        'cite',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
                default:
                    return _react2.default.createElement(
                        'span',
                        _extends({}, this.props, { 'data-badge': textBadge, className: this.state.classes }),
                        this.props.children
                    );
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderText();
        }
    }]);

    return Text;
})(_react2.default.Component);

Text.defaultProps = {
    type: 'div',
    badge: ''
};

module.exports = Text;