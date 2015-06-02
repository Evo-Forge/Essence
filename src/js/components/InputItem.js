'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'InputItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: [],
        counter: {
          current: 0,
          maximum: 50
        },
        inputClasses: {
          'e-input': true,
          'empty': true
        },
        inputValue: ''
      };
    },

    componentDidMount: function () {
      var self = this,
          parentClass = self.props.classes || [],
          inputClasses = self.state.inputClasses,
          inputValue = self.props.value || self.props.inputValue || self.state.inputValue || '',
          counter = self.state.counter;

      if (self.props.counter && parseInt(self.props.counter) > 0 ) {
        counter.maximum = parseInt(self.props.counter);
      }

      self.subscribe('actions:input', function (data) {
        if (data.action === "setValue") {
          if (self.props.name === data.id) {
            inputValue = data.value;
            inputClasses['empty'] = false;
            self.setState({
              inputClasses: inputClasses,
              inputValue: inputValue
            });
          }
        }
      });

      if (inputValue.length > 1) {
        inputClasses['empty'] = false;
      }

      self.setState({
        classes: parentClass,
        inputClasses: inputClasses,
        inputValue: inputValue,
        counter: counter
      });
    },

    handleClick: function () {
      var self = this,
          actionClick = self.props.actionClick || false,
          actionType = self.props.actionType || false;

      if (actionClick && actionType) {
        self.publish('actions:'+actionClick, actionType);
      }

      if (self.props.onClick) {
        return self.props.onClick;
      }
    },

    handleChange: function (eventChange) {
      var self = this,
          counter = self.state.counter,
          inputClasses = self.state.inputClasses || [],
          inputValue = eventChange.target.value;

      if (inputValue.length >= counter.maximum && self.props.counter) {
        inputValue = inputValue.substr(0, counter.maximum);
      }

      counter.current = inputValue.length;

      if (inputValue.length > 0) {
        inputClasses['empty'] = false;
      }

      if (inputValue.length === 0) {
        inputClasses['empty'] = true;
      }

      self.setState({
        counter: counter,
        inputValue: inputValue,
        inputClasses: inputClasses
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
          placeholder = self.props.placeholder || '',
          isRequired = (self.props.required ? true : false),
          isDisabled = (self.props.disabled ? true : false),
          type = self.props.type || 'text',
          value = self.props.value || self.state.inputValue || '',
          name = self.props.name || '',
          inputClasses = classSet(Utils.classNames(self.state.inputClasses, self.props.inputClasses));

      if (type === 'textarea') {
        return (
          <textarea
            className={inputClasses}
            ref={this.props.ref}
            type={type}
            name={name}
            defaultValue={value}
            value={value}
            required={isRequired}
            disabled={isDisabled}
            placeholder={placeholder}
            onChange={self.handleChange}
            onClick={self.handleClick}
            onTouch={self.handleClick}/>
        );
      }

      return (
        <input
          className={inputClasses}
          ref={this.props.ref}
          type={type}
          name={name}
          defaultValue={value}
          value={value}
          required={isRequired}
          disabled={isDisabled}
          placeholder={placeholder}
          onChange={self.handleChange}
          onClick={self.handleClick}
          onTouch={self.handleClick}/>
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
