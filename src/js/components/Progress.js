'use strict';

var React = require('react/addons'),
    Utils = require('../utils'),
    PubSub = require('../mixins/PubSub');

module.exports = React.createClass({
    displayName: 'Progress',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        classes: [],
        isMobile: Utils.mobile.isMobile()
      };
    },

    renderChildren: function () {
      var self = this,
          progressType = self.props.type ? self.props.type : false,
          progressSmall = self.props.small ? ' small' : '';

      if (progressType === 'slider') {
        return (
          <div className={"e-progress-slider"}>
            <div className={"e-progress-slider-line"} />
            <div className={"break dot1"} />
            <div className={"break dot2"} />
            <div className={"break dot3"} />
          </div>
        );
      }

      if (progressType === 'circle') {
        return (
          <div className={"e-progress-circle" + progressSmall}>
            <div className={"ball-frame ball-frame-1"}>
              <div className={"round-ball"} />
            </div>
            <div className={"ball-frame ball-frame-2"}>
              <div className={"round-ball"} />
            </div>
            <div className={"ball-frame ball-frame-3"}>
                <div className={"round-ball"} />
            </div>
            <div className={"ball-frame ball-frame-4"}>
                <div className={"round-ball"} />
            </div>
            <div className={"ball-frame ball-frame-5"}>
              <div className={"round-ball"} />
            </div>
        </div>
        );
      }

      if (progressType === 'dots') {
        return (
          <div className={"e-progress-dots"}>
            <div className={"e-progress-dot e-progress-dot-1"} />
            <div className={"e-progress-dot e-progress-dot-2"} />
            <div className={"e-progress-dot e-progress-dot-3"} />
            <div className={"e-progress-dot e-progress-dot-4"} />
            <div className={"e-progress-dot e-progress-dot-5"} />
          </div>
        );
      }

      if (progressType === 'fix') {
        return (
          <div className={"e-progress-fix"}>
            <div className={"e-progress-fix-slider"} />
          </div>
        );
      }

      if (progressType === 'dynamic') {
        return (
          <div className={"e-progress-dynamic"}>
            <div className={"e-progress-dynamic-slider"} />
            <div className={"e-progress-dynamic-slider second-slider"} />
          </div>
        );
      }

      return '';
    },

    componentWillReceiveProps: function () {
      this.renderChildren();
    },

    render: function () {
      var self = this;

      return (
        <div>
          {self.renderChildren()}
        </div>
      );
    }
});
