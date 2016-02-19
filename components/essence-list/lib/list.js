'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./list.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./list.less');

var List = (function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

        _this.state = {
            classes: (0, _classnames2.default)(_this.props.classes, _this.props.className, {
                'e-list': _this.props.type === 'big-icon' || _this.props.type === 'navigation' || _this.props.type === 'expand' ? false : true,
                'e-list-big-icon': _this.props.type === 'big-icon' ? true : false,
                'e-list-navigation': _this.props.type === 'navigation' ? true : false,
                'e-sublist-navigation': _this.props.type === 'sublist' ? true : false,
                'e-list-inline': _this.props.type === 'inline' ? true : false,
                'has-icon': _this.props.icon ? true : false,
                'has-avatar': _this.props.avatar ? true : false,
                'has-checkbox': _this.props.type === 'checkbox' ? true : false,
                'has-right-checkbox': _this.props.position === 'right' ? true : false,
                'has-dropdown': _this.props.type === 'expand' ? true : false,
                'has-switches': _this.props.type === 'switch' ? true : false,
                'left': false,
                'right': false,
                'clearfix': _this.props.type === 'big-icon' ? true : false,
                'two-line': _this.props.type === 'two-line' ? true : false,
                'multi-line': _this.props.type === 'multi-line' ? true : false,
                'single-line': _this.props.type === 'single-line' && (_this.props.type !== 'navigation' || _this.props.type !== 'expand') ? true : false
            })
        };
        return _this;
    }

    _createClass(List, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                classes: (0, _classnames2.default)(nextProps.classes, nextProps.className, {
                    'e-list': nextProps.type === 'big-icon' || nextProps.type === 'navigation' || nextProps.type === 'expand' ? false : true,
                    'e-list-big-icon': nextProps.type === 'big-icon' ? true : false,
                    'e-list-navigation': nextProps.type === 'navigation' ? true : false,
                    'e-sublist-navigation': nextProps.type === 'sublist' ? true : false,
                    'e-list-inline': nextProps.type === 'inline' ? true : false,
                    'has-icon': nextProps.icon ? true : false,
                    'has-avatar': nextProps.avatar ? true : false,
                    'has-checkbox': nextProps.type === 'checkbox' ? true : false,
                    'has-right-checkbox': nextProps.position === 'right' ? true : false,
                    'has-dropdown': nextProps.type === 'expand' ? true : false,
                    'has-switches': nextProps.type === 'switch' ? true : false,
                    'left': false,
                    'right': false,
                    'clearfix': nextProps.type === 'big-icon' ? true : false,
                    'two-line': nextProps.type === 'two-line' ? true : false,
                    'multi-line': nextProps.type === 'multi-line' ? true : false,
                    'single-line': nextProps.type === 'single-line' && (nextProps.type !== 'navigation' || nextProps.type !== 'expand') ? true : false
                })
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                _extends({}, this.props, { className: this.state.classes }),
                this.props.children
            );
        }
    }]);

    return List;
})(_react2.default.Component);

module.exports = List;