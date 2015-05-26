'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'List',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      classes: {
        'e-list': false,
        'e-list-big-icon': false,
        'e-list-navigation': false,
        'e-sublist-navigation': false,
        'has-icon': true,
        'has-avatar': true,
        'has-checkbox': false,
        'has-switches': false,
        'left': false,
        'right': false,
        'clearfix': false,
        'two-line': false,
        'multi-line': false,
        'single-line': false },
      activeItem: null,
      isMobile: Utils.mobile.isMobile()
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this,
        classes = self.state.classes || [];

    if (self.props.type) {
      classes['e-list'] = true;
    }

    if (self.props.classes) {
      classes = Utils.classNames(classes, self.props.classes);
    }

    classes['has-icon'] = self.props.icon ? true : false;
    classes['has-avatar'] = self.props.avatar ? true : false;
    classes['has-switches'] = self.props.type === 'switch' ? true : false;
    classes['has-dropdown'] = self.props.type === 'expand' ? true : false;
    classes['has-right-checkbox'] = self.props.position === 'right' ? true : false;
    classes['has-checkbox'] = self.props.type === 'checkbox' && self.props.position !== 'right' ? true : false;
    classes['single-line'] = self.props.type === 'single-line' ? true : false;
    classes['two-line'] = self.props.type === 'two-line' ? true : false;
    classes['multi-line'] = self.props.type === 'multi-line' ? true : false;

    if (self.props.type === 'big-icon') {
      classes['e-list'] = false;
      classes['e-list-big-icon'] = true;
      classes['clearfix'] = true;
    }

    if (self.props.type === 'sublist') {
      classes['e-sublist-navigation'] = true;
    }

    if (self.props.type === 'navigation' || self.props.type === 'expand') {
      classes['e-list'] = false;
      classes['single-line'] = false;
      classes['e-list-navigation'] = true;
    }

    self.subscribe('actions:list', function (data) {
      if (data.action === 'active') {
        self.setState({
          activeItem: data.id
        });
      }
    });

    self.setState({
      classes: classes
    });
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    if (childrens === 1) {
      var item = self.props.children;
      item = React.addons.cloneWithProps(item, {
        id: self.props.id + 0,
        key: 0,
        dataId: 0,
        isActive: true,
        type: self.props.type,
        position: self.props.position });
      children.push(item);
    } else if (childrens > 1) {
      self.props.children.map(function (item, key) {
        item = React.addons.cloneWithProps(item, {
          id: self.props.id + key,
          key: key,
          dataId: key,
          isActive: self.state.activeItem === self.props.id + key || key === 0 && !self.state.activeItem ? true : false,
          type: self.props.type,
          position: self.props.position });
        children.push(item);
      });
    }

    return children;
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.renderChildren();
  },

  render: function render() {
    var self = this,
        classes = classSet(self.state.classes);

    return React.createElement(
      'ul',
      { className: classes },
      self.renderChildren()
    );
  }
});