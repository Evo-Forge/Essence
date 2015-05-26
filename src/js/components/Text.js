'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Text',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        classes: [],
        text: false
      };
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    componentDidMount: function () {
      var self = this;

      self.setState({
        classes: classSet(self.props.classes)
      });

      if (self.props.id) {
        self.subscribe('changeText_' + self.props.id, self.changeText);
      }

    },

    componentDidUnmount: function () {
      this.unsubscribe('changeText_' + this.props.id, null);
    },

    changeText: function (newText) {
      var self = this;
      if (newText) {
        self.setState({
          text: newText
        });
      }
    },

    _onClick: function(ev) {
      if (this.props.eventAction) {
        this.publish('hideNavigation', true);
        this.publish(this.props.eventAction, ev);
      }
    },

    renderChildren: function () {
      var self = this,
          appendText = null,
          classes = classSet(self.props.classes),
          text = this.state.text ? this.state.text :
            (self.props.text) ? (self.props.text) : null;

      if (text && self.props.appendText) {
        appendText = self.props.appendText;
      }

      if (!text) {
        text = self.props.children;
      }

      if (self.props.type) {
        // type: a => html a tag
        if (self.props.type === 'a') {
          var hasOnClick = self.props.onClick || self._onClick || null;

          return (<a
            className={classes}
            onClick={hasOnClick}
            target={self.props.target}
            href={self.props.href}
            key={self.props.id}
            id={self.props.id}
          >
            {self.props.children}
          </a>);
        }

        // type: p => html p tag
        if (self.props.type === 'p') {
          return (<p
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {appendText}
            {text}
          </p>);
        }

        // type: label => html label tag
        if (self.props.type === 'label') {
          return (<label
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {appendText}
            {text}
          </label>);
        }

        // type: strong => html strong tag
        if (self.props.type === 'strong') {
          return (<strong
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {appendText}
            {text}
          </strong>);
        }

        // type: small => html small tag
        if (self.props.type === 'small') {
          return (<small
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {appendText}
            {text}
          </small>);
        }

        // type: caption => html caption tag
        if (self.props.type === 'caption') {
          return (<caption
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {appendText}
            {text}
          </caption>);
        }

        // type: h1 => html h1 tag
        if (self.props.type === 'h1') {
          return (<h1
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {this.props.children}
          </h1>);
        }
        if (self.props.type === 'h2') {
          return (<h2
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {this.props.children}
          </h2>);
        }
        if (self.props.type === 'h3') {
          return (<h3
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {this.props.children}
          </h3>);
        }
        if (self.props.type === 'h4') {
          return (<h4
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {this.props.children}
          </h4>);
        }
        if (self.props.type === 'h5') {
          return (<h5
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {this.props.children}
          </h5>);
        }
        if (self.props.type === 'h6') {
          return (<h6
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {this.props.children}
          </h6>);
        }

        // type: sup => html sup tag
        if (self.props.type === 'sup') {
          return (<sup
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {appendText}
            {text}
          </sup>);
        }
        // type: sub => html sub tag
        if (self.props.type === 'sub') {
          return (<sub
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {appendText}
            {text}
          </sub>);
        }
        // type: em => html em tag
        if (self.props.type === 'em') {
          return (<em
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {appendText}
            {text}
          </em>);
        }

      }

      return (
        <span
          className={classes}
          onClick={self.props.onClick}
          key={self.props.id}
          id={self.props.id}
        >
          {appendText}
          {text}
        </span>
      );
    },

    render: function () {
      var self = this;
      return self.renderChildren();
    }
});
