'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub');

module.exports = React.createClass({
  displayName: 'Chip',

  mixins: [PubSub],

  getInitialState: function getInitialState() {
    return {
      children: [],
      activeId: false,
      isOpen: false
    };
  },

  setActive: function setActive(data) {
    this.setState({
      isOpen: data.isOpen
    });
  },

  setActiveItem: function setActiveItem(data) {
    this.setState({
      activeId: data.id
    });
  },

  componentDidMount: function componentDidMount() {
    this.subscribe('chip:Open', this.setActive);
    this.subscribe('chip:Active', this.setActive);
    this.subscribe('chip:ActiveItem', this.setActiveItem);
  },

  componentDidUnmount: function componentDidUnmount() {
    this.unsubscribe('chip:Open', this.setActive);
    this.unsubscribe('chip:Active', this.setActive);
    this.unsubscribe('chip:ActiveItem', this.setActiveItem);
  },

  renderChildren: function renderChildren() {
    var self = this,
        childrens = React.Children.count(self.props.children),
        children = [];

    // One item
    if (childrens === 1) {
      React.addons.cloneWithProps(self.props.children, {
        first: true,
        open: self.state.isOpen ? true : false,
        activeId: 0,
        id: 0,
        key: 0
      });
    } else if (childrens > 1) {
      // Multiple items
      self.props.children.map(function (item, key) {
        var activeId = parseInt(self.state.activeId),
            isActive = activeId === key ? true : false;

        item = React.addons.cloneWithProps(item, {
          first: key === 0 ? true : false,
          open: self.state.isOpen ? true : false,
          active: isActive,
          id: key,
          key: key
        });

        children.push(React.createElement(
          'li',
          { key: key },
          item
        ));
      });
    }

    return children;
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.renderChildren();
  },

  render: function render() {
    var self = this,
        isOpen = self.state.isOpen,
        classes = isOpen ? 'chips' : '';

    return React.createElement(
      'ul',
      { className: classes },
      self.renderChildren()
    );
  }
});