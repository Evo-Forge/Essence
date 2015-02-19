'use strict';

var React = require('react/addons'),
    Icon = require('./Icon'),
    Mobile = require('../utils/Mobile'),
    PubSub = require('../utils/PubSub'),
    ComponentHTML = require('../utils/ComponentHTML'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Navigation',

    mixins: [PubSub, Mobile],

    getInitialState: function() {
      return {
        children: [],
        isMobile: this.isMobile() ? "e-nav-drawer" : "e-nav-drawer",
        classes: {
          'e-main': false,
          'e-navigation-open': false,
        },
        width: window.outerWidth
      };
    },

    componentDidMount: function () {
      var self = this,
          currentWidth = window.outerWidth;

      if (self.props.live) {
        // Load HomePage
        var init_component = "components-home";
        ComponentHTML.set(init_component);

        self.subscribe('showNavigation', this.showNavigation);
        self.subscribe('showNavigationComponent', this.showNavigationComponent);
        self.subscribe('hideNavigation', this.hideNavigation);
      }
    },

    componentDidUnmount: function () {
      this.unsubscribe('showNavigation', this.hideNavigation);
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      // One item
      if (childrens === 1) {
        children = self.props.children;
      } else if (childrens > 1) {
      // Multiple items
        self.props.children.map(function (item, key) {
          item = (
            React.addons.cloneWithProps(item, {
              id: key,
              key: key
            })
          );

          children.push(item);
        });
      }

      return children;
    },

    renderHeader: function () {
      var self = this;

      if (self.props.header) {
        return (
          <header className={"e-nav-header"}>
            {self.renderLogo()}
            <span className={"example-logo"}>
              {self.props.header}
            </span>
          </header>
        );
      }

      return null;
    },

    renderFooter: function () {
      var self = this;
      if (self.props.footer) {
        return (
          <footer className="e-nav-footer">
            {self.props.footer}
          </footer>
        );
      }

      return null;
    },

    renderLogo: function () {
      var self = this,
          logoAlt = self.props.header ? self.props.header : null;

      if (self.props.logo) {
        return (
          <img
            className="nav-logo"
            alt={logoAlt}
            src={self.props.logo}
          />
        );
      }

      return null;
    },

    showNavigation: function () {
      var self = this,
          classes = self.state.classes;

      classes['e-navigation-open'] = true;

      self.setState({
        classes: classes
      });

      document.querySelector('body').className = 'e-navigation-open';
    },

    showNavigationComponent: function (data) {
      var self = this;
      if (self.props.live && data.target.id) {
        ComponentHTML.set(data.target.id);
      }
    },

    hideNavigation: function () {
      var self = this,
          classes = self.state.classes;

      classes['e-navigation-open'] = false;

      self.setState({
        classes: classes
      });

      document.querySelector('body').className = '';
    },

    renderContent: function () {
      var self = this;

      return (
        <div className={"e-main-content"}>
          <button
            className={"simple-button e-nav-toggle"}
            onClick={self.showNavigation}
          >
            <Icon name='navigation-menu' />
            {self.renderChildren()}
          </button>
        </div>
      );
    },

    renderNavigation: function () {
      var self = this,
          liveStyle = {};

      if (!self.props.live) {
        liveStyle = {
          position: 'relative !important',
          zIndex: 0
        };
      }

      return (
        <aside
          className={self.state.isMobile + " e-shadow-1"}
          style={liveStyle}
        >
          <nav>
            <div className={"e-navigation-wrapper"}>
              {self.renderHeader()}
              {self.renderChildren()}
            </div>
            {self.renderFooter()}
          </nav>
        </aside>
      );
    },

    renderModalBackground: function () {
      var self = this;

      if (self.props.live) {
        return (
          <div
            id='e-modal-bg-navigation'
            className={"e-modal-bg"}
            onClick={self.hideNavigation}
          />
        );
      }

      return null;
    },

    render: function () {
      var self = this,
          classes = self.state.classes;

      classes = classSet(classes);

      return (
        <div className={classes}>
          {self.renderNavigation()}
          {self.renderModalBackground()}
        </div>
      );
    }
});
