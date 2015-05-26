'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'Block',

  getInitialState: function getInitialState() {
    return {
      classes: [],
      text: false
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    var self = this;
    self.renderChildren();
  },

  renderChildren: function renderChildren() {
    var self = this,
        classes = classSet(self.props.classes);

    if (self.props.type) {
      // type: div => html div tag
      if (self.props.type === 'div') {
        return React.createElement(
          'div',
          {
            className: classes,
            onClick: self.props.onClick,
            href: self.props.link,
            key: self.props.id,
            id: self.props.id
          },
          this.props.children
        );
      }

      // type: header => html header tag
      if (self.props.type === 'header') {
        return React.createElement(
          'header',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          self.props.children
        );
      }

      // type: footer => html footer tag
      if (self.props.type === 'footer') {
        return React.createElement(
          'footer',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          self.props.children
        );
      }

      // type: ul => html ul tag
      if (self.props.type === 'ul') {
        return React.createElement(
          'ul',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          self.props.children
        );
      }

      // type: li => html li tag
      if (self.props.type === 'li') {
        return React.createElement(
          'li',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          self.props.children
        );
      }

      // type: hr => html hr tag
      if (self.props.type === 'hr') {
        return React.createElement('hr', {
          className: classes,
          key: self.props.id,
          id: self.props.id });
      }

      // type: br => html br tag
      if (self.props.type === 'br') {
        return React.createElement('br', {
          className: classes,
          key: self.props.id,
          id: self.props.id });
      }
    }

    return React.createElement(
      'span',
      {
        className: classes,
        onClick: self.props.onClick,
        key: self.props.id,
        id: self.props.id
      },
      this.props.children
    );
  },

  render: function render() {
    var self = this;
    return self.renderChildren();
  }
});