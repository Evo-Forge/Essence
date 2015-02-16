'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'SwitchItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: ""
      };
    },

    renderCheckbox: function () {
      var self = this;
      return (
        <div className="e-checkbox">
          <label>
            <input
              type="checkbox"
              name={self.props.name}
              className={"toggle"}
            />
            <span className={"absolute e-wave"}></span>
            <span className={"absolute e-check-valid"}></span>
            {self.props.text}
          </label>
        </div>
      );
    },

    renderRadio: function () {
      var self = this;
      return (
        <div className={"e-radio e-radio-success"}>
          <label>
            <input
              type="radio"
              name={self.props.name}
              defaultValue={self.props.defaultValue}
            />
            <span className={"absolute circle"}></span>
            <span className={"absolute e-check"}></span>
            {self.props.text}
          </label>
        </div>
      );
    },

    renderSwitches: function () {
      var self = this;
      return (
        <div className={"e-switches"}>
          <label>
            {self.props.beforeText}
            <input
              type="checkbox"
              defaultChecked=""
              disabled={self.props.disable}
            />
            <span className={"e-switches-toggle"}></span>
            {self.props.afterText}
          </label>
        </div>
      );
    },

    renderSwitch: function () {
      var self = this,
          switcher = '';

      if (self.props.type === "checkbox") {
        return self.renderCheckbox();
      }

      if (self.props.type === "radio") {
        return self.renderRadio();
      }

      if (self.props.type === "switches") {
        return self.renderSwitches();
      }

      return switcher;
    },

    render: function () {
      var self = this;

      return (
        <div className="e-switch">
          {self.renderSwitch()}
        </div>
      );
    }
});
