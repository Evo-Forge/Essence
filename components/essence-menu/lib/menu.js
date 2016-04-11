'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./menu.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./menu.less');

var Menu = (function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this, props));

        _this.state = {
            isHidden: true,
            isActive: false,
            classes: (0, _classnames2.default)({
                'hide': true,
                'e-nav': true,
                'e-paper': true,
                'e-shadow-1': true,
                'right': _this.props.right,
                'fab-list': _this.props.type === 'fab'
            }),
            menuClasses: (0, _classnames2.default)({
                'e-fab-menu': _this.props.type === 'fab',
                'e-nav-menu': _this.props.type === 'fab' ? false : true,
                'cover': _this.props.type === 'cover',
                'fixed': _this.props.type === 'fab',
                'active': false
            }, _this.props.classes, _this.props.className),
            placeholder: _this.props.placeholder
        };
        return _this;
    }

    _createClass(Menu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var self = this;
            document.addEventListener('click', function (event) {
                if (self.currentMenu && !self.currentMenu.contains(event.target) && !self.state.isHidden) {
                    self.toggleMenu();
                }
            });

            document.addEventListener('touchend', function (event) {
                if (self.currentMenu && !self.currentMenu.contains(event.target) && !self.state.isHidden) {
                    self.toggleMenu();
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', function (event) {
                if (event && event.hasOwnProperty('props') && event.props.callback) {
                    return event.props.callback();
                }
            });
            document.removeEventListener('touchend', function (event) {
                if (event && event.hasOwnProperty('props') && event.props.callback) {
                    return event.props.callback();
                }
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                isHidden: true,
                isActive: false,
                classes: (0, _classnames2.default)({
                    'hide': true,
                    'e-nav': true,
                    'e-paper': true,
                    'e-shadow-1': true,
                    'right': nextProps.right,
                    'fab-list': nextProps.type === 'fab'
                }),
                menuClasses: (0, _classnames2.default)({
                    'e-fab-menu': nextProps.type === 'fab',
                    'e-nav-menu': nextProps.type === 'fab' ? false : true,
                    'cover': nextProps.type === 'cover',
                    'fixed': nextProps.type === 'fab',
                    'active': false
                }, nextProps.classes, nextProps.className),
                placeholder: nextProps.placeholder
            });
        }
    }, {
        key: 'toggleMenu',
        value: function toggleMenu(child) {
            var menuItemText = this.menuItem;

            if (child && child.hasOwnProperty('props') && child.props.placeholder) {
                this.setState({
                    placeholder: child.props.placeholder
                });
            }

            this.setState({
                isHidden: !this.state.isHidden,
                isActive: !this.state.isActive,
                classes: (0, _classnames2.default)({
                    'e-nav': this.props.type === 'fab' ? false : true,
                    'e-paper': this.props.type === 'fab' ? false : true,
                    'e-shadow-1': this.props.type === 'fab' ? false : true,
                    'right': this.props.right,
                    'hide': !this.state.isHidden,
                    'fab-list': this.props.type === 'fab'
                }),
                menuClasses: (0, _classnames2.default)({
                    'e-fab-menu': this.props.type === 'fab',
                    'e-nav-menu': this.props.type === 'fab' ? false : true,
                    'cover': this.props.type === 'cover',
                    'fixed': this.props.type === 'fab',
                    'active': !this.state.isActive
                }, this.props.classes, this.props.className)
            });

            if (child && child.hasOwnProperty('props') && child.props.callback) {
                return child.props.callback();
            }
        }
    }, {
        key: 'renderPlaceHolder',
        value: function renderPlaceHolder() {
            var _this2 = this;

            if (this.props.type === 'fab') {
                return _react2.default.createElement(
                    'span',
                    {
                        onClick: this.toggleMenu.bind(this),
                        className: 'e-btn-fab lines-button'
                    },
                    _react2.default.createElement('span', { className: 'lines' })
                );
            }

            // no icon or placeholder generate default menu
            if (!this.props.icon && !this.props.placeholder) {
                return _react2.default.createElement(
                    'span',
                    { onClick: this.toggleMenu.bind(this) },
                    _react2.default.createElement(
                        'span',
                        { ref: function ref(_ref) {
                                return _this2.selectedMenu = _ref;
                            } },
                        'Menu'
                    ),
                    _react2.default.createElement('i', { className: 'e-icon-navigation-arrow-drop-down' })
                );
            }

            if (this.props.placeholder) {
                return _react2.default.createElement(
                    'span',
                    { onClick: this.toggleMenu.bind(this) },
                    _react2.default.createElement(
                        'span',
                        { ref: function ref(_ref2) {
                                return _this2.selectedMenu = _ref2;
                            } },
                        this.props.placeholder
                    ),
                    _react2.default.createElement('i', { className: 'e-icon-navigation-arrow-drop-down' })
                );
            }
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var self = this;
            return _react2.default.Children.map(self.props.children, function (child, key) {
                var menuChild = _react2.default.cloneElement(child, {
                    onClick: self.toggleMenu.bind(self, child),
                    onTouch: self.toggleMenu.bind(self, child),
                    ref: function ref(_ref3) {
                        return self.menuItemChild = _ref3;
                    }
                });
                return _react2.default.createElement(
                    'li',
                    _extends({}, self.props, {
                        onClick: self.toggleMenu.bind(self),
                        ref: function ref(_ref4) {
                            return self.menuItem = _ref4;
                        } }),
                    menuChild
                );
            });
        }
    }, {
        key: 'renderIcon',
        value: function renderIcon() {
            if (this.props.icon) {
                return _react2.default.createElement('i', {
                    className: 'e-icon-' + this.props.icon,
                    onClick: this.toggleMenu.bind(this)
                });
            }
            return;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'nav',
                {
                    className: this.state.menuClasses,
                    ref: function ref(_ref5) {
                        return _this3.currentMenu = _ref5;
                    }
                },
                this.renderPlaceHolder(),
                this.renderIcon(),
                _react2.default.createElement(
                    'ul',
                    _extends({}, this.props, { className: this.state.classes }),
                    this.renderChildren()
                )
            );
        }
    }]);

    return Menu;
})(_react2.default.Component);

module.exports = Menu;