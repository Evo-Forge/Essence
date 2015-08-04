'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames');

module.exports = React.createClass({
    displayName: 'SwitchItem',

    mixins: [PubSub, ClassNames],

    getInitialState: function() {
      return {
        style: {},
        classes: {
          'e-checkbox': false,
          'e-radio': false,
          'e-radio-success': false,
          'e-switches': false,
        },
        switchesClasses: {
          'e-switch': true
        }
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      if (self.props.classes) {
        classes = ClassNames(classes, self.props.classes);
      }

      self.setState({
        switchesClasses: classes
      });
    },

    renderCheckbox: function () {
      var self = this,
          classes = self.state.classes;

      classes['e-checkbox'] = true;
      classes = classSet(classes);

      return (
        <div className={classes}>
          <label>
            <input
              type="checkbox"
              name={self.props.name}
              defaultChecked={self.props.checked}
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
      var self = this,
          classes = self.state.classes;

      classes['e-radio'] = true;
      classes['e-radio-success'] = true;
      classes = classSet(classes);

      return (
        <div className={classes}>
          <label>
            <input
              type="radio"
              name={self.props.name}
              defaultChecked={self.props.checked}
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
      var self = this,
          classes = self.state.classes;

      classes['e-switches'] = true;
      classes = classSet(classes);

      return (
        <div className={classes}>
          <label>
            {self.props.beforeText}
            <input
              type="checkbox"
              defaultChecked={self.props.checked}
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
          switcher = null;

      if (self.props.type === "checkbox") {
        switcher = self.renderCheckbox();
      }

      if (self.props.type === "radio") {
        switcher = self.renderRadio();
      }

      if (self.props.type === "switches") {
        switcher = self.renderSwitches();
      }

      var switchesClasses = classSet(self.state.switchesClasses);

      return (
        <div className={switchesClasses}>
          {switcher}
        </div>
      );
    },

    render: function () {
      var self = this;

      return self.renderSwitch();
    }
});
