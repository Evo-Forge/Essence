'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils');

module.exports = React.createClass({
  displayName: 'SwitchItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      style: {},
      classes: {
        'e-checkbox': false,
        'e-radio': false,
        'e-radio-success': false,
        'e-switches': false },
      switchesClasses: {
        'e-switch': true
      }
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = self.state.classes;

    if (self.props.classes) {
      classes = Utils.classNames(classes, self.props.classes);
    }

    self.setState({
      switchesClasses: classes
    });
  },

  renderCheckbox: function renderCheckbox() {
    var self = this,
        classes = self.state.classes;

    classes['e-checkbox'] = true;
    classes = classSet(classes);

    return React.createElement(
      'div',
      { className: classes },
      React.createElement(
        'label',
        null,
        React.createElement('input', {
          type: 'checkbox',
          name: self.props.name,
          onChange: self.props.onChange,
          onClick: self.props.onClick,
          defaultChecked: self.props.checked,
          className: 'toggle' }),
        React.createElement('span', { className: 'absolute e-wave' }),
        React.createElement('span', { className: 'absolute e-check-valid' }),
        self.props.text
      )
    );
  },

  renderRadio: function renderRadio() {
    var self = this,
        classes = self.state.classes;

    classes['e-radio'] = true;
    classes['e-radio-success'] = true;
    classes = classSet(classes);

    return React.createElement(
      'div',
      { className: classes },
      React.createElement(
        'label',
        null,
        React.createElement('input', {
          type: 'radio',
          name: self.props.name,
          onChange: self.props.onChange,
          onClick: self.props.onClick,
          defaultChecked: self.props.checked,
          defaultValue: self.props.defaultValue }),
        React.createElement('span', { className: 'absolute circle' }),
        React.createElement('span', { className: 'absolute e-check' }),
        self.props.text
      )
    );
  },

  renderSwitches: function renderSwitches() {
    var self = this,
        classes = self.state.classes;

    classes['e-switches'] = true;
    classes = classSet(classes);

    return React.createElement(
      'div',
      { className: classes },
      React.createElement(
        'label',
        null,
        self.props.beforeText,
        React.createElement('input', {
          type: 'checkbox',
          onChange: self.props.onChange,
          onClick: self.props.onClick,
          defaultChecked: self.props.checked,
          disabled: self.props.disable }),
        React.createElement('span', { className: 'e-switches-toggle' }),
        self.props.afterText
      )
    );
  },

  renderSwitch: function renderSwitch() {
    var self = this,
        switcher = null;

    if (self.props.type === 'checkbox') {
      switcher = self.renderCheckbox();
    }

    if (self.props.type === 'radio') {
      switcher = self.renderRadio();
    }

    if (self.props.type === 'switches') {
      switcher = self.renderSwitches();
    }

    var switchesClasses = classSet(self.state.switchesClasses);

    return React.createElement(
      'div',
      { className: switchesClasses },
      switcher
    );
  },

  render: function render() {
    var self = this;

    return self.renderSwitch();
  }
});