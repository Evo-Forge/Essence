'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./progress.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('!css!less!./progress.less');

var Progress = (function (_React$Component) {
    _inherits(Progress, _React$Component);

    function Progress(props) {
        _classCallCheck(this, Progress);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Progress).call(this, props));

        _this.state = {
            color: props.color || 'e-background-indigo-400',
            classes: (0, _classnames2.default)(_this.props.className, _this.props.classes)
        };
        return _this;
    }

    _createClass(Progress, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                color: nextProps.color || 'e-background-indigo-400',
                classes: (0, _classnames2.default)(nextProps.className, nextProps.classes)
            });
        }
    }, {
        key: 'renderProgress',
        value: function renderProgress() {
            var progressType = this.props.type;

            switch (progressType) {
                case 'circle':
                    var progressClasses = (0, _classnames2.default)('e-progress-circle', this.props.small ? 'small' : '');
                    return _react2.default.createElement(
                        'div',
                        { className: progressClasses },
                        _react2.default.createElement(
                            'div',
                            { className: 'ball-frame ball-frame-1' },
                            _react2.default.createElement('div', { className: (0, _classnames2.default)('round-ball', this.state.color) })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ball-frame ball-frame-2' },
                            _react2.default.createElement('div', { className: (0, _classnames2.default)('round-ball', this.state.color) })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ball-frame ball-frame-3' },
                            _react2.default.createElement('div', { className: (0, _classnames2.default)('round-ball', this.state.color) })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ball-frame ball-frame-4' },
                            _react2.default.createElement('div', { className: (0, _classnames2.default)('round-ball', this.state.color) })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'ball-frame ball-frame-5' },
                            _react2.default.createElement('div', { className: (0, _classnames2.default)('round-ball', this.state.color) })
                        )
                    );
                    break;
                case 'dots':
                    return _react2.default.createElement(
                        'div',
                        { className: 'e-progress-dots' },
                        _react2.default.createElement('div', { className: (0, _classnames2.default)('e-progress-dot e-progress-dot-1', this.state.color) }),
                        _react2.default.createElement('div', { className: (0, _classnames2.default)('e-progress-dot e-progress-dot-2', this.state.color) }),
                        _react2.default.createElement('div', { className: (0, _classnames2.default)('e-progress-dot e-progress-dot-3', this.state.color) }),
                        _react2.default.createElement('div', { className: (0, _classnames2.default)('e-progress-dot e-progress-dot-4', this.state.color) }),
                        _react2.default.createElement('div', { className: (0, _classnames2.default)('e-progress-dot e-progress-dot-5', this.state.color) })
                    );
                    break;
                case 'fix':
                    return _react2.default.createElement(
                        'div',
                        { className: 'e-progress-fix' },
                        _react2.default.createElement('div', { className: 'e-progress-fix-slider' })
                    );
                    break;
                case 'dynamic':
                    return _react2.default.createElement(
                        'div',
                        { className: 'e-progress-dynamic' },
                        _react2.default.createElement('div', { className: 'e-progress-dynamic-slider' }),
                        _react2.default.createElement('div', { className: 'e-progress-dynamic-slider second-slider' })
                    );
                    break;
                case 'slider':
                default:
                    return _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('e-progress-slider', this.state.color) },
                        _react2.default.createElement('div', { className: 'e-progress-slider-line' }),
                        _react2.default.createElement('div', { className: 'break dot1' }),
                        _react2.default.createElement('div', { className: 'break dot2' }),
                        _react2.default.createElement('div', { className: 'break dot3' })
                    );
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderProgress();
        }
    }]);

    return Progress;
})(_react2.default.Component);

module.exports = Progress;