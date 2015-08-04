'use strict';

var React = require('react/addons'),
    Icon = require('./Icon'),
    PubSub = require('../utils/PubSub'),
    Highlighter = require('./Highlighter'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

var classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'TabMenu',

    mixins: [PubSub, ClassNames],

    getInitialState: function () {
      return {
        highlighterCSS: {
          left: 0,
          width: 'auto',
          Highlighter: false
        }
      };
    },

    initActiveItem: function (id) {
      if (id) {
        this.setState({
          activeItem: id
        });
      }
    },

    setActiveItem: function (data) {
      this.setState({
        activeItem: data.activeItem,
        highlighterCSS: data.highlighterCSS,
        highlighterId: this.props.type + "-" + this.props.id,
        highlighter: data.highlighter
      });
    },

    isActiveItem: function (item) {
      var self = this,
          index = item.props.id;

      if (self.state.activeItem === index) {
        return 'active';
      } else if (item.props.disabled) {
        return 'disabled';
      }

      return '';
    },

    componentDidMount: function () {
      this.subscribe('menu:activeItem', this.setActiveItem);
    },

    componentDidUnmount: function () {
      this.unsubscribe('menu:activeItem', this.setActiveItem);
    },

    renderItems: function () {
      var self = this,
          children = {
            "list" : [],
            "content" : []
          };

      self.props.children.map(function (item, index) {
        var itemID = self.props.id + '-' + item.props.id;

        item = (
          React.addons.cloneWithProps(item, {
            parentId: self.props.id,
            parentType: self.props.type,
            key: item.props.type +"-"+ itemID
          })
        );

        if (
          !self.state.activeItem &&
          (
            (index === 0 && item.props.type === "list") ||
            (index === 1 && item.props.type === "content")
          )
        ) {
          item.props.active = true;
        } else if (itemID === self.state.activeItem) {
          item.props.active = true;
        } else {
          item.props.active = false;
        }

        if (item.props.type === "list") {
          children.list.push(item);
        }

        if (item.props.type === "content") {
          children.content.push(item);
        }

      });

      if (children.list.length > 0 || children.content.length > 0) {
        return children;
      }

      return '';
    },

    renderScrollable: function (position) {
      var self = this;

      if (self.props.type === "scrollable" && position) {
        if (position === "left") {
          return (
            <a className={"e-tabs-scroller left"} href="#">
              <Icon name='navigation-chevron-left' />
            </a>
          );
        }

        if (position === "right") {
          return (
            <a className={"e-tabs-scroller right"} href="#">
              <Icon name='navigation-chevron-right' />
            </a>
          );
        }
      }

      return '';
    },

    render: function () {
      var self = this,
          items = self.renderItems(),
          highlighterCSS = (self.state.highlighterId === self.props.type + "-" + self.props.id) ?
              self.state.highlighterCSS : '',
          nextCSS = {
            left: self.state.nextLeft,
            width: self.state.nextWidth
          },
          classes = {
            'e-tabs': true,
            'e-background-cyan-500': true,
            'e-text-grey-50': true
          },

          classList = classSet(ClassNames(classes, self.props.classes));

      return (
        <div>
          <nav className={classList + " " + self.props.type}>
            {self.renderScrollable('left')}
            {self.renderScrollable('right')}
            <Highlighter
              id={self.props.id}
              css={highlighterCSS}
              nextCSS={nextCSS}
            />
            <ul className={"e-tabs-list e-row"}>
              {items.list}
            </ul>
          </nav>

          <div className="e-tabs-container">
            {items.content}
          </div>
        </div>
      );
    }
});
