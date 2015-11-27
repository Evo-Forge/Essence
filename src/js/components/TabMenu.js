'use strict';

var React = require('react'),
    Icon = require('./Icon'),
    PubSub = require('../utils/PubSub'),
    Highlighter = require('./Highlighter'),
    ClassNames = require('../utils/ClassNames'),
    classSet = require('classnames');

module.exports = React.createClass({
    displayName: 'TabMenu',

    mixins: [PubSub],

    getInitialState: function () {
      return {
        highlighterCSS: {
          left: '1px',
          right: '1px',
          direction: 'to-right'
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
      this.renderFirstItem();
      this.subscribe('menu:activeItem', this.setActiveItem);
    },

    componentWillUnmount: function () {
      this.unsubscribe('menu:activeItem', this.setActiveItem);
    },

    renderFirstItem: function() {
      var items = React.Children.toArray(this.props.children),
          firstId = items[0] !== undefined ? items[0].props.id : false,
          parentId = this.props.id,
          elem = document.getElementById(parentId + "-" + firstId);

      if (!firstId) { return; }

      var initPosition = {
        element: elem,
        left: elem.parentNode.offsetLeft,
        right: (elem.parentNode.offsetParent.offsetWidth - (elem.parentNode.offsetLeft + elem.offsetWidth)),
        width: elem.offsetWidth,
        direction: 'to-right',
        display: 'block'
      };

      this.publish('highlighterCSS:'+ parentId, initPosition);

      this.setActiveItem({
        activeItem: parentId + "-" + firstId,
        highlighterCSS: initPosition
      });
    },

    renderItems: function () {
      var self = this,
          children = {
            "list" : [],
            "content" : []
          };

      self.props.children.map(function (item, index) {
        var itemID = self.props.id + '-' + item.props.id,
            itemActive = false;

        if (
          !self.state.activeItem &&
          (
            (index === 0 && item.props.type === "list") ||
            (index === 1 && item.props.type === "content")
          )
        ) {
          itemActive = true;
        } else if (itemID === self.state.activeItem) {
          itemActive = true;
        } else {
          itemActive = false;
        }

        item = (
          React.cloneElement(item, {
            parentId: self.props.id,
            parentType: self.props.type,
            key: item.props.type +"-"+ itemID,
            active: itemActive
          })
        );


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

          <div className="e-tabs-container e-background-white">
            {items.content}
          </div>
        </div>
      );
    }
});