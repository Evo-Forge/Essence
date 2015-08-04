'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'Chip',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        children: [],
        activeId: false,
        isOpen: false
      };
    },

    setActive: function (data) {
      this.setState({
        isOpen: data.isOpen
      });
    },

    setActiveItem: function (data) {
      this.setState({
        activeId: data.id
      });
    },

    componentDidMount: function () {
      this.subscribe('chip:Open', this.setActive);
      this.subscribe('chip:Active', this.setActive);
      this.subscribe('chip:ActiveItem', this.setActiveItem);
    },

    componentDidUnmount: function () {
      this.unsubscribe('chip:Open', this.setActive);
      this.unsubscribe('chip:Active', this.setActive);
      this.unsubscribe('chip:ActiveItem', this.setActiveItem);
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      // One item
      if (childrens === 1) {
        React.addons.cloneWithProps(self.props.children, {
          first: true,
          open: (self.state.isOpen) ? true : false,
          activeId: 0,
          id: 0,
          key: 0
        });
      } else if (childrens > 1) {
      // Multiple items
        self.props.children.map(function (item, key) {
          var activeId = parseInt(self.state.activeId),
              isActive = (activeId === key) ? true : false;

          item = (
            React.addons.cloneWithProps(item, {
              first: (key === 0) ? true : false,
              open: (self.state.isOpen) ? true : false,
              active: isActive,
              id: key,
              key: key
            })
          );

          children.push(<li key={key}>{item}</li>);
        });
      }

      return children;
    },

    componentWillReceiveProps: function () {
      this.renderChildren();
    },

    render: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          isOpen = self.state.isOpen,
          classes = (isOpen) ? "chips" : "";

      return (
        <ul className={classes}>
          {self.renderChildren()}
        </ul>
      );
    }
});
