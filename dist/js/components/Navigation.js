'use strict';

var React = require('react/addons'),
    Icon = require('./Icon'),
    Utils = require('../utils'),
    PubSub = require('../mixins/PubSub'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
  displayName: 'Navigation',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      children: [],
      isMobile: Utils.mobile.isMobile() ? 'e-nav-drawer' : 'e-nav-drawer',
      classes: {
        'e-main': false,
        'e-navigation-open': false },
      width: window.outerWidth
    };
  },

  componentDidMount: function componentDidMount() {},

  componentDidUnmount: function componentDidUnmount() {
    this.unsubscribe('showNavigation', this.hideNavigation);
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    // One item
    if (childrens === 1) {
      children = self.props.children;
    } else if (childrens > 1) {
      // Multiple items
      self.props.children.map(function (item, key) {
        item = React.addons.cloneWithProps(item, {
          id: key,
          key: key
        });

        children.push(item);
      });
    }

    return children;
  },

  renderHeader: function renderHeader() {
    var self = this;

    if (self.props.header) {
      return React.createElement(
        'header',
        { className: 'e-nav-header' },
        self.renderLogo(),
        React.createElement(
          'span',
          { className: 'example-logo' },
          self.props.header
        )
      );
    }

    return null;
  },

  renderFooter: function renderFooter() {
    var self = this;
    if (self.props.footer) {
      return React.createElement(
        'footer',
        { className: 'e-nav-footer' },
        self.props.footer
      );
    }

    return null;
  },

  renderLogo: function renderLogo() {
    var self = this,
        logoAlt = self.props.header ? self.props.header : null;

    if (self.props.logo) {
      return React.createElement('img', {
        className: 'nav-logo',
        alt: logoAlt,
        src: self.props.logo });
    }

    return null;
  },

  showNavigation: function showNavigation() {
    var self = this,
        classes = self.state.classes;

    classes['e-navigation-open'] = true;

    self.setState({
      classes: classes
    });

    document.querySelector('body').className = 'e-navigation-open';
  },

  /*showNavigationComponent: function (data) {
    var self = this;
    if (self.props.live && data.target.id) {
      ComponentHTML.set(data.target.id);
    }
  },*/

  hideNavigation: function hideNavigation() {
    var self = this,
        classes = self.state.classes;

    classes['e-navigation-open'] = false;

    self.setState({
      classes: classes
    });

    document.querySelector('body').className = '';
  },

  renderContent: function renderContent() {
    var self = this;

    return React.createElement(
      'div',
      { className: 'e-main-content' },
      React.createElement(
        'button',
        {
          className: 'simple-button e-nav-toggle',
          onClick: self.showNavigation
        },
        React.createElement(Icon, { name: 'navigation-menu' }),
        self.renderChildren()
      )
    );
  },

  renderNavigation: function renderNavigation() {
    var self = this,
        liveStyle = {};

    if (!self.props.live) {
      liveStyle = {
        position: 'relative !important',
        zIndex: 0
      };
    }

    return React.createElement(
      'aside',
      {
        className: self.state.isMobile + ' e-shadow-1',
        style: liveStyle
      },
      React.createElement(
        'nav',
        null,
        React.createElement(
          'div',
          { className: 'e-navigation-wrapper' },
          self.renderHeader(),
          self.renderChildren()
        ),
        self.renderFooter()
      )
    );
  },

  renderModalBackground: function renderModalBackground() {
    var self = this;

    if (self.props.live) {
      return React.createElement('div', {
        id: 'e-modal-bg-navigation',
        className: 'e-modal-bg',
        onClick: self.hideNavigation
      });
    }

    return null;
  },

  render: function render() {
    var self = this,
        classes = self.state.classes;

    classes = classSet(classes);

    return React.createElement(
      'div',
      { className: classes },
      self.renderNavigation(),
      self.renderModalBackground()
    );
  }
});

/*
var self = this;
 if (self.props.live) {
  // Load HomePage
  var init_component = "components-home";
  ComponentHTML.set(init_component);
   self.subscribe('showNavigation', this.showNavigation);
  self.subscribe('showNavigationComponent', this.showNavigationComponent);
  self.subscribe('hideNavigation', this.hideNavigation);
}
*/