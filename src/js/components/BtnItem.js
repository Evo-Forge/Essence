'use strict';

var React = require('react/addons'),
    RippleInk = require('./RippleInk'),
    Icon = require('./Icon'),
    Utils = require('../utils'),
    PubSub = require('../mixins/PubSub'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'BtnItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        classes: [],
        clicked: false,
        clickPosition: {
          x: 0,
          y: 0
        },
        showNavBtn: false
      };
    },

    renderIcon: function () {

      if (this.props.icon) {
        return (
          <Icon name={this.props.icon} />
        );
      }

      return (
        <span>
          {this.props.label}
        </span>
      );
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        children.push(self.props.children);
      } else if (childrens > 1) {
        self.props.children.map(function (item) {
          children.push(item);
        });
      }

      return children;
    },

    handleClick: function (event) {
      var self = this,
          elementBounding = this.refs.buttonRippleInk.getDOMNode().getBoundingClientRect(),
          clickPosition = Utils.position.get(event, elementBounding),
          bgColor = Utils.backgroundColor(event),
          actionClick = self.props.actionClick || false,
          actionType = self.props.actionType || false,
          actionChildren = self.renderChildren(),
          snackbar = self.props.snackbar || false,
          toast = self.props.toast || false;

      if (actionClick && actionClick === "navigation") {
        self.publish('showNavigation', true);
      }

      if (actionClick && actionClick !== "navigation") {
        if (actionChildren.length > 0) {
          self.publish('actions:'+actionClick, actionChildren);
        } else if (actionType) {
          self.publish('actions:'+actionClick, actionType);
        }
      }

      if (snackbar) {
        self.publish('snackbar:'+snackbar, true);
      }

      if (toast) {
        self.publish('toast:'+toast, true);
      }

      self.setState({
        bgColor: bgColor,
        clickPosition: clickPosition
      });

      if (!self.state.clicked) {
        self.setState({
          clicked: true
        });
      }
    },

    rippleInk: function () {
      var self = this;

      if (self.props.rippleEffect) {
        return (
          <RippleInk
            bgColor={this.state.bgColor}
            clickPosition={this.state.clickPosition}/>
        );
      }

      return false;
    },

    componentDidMount: function () {
      var self = this;

      self.subscribe('showNavigationButton', function(data) {
        self.setState({
          showNavigation: data
        });
      });
    },

    componentWillReceiveProps: function () {
      this.setState({
        clicked: false
      });
    },

    renderClass: function () {
      var self = this,
          classes = classSet(self.props.classes || []);

      if (self.props.type && self.props.mini) {
        classes += " e-btn-" + self.props.type + "-mini";
      } else if (self.props.type) {
        classes += " e-btn-" + self.props.type;
      }

      if (self.props.rippleEffect) {
        classes += " e-ripple";
      }

      return classes;
    },

    renderTooltipText: function () {
      var self = this,
          tooltip = (self.props.tooltipText || null);

      return tooltip;
    },

    renderTooltipPosition: function () {
      var self = this,
          position = (self.props.tooltipPosition || null );

      return position;
    },

    render: function () {
      var self = this,
          classes = classSet(self.renderClass()),
          btnType = (self.props.submit ? 'submit' : 'button'),
          isDisabled = (self.props.disabled ? 'disabled' : false);

      return (
        <button
          type={btnType}
          ref="buttonRippleInk"
          className={classes}
          name={self.props.name}
          action={self.props.action}
          disabled={isDisabled}
          onClick={this.props.onClick || self.handleClick}
          onTouch={this.props.onTouch || self.handleClick}
          data-tooltip={self.renderTooltipText()}
          data-position={self.renderTooltipPosition()}
          >
          {self.rippleInk()}
          {self.renderIcon()}
        </button>
      );
    }
});
