'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./block.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block = (function (_React$Component) {
    _inherits(Block, _React$Component);

    function Block(props) {
        _classCallCheck(this, Block);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Block).call(this, props));

        _this.state = {
            classes: (0, _classnames2.default)(_this.props.className, _this.props.classes)
        };
        return _this;
    }

    _createClass(Block, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                classes: (0, _classnames2.default)(nextProps.className, nextProps.classes)
            });
        }
    }, {
        key: 'renderBlock',
        value: function renderBlock() {
            var blockType = this.props.type;

            switch (blockType) {
                case 'span':
                    return _react2.default.createElement(
                        'span',
                        _extends({}, this.props, { className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'header':
                    return _react2.default.createElement(
                        'header',
                        _extends({}, this.props, { className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'footer':
                    return _react2.default.createElement(
                        'footer',
                        _extends({}, this.props, { className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'section':
                    return _react2.default.createElement(
                        'section',
                        _extends({}, this.props, { className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'ul':
                    return _react2.default.createElement(
                        'ul',
                        _extends({}, this.props, { className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'li':
                    return _react2.default.createElement(
                        'li',
                        _extends({}, this.props, { className: this.state.classes }),
                        this.props.children
                    );
                    break;
                case 'hr':
                    return _react2.default.createElement('hr', _extends({}, this.props, { className: this.state.classes }));
                    break;
                case 'br':
                    return _react2.default.createElement('br', _extends({}, this.props, { className: this.state.classes }));
                    break;
                default:
                    return _react2.default.createElement(
                        'div',
                        _extends({}, this.props, { className: this.state.classes }),
                        this.props.children
                    );
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderBlock();
        }
    }]);

    return Block;
})(_react2.default.Component);

Block.defaultProps = {
    type: 'div'
};

module.exports = Block;