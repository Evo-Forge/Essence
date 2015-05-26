'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'CardItem',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      style: {},
      classes: {
        'card': true
      }
    };
  },

  renderHeader: function renderHeader() {
    if (this.props.header) {
      var self = this,
          title = self.props.headerTitle ? self.props.headerTitle : '',
          subhead = self.props.headerSubhead ? self.props.headerSubhead : '',
          imageSrc = self.props.headerImage ? self.props.headerImage : self.props.leftImage ? self.props.leftImage : '',
          imageAlt = self.props.headerImageAlt ? self.props.headerImageAlt : '';

      return React.createElement(
        'div',
        { className: 'card-header clearfix' },
        React.createElement(
          'div',
          { className: 'card-header-image' },
          React.createElement('img', { src: imageSrc, alt: imageAlt })
        ),
        React.createElement(
          'div',
          { className: 'card-header-text' },
          React.createElement(
            'h2',
            { className: 'e-title' },
            title
          ),
          React.createElement(
            'h3',
            { className: 'e-subhead' },
            subhead
          )
        )
      );
    }

    return null;
  },

  renderImage: function renderImage() {
    var self = this,
        headline = '',
        imageSrc = self.props.image ? self.props.image : '',
        imageAlt = self.props.imageAlt ? self.props.imageAlt : '',
        imagesGallery = [],
        imageGallery = '';

    if (self.props.imageGallery) {
      self.props.imageGallery.map(function (image, index) {
        var img = React.createElement('img', { key: index, src: image.src, alt: image.alt });
        imagesGallery.push(img);
      });

      imageGallery = React.createElement(
        'div',
        { className: 'card-gallery' },
        imagesGallery
      );
    }

    if (self.props.headline && !self.props.imageGallery) {
      headline = React.createElement(
        'h2',
        { className: 'e-headline' },
        self.props.headline
      );
    }

    return React.createElement(
      'div',
      { className: 'card-main-image' },
      React.createElement('img', { src: imageSrc, alt: imageAlt }),
      headline,
      imageGallery
    );
  },

  renderText: function renderText() {
    var self = this;
    if (self.props.text) {
      return React.createElement(
        'div',
        { className: 'card-supporting-text' },
        React.createElement(
          'h4',
          null,
          self.props.text
        )
      );
    }

    return null;
  },

  renderAction: function renderAction() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    if (!self.props.action && childrens > 0) {
      if (childrens === 1) {
        children.push(self.props.children);
      } else {
        self.props.children.map(function (item) {
          children.push(item);
        });
      }

      return React.createElement(
        'div',
        { className: 'card-suplimentary-actions clearfix' },
        React.createElement(
          'div',
          { className: 'e-left' },
          children[0]
        ),
        React.createElement(
          'div',
          { className: 'e-right' },
          children[1]
        )
      );
    } else if (self.props.action || childrens > 0) {
      if (childrens === 1) {
        children.push(self.props.children);
      } else {
        self.props.children.map(function (item) {
          children.push(item);
        });
      }

      return React.createElement(
        'div',
        null,
        children
      );
    }

    return null;
  },

  renderCard: function renderCard() {
    var self = this,
        classes = classSet(Utils.classNames(self.state.classes, self.props.classes));

    if (!self.props.text && !self.props.header) {
      return React.createElement(
        'div',
        { className: classes },
        this.props.children
      );
    }

    return React.createElement(
      'div',
      { className: classes },
      self.renderHeader(),
      self.renderImage(),
      self.renderText(),
      self.renderAction()
    );
  },

  render: function render() {
    var self = this;
    return self.renderCard();
  }
});