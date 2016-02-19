'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

require('./highlighter.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require("!css!less!./highlighter.less");

var Highlighter = (function (_React$Component) {
  _inherits(Highlighter, _React$Component);

  function Highlighter(props) {
    _classCallCheck(this, Highlighter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Highlighter).call(this, props));

    _this.state = {
      highlighterStyle: {
        display: 'none',
        left: '0px',
        right: '0px'
      },
      direction: 'to-right'
    };
    return _this;
  }

  _createClass(Highlighter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.target) return;

      var target = this.props.target;
      var targetLeft = target.element.parentNode.offsetLeft;
      var stateLeft = this.state.highlighterStyle.left;

      this.setState({
        direction: targetLeft <= stateLeft ? 'to-left' : 'to-right',
        highlighterStyle: {
          display: this.props.display,
          left: this.props.left,
          right: this.props.right
        }
      });
    }
  }, {
    key: 'renderHighlighter',
    value: function renderHighlighter() {
      return _react2.default.createElement('div', {
        className: (0, _classnames2.default)('e-tabs-highlighter', this.state.direction),
        style: this.state.highlighterStyle });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderHighlighter();
    }
  }]);

  return Highlighter;
})(_react2.default.Component);

module.exports = Highlighter;