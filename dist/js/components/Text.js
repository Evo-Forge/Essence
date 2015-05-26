'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'Text',

  mixins: [PubSub],

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

  componentDidMount: function componentDidMount() {
    var self = this;

    self.setState({
      classes: classSet(self.props.classes)
    });

    if (self.props.id) {
      self.subscribe('changeText_' + self.props.id, self.changeText);
    }
  },

  componentDidUnmount: function componentDidUnmount() {
    this.unsubscribe('changeText_' + this.props.id, null);
  },

  changeText: function changeText(newText) {
    var self = this;
    if (newText) {
      self.setState({
        text: newText
      });
    }
  },

  _onClick: function _onClick(ev) {
    if (this.props.eventAction) {
      this.publish('hideNavigation', true);
      this.publish(this.props.eventAction, ev);
    }
  },

  renderChildren: function renderChildren() {
    var self = this,
        appendText = null,
        classes = classSet(self.props.classes),
        text = this.state.text ? this.state.text : self.props.text ? self.props.text : null;

    if (text && self.props.appendText) {
      appendText = self.props.appendText;
    }

    if (!text) {
      text = self.props.children;
    }

    if (self.props.type) {
      // type: a => html a tag
      if (self.props.type === 'a') {
        var hasOnClick = self.props.onClick || self._onClick || null;

        return React.createElement(
          'a',
          {
            className: classes,
            onClick: hasOnClick,
            target: self.props.target,
            href: self.props.href,
            key: self.props.id,
            id: self.props.id
          },
          self.props.children
        );
      }

      // type: p => html p tag
      if (self.props.type === 'p') {
        return React.createElement(
          'p',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          appendText,
          text
        );
      }

      // type: label => html label tag
      if (self.props.type === 'label') {
        return React.createElement(
          'label',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          appendText,
          text
        );
      }

      // type: strong => html strong tag
      if (self.props.type === 'strong') {
        return React.createElement(
          'strong',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          appendText,
          text
        );
      }

      // type: small => html small tag
      if (self.props.type === 'small') {
        return React.createElement(
          'small',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          appendText,
          text
        );
      }

      // type: caption => html caption tag
      if (self.props.type === 'caption') {
        return React.createElement(
          'caption',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          appendText,
          text
        );
      }

      // type: h1 => html h1 tag
      if (self.props.type === 'h1') {
        return React.createElement(
          'h1',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          this.props.children
        );
      }
      if (self.props.type === 'h2') {
        return React.createElement(
          'h2',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          this.props.children
        );
      }
      if (self.props.type === 'h3') {
        return React.createElement(
          'h3',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          this.props.children
        );
      }
      if (self.props.type === 'h4') {
        return React.createElement(
          'h4',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          this.props.children
        );
      }
      if (self.props.type === 'h5') {
        return React.createElement(
          'h5',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          this.props.children
        );
      }
      if (self.props.type === 'h6') {
        return React.createElement(
          'h6',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          this.props.children
        );
      }

      // type: sup => html sup tag
      if (self.props.type === 'sup') {
        return React.createElement(
          'sup',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          appendText,
          text
        );
      }
      // type: sub => html sub tag
      if (self.props.type === 'sub') {
        return React.createElement(
          'sub',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          appendText,
          text
        );
      }
      // type: em => html em tag
      if (self.props.type === 'em') {
        return React.createElement(
          'em',
          {
            className: classes,
            onClick: self.props.onClick,
            key: self.props.id,
            id: self.props.id
          },
          appendText,
          text
        );
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
      appendText,
      text
    );
  },

  render: function render() {
    var self = this;
    return self.renderChildren();
  }
});