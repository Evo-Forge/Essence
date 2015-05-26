'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    PubSub = require('../mixins/PubSub');

module.exports = React.createClass({
  displayName: 'ChipItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      style: {},
      classes: {
        'e-chip': true,
        'clearfix': true,
        'active': false,
        'press': false,
        'focus': false,
        'open': false
      },
      isOpen: false
    };
  },

  renderImage: function renderImage() {
    var self = this,
        imageSrc = self.props.image ? self.props.image : '',
        imageAlt = self.props.imageAlt ? self.props.imageAlt : '';

    return React.createElement(
      'div',
      { className: 'e-chip-image e-left' },
      React.createElement('img', {
        src: imageSrc,
        alt: imageAlt,
        onClick: self.setClick,
        onTouch: self.setClick })
    );
  },

  renderText: function renderText() {
    var self = this,
        email = self.props.email ? self.props.email : '';

    if (self.props.name) {
      return React.createElement(
        'div',
        { className: 'e-chip-text e-left' },
        React.createElement(
          'span',
          {
            onClick: self.setClick,
            onTouch: self.setClick,
            className: 'e-chip-name' },
          self.props.name
        ),
        React.createElement(
          'span',
          {
            onClick: self.setClick,
            onTouch: self.setClick,
            className: 'e-chip-adress' },
          email
        )
      );
    }

    return null;
  },

  setFocus: function setFocus(ev) {
    var self = this,
        classes = self.state.classes;

    classes['focus'] = ev.type === 'mouseenter' ? true : false;

    self.setState({
      classes: classes
    });

    ev.preventDefault();
  },

  setClick: function setClick(ev) {
    var self = this,
        targetID = ev.target.id || self.props.id,
        classes = self.state.classes;

    self.publish('chip:ActiveItem', { id: targetID });

    classes['press'] = ev.type === 'mousedown' ? true : false;

    self.setState({
      classes: classes
    });

    if (!self.state.isOpen) {
      self.openChip();
    }

    ev.preventDefault();
  },

  openChip: function openChip() {
    var self = this,
        isOpen = true;

    self.publish('chip:Open', { isOpen: isOpen });

    self.setState({
      isOpen: isOpen
    });
  },

  closeChip: function closeChip() {
    var self = this,
        isOpen = false,
        classes = self.state.classes;

    classes['press'] = false;

    self.publish('chip:Open', { isOpen: isOpen });

    self.setState({
      classes: classes,
      isOpen: isOpen
    });
  },

  renderChip: function renderChip() {
    var self = this,
        classes = self.state.classes;

    classes['first'] = self.props.first ? true : false;
    classes['active'] = self.props.active ? true : false;
    classes['open'] = self.props.open ? true : false;

    classes = classSet(classes);

    if (self.state.isOpen) {
      return React.createElement(
        'div',
        {
          id: self.props.id,
          className: classes,
          onMouseDown: self.setClick,
          onMouseUp: self.setClick,
          onMouseEnter: self.setFocus,
          onMouseOut: self.setFocus
        },
        self.renderImage(),
        self.renderText(),
        React.createElement('button', {
          className: 'e-close-btn e-right',
          onClick: self.closeChip
        })
      );
    }

    return React.createElement(
      'div',
      {
        id: self.props.id,
        className: classes,
        onClick: self.setClick,
        onTouch: self.setClick,
        onMouseEnter: self.setFocus,
        onMouseOut: self.setFocus
      },
      self.renderImage(),
      self.renderText(),
      React.createElement('button', {
        className: 'e-close-btn e-right',
        onClick: self.closeChip
      })
    );
  },

  render: function render() {
    var self = this,
        show = self.props.open ? 'block' : self.props.first ? 'block' : 'none';

    return React.createElement(
      'div',
      { style: { display: show } },
      self.renderChip()
    );
  }
});