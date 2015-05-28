'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'DialogItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      isMobile: Utils.mobile.isMobile(),
      classes: {
        'e-dialog': this.props.full ? false : true,
        'e-dialog-full': this.props.full ? true : false,
        'transparent': this.props.show ? false : true },
      modalStyle: {
        display: 'none'
      }
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = self.state.classes;

    classes = Utils.classNames(classes, self.props.classes);

    self.setState({
      classes: classes
    });

    self.subscribe('actions:dialog', function (data) {
      if (data.action === 'hide') {
        self.hideDialog(data.id);
      } else if (data.action === 'show') {
        self.showDialog(data.id);
      }
    });
  },

  showDialog: function showDialog(dialogID) {
    var self = this,
        modalStyle = self.state.modalStyle,
        classes = self.state.classes;

    if (dialogID === self.props.id) {
      classes['transparent'] = false;

      modalStyle['display'] = 'block !important';
      self.setState({
        classes: classes,
        modalStyle: modalStyle
      });

      document.querySelector('body').className = 'e-modal-open';
    }
  },

  hideDialog: function hideDialog(dialogID) {
    var self = this,
        modalStyle = self.state.modalStyle,
        classes = self.state.classes;

    if (dialogID === self.props.id) {
      classes['transparent'] = true;
      modalStyle['display'] = 'block !important';

      self.setState({
        classes: classes,
        modalStyle: modalStyle
      });

      document.querySelector('body').className = '';
    }
  },

  renderModalBackground: function renderModalBackground() {
    var self = this;

    if (!self.state.classes['transparent']) {
      return React.createElement('div', {
        id: 'e-modal-bg-' + self.props.id,
        style: { display: 'block' },
        onClick: this.hideDialog.bind(this, self.props.id),
        className: 'e-modal-bg' });
    }

    return null;
  },

  renderDialog: function renderDialog() {
    var self = this,
        classes = classSet(self.state.classes);

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { id: self.props.id, className: classes },
        self.props.children
      ),
      self.renderModalBackground()
    );
  },

  render: function render() {
    var self = this;

    return self.renderDialog();
  }
});