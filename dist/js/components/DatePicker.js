'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'DatePicker',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-picker-container': true,
        'transparent': true }
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = this.state.classes || [];

    self.subscribe('actions:datepicker', function (data) {
      if (data.action === 'hide') {
        self.hideDatePicker(data.id);
      } else if (data.action === 'show') {
        self.showDatePicker(data.id);
      } else if (data.action === 'setValue') {
        self.hideDatePicker(data.id);
      }
    });

    classes = Utils.classNames(classes, self.props.classes);

    self.setState({
      classes: classes
    });
  },

  showDatePicker: function showDatePicker(componentID) {
    var self = this,
        classes = self.state.classes;

    if (componentID === self.props.id) {
      classes['transparent'] = false;

      self.setState({
        classes: classes
      });

      document.querySelector('body').className = 'e-modal-open';
    }
  },

  hideDatePicker: function hideDatePicker(componentID) {
    var self = this,
        classes = self.state.classes;

    if (componentID === self.props.id) {
      classes['transparent'] = true;

      self.setState({
        classes: classes
      });

      document.querySelector('body').className = '';
    }
  },

  handleClick: function handleClick(ev, newDate) {
    this.setProps({
      date: newDate
    });
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    if (childrens === 1) {
      React.addons.cloneWithProps(self.props.children, {
        onClick: self.handleClick,
        date: self.props.date,
        parentId: self.props.id,
        key: 0
      });
    } else if (childrens > 1) {
      self.props.children.map(function (item, key) {
        item = React.addons.cloneWithProps(item, {
          onClick: self.handleClick,
          date: self.props.date,
          parentId: self.props.id,
          key: key
        });

        children.push(item);
      });
    }

    return children;
  },

  renderModalBackground: function renderModalBackground() {
    var self = this;

    if (!self.state.classes['transparent']) {
      return React.createElement('div', {
        id: 'e-modal-bg-' + self.props.id,
        style: { display: 'block' },
        onClick: this.hideDatePicker.bind(this, self.props.id),
        className: 'e-modal-bg' });
    }

    return null;
  },

  render: function render() {
    var self = this,
        classes = classSet(self.state.classes);

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: classes, id: self.props.id },
        self.renderChildren()
      ),
      self.renderModalBackground()
    );
  }
});