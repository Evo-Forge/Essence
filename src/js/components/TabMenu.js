'use strict';

var React = require('react'),
    Icon = require('./Icon'),
    PubSub = require('../utils/PubSub'),
    Mobile = require('../utils/Mobile'),
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
      var tabList = document.querySelector(".e-tabs-list"),
          tabMenuItem = document.querySelector("#" + data.activeItem) || {};

      tabList.scrollLeft = tabMenuItem.getBoundingClientRect().left;

      var elem = document.querySelector("#" + data.activeItem);

      // set highlighter CSS styles + publish event to Highlighter component
      this.setHighlighterCSS(elem);

      this.setState({
        activeItem: data.activeItem,
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
      // render first item + set highlighter css values
      this.renderFirstItem();

      // subscribe for event
      this.subscribe('menu:activeItem', this.setActiveItem);
    },

    componentWillUnmount: function () {
      // render highlighter css values on resize
      window.removeEventListener("resize", this.renderActiveItem);
      this.unsubscribe('menu:activeItem', this.setActiveItem);
    },

    setHighlighterCSS: function(element) {
      var highlighterCSS = this.state.highlighterCSS,
          parentId = this.props.id;

      if (element) {
        highlighterCSS = {
          element: element,
          left: element.parentNode.getBoundingClientRect().left,
          right: (element.parentNode.offsetParent.getBoundingClientRect().width - (element.parentNode.getBoundingClientRect().left + element.getBoundingClientRect().width)),
          width: element.getBoundingClientRect().width,
          direction: 'to-right',
          display: 'block'
        };
      }

      if (highlighterCSS.right < 0) {
        highlighterCSS.right = 0;
      }

      this.publish('highlighterCSS:'+ parentId, highlighterCSS);
      this.setState({
        highlighterCSS: highlighterCSS
      });

      return highlighterCSS;
    },

    renderFirstItem: function() {
      var tabContainer = document.querySelector(".e-tabs-list"),
          items = React.Children.toArray(this.props.children),
          firstId = items[0] !== undefined ? items[0].props.id : false,
          parentId = this.props.id,
          elem = document.getElementById(parentId + "-" + firstId);

      if (!firstId) { return; }

      // set highlighter CSS styles + publish event to Highlighter component
      this.setHighlighterCSS(elem);

      this.setActiveItem({
        activeItem: parentId + "-" + firstId
      });

      // render highlighter css values on resize
      window.addEventListener("resize", this.renderActiveItem);
      tabContainer.addEventListener("scroll", this.renderScrollItem);
      tabContainer.addEventListener("touchMove", this.renderScrollItem);
    },

    renderScrollItem: function() {
      var activeElement = document.querySelector(".e-tabs-list li.active a");
      if (!activeElement.getAttribute('id')) { return; }
      
      this.setHighlighterCSS(activeElement);
    },

    renderActiveItem: function() {
      var activeElement = document.querySelector(".e-tabs-list li.active a");

      if (!activeElement.getAttribute('id')) { return; }

      // set highlighter CSS styles + publish event to Highlighter component
      this.setHighlighterCSS(activeElement);

      this.setActiveItem({
        activeItem: activeElement.getAttribute('id')
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
      if ( Mobile.screenSize() <= 2 && position ) {
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