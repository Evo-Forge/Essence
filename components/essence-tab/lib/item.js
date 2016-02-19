'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('essence-core/src/utils/utils');

var Utils = _interopRequireWildcard(_utils);

var _highlighter = require('essence-core/src/highlighter/highlighter.jsx');

var _highlighter2 = _interopRequireDefault(_highlighter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabItem = (function (_React$Component) {
    _inherits(TabItem, _React$Component);

    function TabItem(props) {
        _classCallCheck(this, TabItem);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TabItem).call(this, props));

        _this.state = {
            classes: (0, _classnames2.default)(_this.props.classes, _this.props.className, _this.props.type, {
                'e-tabs': true,
                'e-background-cyan-500': true,
                'e-text-grey-50': true
            }),
            highlighter: {
                left: '1px',
                width: '0px',
                right: '1px',
                target: false,
                display: 'none',
                direction: 'to-right'
            },
            menu: [],
            content: []
        };
        return _this;
    }

    _createClass(TabItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // render first item + set highlighter css values
            this.renderFirstItem();
            this.renderItems();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // render highlighter css values on resize
            window.removeEventListener('resize', this.renderActiveItem);
        }
    }, {
        key: 'setHighlighterProps',
        value: function setHighlighterProps(element) {
            var highlighter = this.state.highlighter;
            var parentId = this.props.id;

            if (element) {
                highlighter = {
                    target: element,
                    left: element.parentNode.getBoundingClientRect().left,
                    right: element.parentNode.offsetParent.getBoundingClientRect().width - (element.parentNode.getBoundingClientRect().left + element.getBoundingClientRect().width),
                    width: element.getBoundingClientRect().width,
                    direction: 'to-right',
                    display: 'block'
                };
            }

            highlighter.right = highlighter.right < 0 ? 0 : highlighter.right;

            this.setState({
                highlighter: highlighter
            });
        }
    }, {
        key: 'setActiveItem',
        value: function setActiveItem(data) {
            var tabList = document.querySelector('.e-tabs-list');
            var tabMenuItem = document.querySelector('#' + data.activeItem) || {};

            tabList.scrollLeft = tabMenuItem.getBoundingClientRect().left;

            var target = document.querySelector('#' + data.activeItem);

            // set highlighter CSS styles + publish event to Highlighter component
            this.setHighlighterProps(target);

            this.setState({
                activeItem: data.activeItem,
                highlighterId: this.props.type + '-' + this.props.id,
                highlighter: data.highlighter
            });
        }
    }, {
        key: 'renderFirstItem',
        value: function renderFirstItem() {
            var tabContainer = document.querySelector('.e-tabs-list');
            var items = this.state.menu;
            var firstId = items[0] !== undefined ? items[0].props.id : false;
            var parentId = this.props.id || '';
            var target = document.getElementById(parentId + '-' + firstId);

            if (!firstId) {
                return;
            }

            // set highlighter CSS styles + publish event to Highlighter component
            this.setHighlighterProps(target);

            this.setActiveItem({
                activeItem: parentId + '-' + firstId
            });

            // render highlighter css values on resize
            window.addEventListener('resize', this.renderActiveItem);
            tabContainer.addEventListener('scroll', this.renderScrollItem);
            tabContainer.addEventListener('touchMove', this.renderScrollItem);
        }
    }, {
        key: 'renderScrollItem',
        value: function renderScrollItem() {
            var activeElement = document.querySelector('.e-tabs-list li.active a');
            if (!activeElement.getAttribute('id')) {
                return;
            }

            this.setHighlighterProps(activeElement);
        }
    }, {
        key: 'renderActiveItem',
        value: function renderActiveItem() {
            var activeElement = document.querySelector('.e-tabs-list li.active a');
            if (!activeElement.getAttribute('id')) {
                return;
            }

            // set highlighter CSS styles + publish event to Highlighter component
            this.setHighlighterProps(activeElement);

            this.setActiveItem({
                activeItewm: activeElement.getAttribute('id')
            });
        }
    }, {
        key: 'renderScrollable',
        value: function renderScrollable(position) {
            if (Utils.Mobile.screenSize() <= 2 && position) {
                if (position === 'left') {
                    return _react2.default.createElement(
                        'a',
                        { className: 'e-tabs-scroller left', href: '#' },
                        _react2.default.createElement('i', { className: 'e-icon-navigation-chevron-left' })
                    );
                }

                if (position === 'right') {
                    return _react2.default.createElement(
                        'a',
                        { className: 'e-tabs-scroller right', href: '#' },
                        _react2.default.createElement('i', { className: 'navigation-chevron-right' })
                    );
                }
            }
            return;
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var self = this;
            var menuItems = this.state.menu;
            var contentItems = this.state.content;

            _react2.default.Children.map(function (item, index) {
                var itemID = self.props.id + '-' + item.props.id;
                var itemActive = false;

                if (!this.state.activeItem && (index === 0 && item.props.type === 'list' || index === 1 && item.props.type === 'content')) {
                    itemActive = true;
                } else if (itemID === this.state.activeItem) {
                    itemActive = true;
                } else {
                    itemActive = false;
                }

                item = _react2.default.cloneElement(item, {
                    id: !item.props.id ? 'tab-item-' + index : item.props.id,
                    parentId: self.props.id,
                    parentType: self.props.type,
                    key: item.props.type + '-' + itemID,
                    active: itemActive
                });

                if (item.props.type === 'list') {
                    menuItems.push(item);
                }

                if (item.props.type === 'content') {
                    contentItems.push(item);
                }
            });

            if (menuItems.length > 0 || contentItems.length > 0) {
                this.setState({
                    menu: menuItems,
                    content: contentItems
                });
            }
        }
    }, {
        key: 'renderMenu',
        value: function renderMenu() {
            return _react2.default.createElement(
                'nav',
                { className: this.state.classes },
                _react2.default.createElement(_highlighter2.default, {
                    left: this.state.highlighter.left,
                    right: this.state.highlighter.right,
                    width: this.state.highlighter.width,
                    target: this.state.highlighter.target,
                    display: this.state.highlighter.display,
                    direction: this.state.highlighter.direction
                }),
                _react2.default.createElement(
                    'ul',
                    { className: 'e-tabs-list e-row' },
                    this.state.menu
                )
            );
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            return _react2.default.createElement(
                'div',
                { className: 'e-tabs-container e-background-white' },
                this.state.content
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.renderMenu(),
                this.renderContent()
            );
        }
    }]);

    return TabItem;
})(_react2.default.Component);

module.exports = TabItem;