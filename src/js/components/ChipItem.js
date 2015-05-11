'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'ChipItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: {
          'e-chip': true,
          'clearfix': true,
          'active': false,
          'press': false,
          'focus': false,
          'open': false
        },
        isOpen: false
      };
    },

    renderImage: function () {
      var self = this,
          imageSrc = (self.props.image) ? self.props.image : '',
          imageAlt = (self.props.imageAlt) ? self.props.imageAlt : '';

      return (
        <div className={"e-chip-image e-left"}>
          <img 
            src={imageSrc} 
            alt={imageAlt}
            onClick={self.setClick}
            onTouch={self.setClick}  />
        </div>
      );

    },

    renderText: function () {
      var self = this,
          email = self.props.email ? self.props.email : '';

      if (self.props.name) {
        return (
          <div className={"e-chip-text e-left"}>
            <span 
              onClick={self.setClick}
              onTouch={self.setClick} 
              className={"e-chip-name"}>
              {self.props.name}
            </span>
            <span 
              onClick={self.setClick}
              onTouch={self.setClick}
              className={"e-chip-adress"}>
              {email}
            </span>
          </div>
        );
      }

      return null;
    },

    setFocus: function (ev) {
      var self = this,
          classes = self.state.classes;

      classes['focus'] = (ev.type === 'mouseenter') ? true : false;

      self.setState({
        classes: classes
      });

      ev.preventDefault();
    },

    setClick: function (ev) {
      var self = this,
          targetID = ev.target.id || self.props.id,
          classes = self.state.classes;

      self.publish('chip:ActiveItem', {id: targetID});

      classes['press'] = (ev.type === 'mousedown') ? true : false;

      self.setState({
        classes: classes
      });

      if (!self.state.isOpen) {
        self.openChip();
      }

      ev.preventDefault();
    },

    openChip: function () {
      var self = this,
          isOpen = true;

      self.publish('chip:Open', {isOpen: isOpen});

      self.setState({
        isOpen: isOpen
      });
    },

    closeChip: function () {
      var self = this,
          isOpen = false,
          classes = self.state.classes;

      classes['press'] = false;

      self.publish('chip:Open', {isOpen: isOpen});

      self.setState({
        classes: classes,
        isOpen: isOpen
      });
    },

    renderChip: function () {
      var self = this,
          classes = self.state.classes;

      classes['first'] = (self.props.first) ? true : false;
      classes['active'] = (self.props.active) ? true : false;
      classes['open'] = (self.props.open) ? true : false;

      classes = classSet(classes);

      if (self.state.isOpen) {
        return (
          <div
            id={self.props.id}
            className={classes}
            onMouseDown={self.setClick}
            onMouseUp={self.setClick}
            onMouseEnter={self.setFocus}
            onMouseOut={self.setFocus}
          >
            {self.renderImage()}
            {self.renderText()}
            <button
              className={"e-close-btn e-right"}
              onClick={self.closeChip}
              >
            </button>
          </div>
        );
      }

      return (
        <div
          id={self.props.id}
          className={classes}
          onClick={self.setClick}
          onTouch={self.setClick}
          onMouseEnter={self.setFocus}
          onMouseOut={self.setFocus}
        >
          {self.renderImage()}
          {self.renderText()}
          <button
            className={"e-close-btn e-right"}
            onClick={self.closeChip}
            >
          </button>
        </div>
      );
    },

    render: function () {
      var self = this,
          show = self.props.open ? "block" :
            self.props.first ? "block" : "none";

      return (
        <div style={{display: show}}>
          {self.renderChip()}
        </div>
      );
    }
});
