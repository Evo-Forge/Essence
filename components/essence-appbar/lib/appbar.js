'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _essenceCore = require('essence-core');

require('./appbar.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./appbar.less');

var AppBar = (function (_React$Component) {
    _inherits(AppBar, _React$Component);

    function AppBar(props) {
        _classCallCheck(this, AppBar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppBar).call(this, props));

        _this.state = {
            classes: (0, _classnames2.default)('e-appbar clearfix', _this.props.className, _this.props.classes)
        };
        return _this;
    }

    _createClass(AppBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var body = document.querySelector('body');
            var documentSize = _essenceCore.Utils.Client.documentSize();

            switch (documentSize) {
                case 1:
                    body.style.marginTop = '48px';
                    break;
                case 2:
                    body.style.marginTop = '56px';
                    break;
                case 3:
                default:
                    body.style.marginTop = '64px';
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                _extends({}, this.props, {
                    className: this.state.classes }),
                this.props.children
            );
        }
    }]);

    return AppBar;
})(_react2.default.Component);

module.exports = AppBar;