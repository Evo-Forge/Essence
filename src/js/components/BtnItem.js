'use strict';

var React = require('react/addons'),
    RippleInk = require('./RippleInk'),
    Icon = require('./Icon'),
    PubSub = require('../utils/PubSub'),
    Position = require('../utils/Position'),
    ClickPosition = require('../utils/ClickPosition'),
    BackgroundColor = require('../utils/BackgroundColor');

module.exports = React.createClass({
    displayName: 'BtnItem',

    mixins: [PubSub, Position, ClickPosition],

    getInitialState: function() {
      return {
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
          parentPosition = Position (event.currentTarget),
          clickPosition = ClickPosition (event, parentPosition),
          bgColor = BackgroundColor(event),
          actionClick = self.props.actionClick || false,
          actionChildren = self.renderChildren(),
          snackbar = self.props.snackbar || false,
          toast = self.props.toast || false;

      /*
      //eg
      var clickCases = {
        "navigation": function() {
          return self.publish('showNavigation', true);
        },
        "toast": function(click) {
          return self.publish('toast:' + toast, true);
        },
        "snackbar": function(click) {
          return self.publish('snackbar:' + snackbar, true);
        },
        "default": function(click, child) {
          return self.publish('actions:' + click, child);
        }
      };

      if(o[myCase]) {
        o[myCase].apply(100, [1, 2, 3]);
      } else {
        o["default"]();
      }

      //end of eg
      */

      if (actionClick && actionClick === "navigation") {
        self.publish('showNavigation', true);
      }

      if (actionClick && actionClick !== "navigation") {
        self.publish('actions:'+actionClick, actionChildren);
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
            clickPosition={this.state.clickPosition}
          />
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
          classes = self.props.classes;

      if (self.props.type) {
        classes += " e-btn-" + self.props.type;
      }

      if (self.props.mini) {
        classes += "-mini";
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
          classes = self.renderClass(),
          isDisabled = (self.props.disabled ? 'disabled' : false);

      return (
        <button
          className={classes}
          disabled={isDisabled}
          onClick={self.handleClick}
          onTouch={self.handleClick}
          data-tooltip={self.renderTooltipText()}
          data-position={self.renderTooltipPosition()}
          >
          {self.rippleInk()}
          {self.renderIcon()}
        </button>
      );
    }
});
