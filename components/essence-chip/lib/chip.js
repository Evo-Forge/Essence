'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./chip.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chip = (function (_React$Component) {
    _inherits(Chip, _React$Component);

    function Chip(props) {
        _classCallCheck(this, Chip);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chip).call(this, props));

        _this.state = {
            selected: 0,
            value: '',
            iconColor: _this.props.iconColor,
            classes: (0, _classnames2.default)('chips', _this.props.classes, _this.props.className)
        };
        return _this;
    }

    _createClass(Chip, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                iconColor: nextProps.iconColor,
                classes: (0, _classnames2.default)('chips', nextProps.classes, nextProps.className)
            });
        }
    }, {
        key: 'selectContact',
        value: function selectContact(data) {
            this.setState({
                selected: data.index,
                value: data.value
            });
        }
    }, {
        key: 'renderContact',
        value: function renderContact() {
            var self = this;
            var contacts = null;
            var contact = this.props.data && this.props.data.contact ? this.props.data.contact : false;

            if (contact) {
                contacts = _react2.default.Children.map(contact, function (child, key) {
                    var selectedClass = self.state.selected === key ? ' selected' : '';

                    return _react2.default.createElement(
                        'li',
                        {
                            onClick: self.selectContact.bind(self, { index: key, value: child }),
                            onTouch: self.selectContact.bind(self, { index: key, value: child }),
                            key: 'chip-contact-' + key,
                            className: 'contact' + (key === 0 ? ' first' : '') + selectedClass },
                        child,
                        key === 0 ? _react2.default.createElement(
                            'span',
                            null,
                            'x'
                        ) : ''
                    );
                });
            }

            return contacts;
        }
    }, {
        key: 'renderIcon',
        value: function renderIcon() {
            return this.props.data.icon ? _react2.default.createElement(
                'span',
                { className: (0, _classnames2.default)('icon', this.state.iconColor) },
                this.props.data.icon
            ) : _react2.default.createElement('span', { className: 'empty' });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            if (this.props.data && this.props.data.onClose) {
                // +hide chip
            }
            return this.props.data && this.props.data.onClose ? this.props.data.onClose() : null;
        }
    }, {
        key: 'renderClose',
        value: function renderClose() {
            return this.props.data.deletable ? _react2.default.createElement('a', { href: '#!', onClick: this.handleClose.bind(this), className: 'deletable' }) : null;
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            return _react2.default.createElement('input', { defaulValue: this.state.value, type: 'hidden', name: this.props.data && this.props.data.name ? this.props.data.name : 'chip' });
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            var childs = _react2.default.Children.map(this.props.data.text, function (child, key) {
                return child;
            });
            return _react2.default.createElement(
                'li',
                { key: 'chip-item', ref: function ref(_ref) {
                        return _this2.chipItem = _ref;
                    } },
                this.renderIcon(),
                childs,
                this.renderClose()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                null,
                this.renderInput(),
                _react2.default.createElement(
                    'ul',
                    { key: 'chip-list', className: this.state.classes },
                    this.renderChildren()
                )
            );
        }
    }]);

    return Chip;
})(_react2.default.Component);

Chip.defaultProps = {
    data: null,
    iconColor: null
};

module.exports = Chip;