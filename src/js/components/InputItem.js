'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'InputItem',

    mixins: [PubSub, ClassNames],

    getInitialState: function() {
      return {
        style: {},
        classes: [],
        counter: {
          current: 0,
          maximum: 50
        },
        inputClasses: [],
        inputValue: ''
      };
    },

    componentDidMount: function () {
      var self = this,
          parentClass = self.props.classes || [],
          inputClass = self.props.inputClasses || [],
          counter = self.state.counter;

      if ( parseInt(self.props.counter) > 0 ) {
        counter.maximum = parseInt(self.props.counter);
      }

      self.setState({
        classes: parentClass,
        inputClasses: inputClass,
        counter: counter
      });
    },

    handleChange: function (eventChange) {
      var self = this,
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
        inputClasses: classSet(inputClasses)
      });
    },

    renderLabel: function () {
      if (!this.props.label || this.props.placeholder) {
        return null;
      }

      return (
        <span className="floating-label">
          {this.props.label}
        </span>
      );
    },

    renderHint: function () {
      if (!this.props.hint) {
        return null;
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
        return null;
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
          type = (self.props.type ? self.props.type : 'text'),
          value = (self.props.value ? self.props.value :
            (self.state.inputValue ? self.state.inputValue : '')
          ),
          name = (self.props.name ? self.props.name : ''),
          inputClasses = classSet(self.state.inputClasses);

      if (type === 'textarea') {
        return (
          <textarea
            className={inputClasses}
            type={type}
            name={name}
            defaultValue={value}
            required={isRequired}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={self.handleChange}
          />
        );
      }

      return (
        <input
          className={inputClasses}
          type={type}
          name={name}
          defaultValue={value}
          required={isRequired}
          disabled={isDisabled}
          placeholder={placeholder}
          onChange={self.handleChange}
        />
      );
    },

    render: function () {
      var self = this,
          classes = classSet(self.state.classes);

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
