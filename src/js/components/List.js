'use strict';

var React = require('react/addons'),
    Mobile = require('../utils/Mobile'),
    PubSub = require('../utils/PubSub'),
    ListItem = require('./ListItem'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'List',

    mixins: [PubSub, Mobile],

    getInitialState: function() {
      return {
        classes: {
          'e-list': true,
          'e-list-navigation': false,
          'single-line': true,
          'two-line': false,
          'multi-line': false,
          'has-avatar': true,
          'has-icon': true,
          'has-checkbox': false,
          'has-switches': false,
          'right': false,
          'left': false,
        },
        isMobile: this.isMobile()
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      if (self.props.classes) {
        (self.props.classes.split(" ")).map(function (s) {
          classes[s] = true;
        });
      }

      classes['has-avatar'] = (self.props.avatar) ? true : false;
      classes['has-icon'] = (self.props.icon) ? true : false;
      classes['has-right-checkbox'] = (self.props.position === 'right') ?
          true : false;
      classes['has-checkbox'] = (self.props.type === 'checkbox' &&
          self.props.position !== 'right' ) ? true : false;
      classes['two-line'] = (self.props.type === 'two-line') ? true : false;
      classes['multi-line'] = (self.props.type === 'multi-line') ? true : false;
      classes['has-switches'] = (self.props.type === 'switch') ? true : false;
      classes['has-dropdown'] = (self.props.type === 'expand') ? true : false;

      if (self.props.type === 'navigation' || self.props.type === 'expand') {
        classes['e-list'] = false;
        classes['single-line'] = false;
        classes['e-list-navigation'] = true;
      }

      self.setState({
        classes: classSet(classes)
      });
    },

    componentDidUnmount: function () {
      // Empty
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        var item = self.props.children;

        item = (
            React.addons.cloneWithProps(item, {
              id: 0,
              key: 0,
              dataId: 0,
              type: self.props.type,
              position: self.props.position,
            })
          );
        children.push(item);
      } else if (childrens > 1) {
        self.props.children.map(function (item, key) {
          item = (
            React.addons.cloneWithProps(item, {
              id: key,
              key: key,
              dataId: key,
              type: self.props.type,
              position: self.props.position,
            })
          );
          children.push(item);
        });
      }

      return children;
    },

    componentWillReceiveProps: function () {
      this.renderChildren();
    },

    render: function () {
      var self = this;

      return (
        <ul className={self.state.classes}>
          {self.renderChildren()}
        </ul>
      );
    }
});
