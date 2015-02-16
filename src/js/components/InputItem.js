'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'InputItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: "",
        counter: {
          current: 0,
          maximum: 50
        },
        inputClasses: {},
        inputValue: ''
      };
    },

    componentDidMount: function () {
      var self = this,
          parentClass = {},
          inputClass = {},
          counter = self.state.counter,
          cx = React.addons.classSet;

      (self.props.classes.split(" ")).map(function (s) {
        parentClass[s] = true;
      });

      (self.props.inputClasses.split(" ")).map(function (s) {
        inputClass[s] = true;
      });

      if ( parseInt(self.props.counter) > 0 ) {
        counter.maximum = parseInt(self.props.counter);
      }

      self.setState({
        classes: cx(parentClass),
        inputClasses: cx(inputClass),
        counter: counter
      });

    },

    handleChange: function (eventChange) {
      var self = this,
          cx = React.addons.classSet,
          counter = self.state.counter,
          inputClasses = {},
          inputValue = eventChange.target.value;

      if (inputValue.length >= counter.maximum) {
        inputValue = inputValue.substr(0, counter.maximum);
      }

      counter.current = inputValue.length;

      (self.props.inputClasses.split(" ")).map(function (s) {
        inputClasses[s] = (
          (s === "empty" && inputValue.length > 0) ? false : true
        );
      });

      self.setState({
        counter: counter,
        inputValue: inputValue,
        inputClasses: cx(inputClasses)
      });
    },

    renderLabel: function () {
      if (!this.props.label || this.props.placeholder) {
        return '';
      }

      return (
        <span className="floating-label">
          {this.props.label}
        </span>
      );
    },

    renderHint: function () {
      if (!this.props.hint) {
        return '';
      }

      return (
        <span className="e-hint">
          {this.props.hint}
        </span>
      );
    },

    renderCounter: function () {
      var self = this;
      if (!self.props.counter) {
        return '';
      }

      return (
        <span className={"e-count"}>
          {self.state.counter.current}/{self.state.counter.maximum}
        </span>
      );
    },

    renderEffect: function () {
      return (
        <span className={"e-input-efects"}></span>
      );
    },

    renderInput: function () {
      var self = this,
          placeholder = (self.props.placeholder ? self.props.placeholder : ''),
          isRequired = (self.props.required ? true : false),
          isDisabled = (self.props.disabled ? true : false),
          type = (self.props.type ? self.props.type : ''),
          value = (self.props.value ? self.props.value :
            (self.state.inputValue ? self.state.inputValue : '')
          ),
          name = (self.props.name ? self.props.name : '');

      if (type === 'textarea') {
        return (
          <textarea
            className={self.state.inputClasses}
            type={type}
            name={name}
            value={value}
            required={isRequired}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={self.handleChange}
          >
          </textarea>
        );
      }

      return (
        <input
          className={self.state.inputClasses}
          type={type}
          name={name}
          value={value}
          required={isRequired}
          disabled={isDisabled}
          placeholder={placeholder}
          onChange={self.handleChange}
        />
      );
    },

    render: function () {
      var self = this,
          classes = self.state.classes;

      return (
        <div className={classes}>
          {self.renderInput()}
          {self.renderCounter()}
          {self.renderEffect()}
          {self.renderLabel()}
          {self.renderHint()}
        </div>
      );
    }
});
