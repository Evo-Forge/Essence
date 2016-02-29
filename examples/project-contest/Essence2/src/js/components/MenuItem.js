'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    Mobile = require('../utils/Mobile'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'MenuItem',

    mixins: [PubSub, Mobile, ClassNames],

    getInitialState: function() {
      return {
        isMobile: this.isMobile(),
        activeItems: [],
        classes: {
          'divider': (this.props.options && this.props.options.type === "divider"),
          'more': (this.props.options && this.props.options.type === "more")
        }
      };
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        children.push(self.props.children);
      } else if (children > 0) {
        self.props.children.map(function (item) {
          children.push(item);
        });
      }

      return children;
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    handleActive: function (ev) {
      var self = this,
          target = ev.currentTarget,
          currentID = target.id,
          currentIndex = self.state.activeItems.indexOf(currentID),
          activeItems = self.state.activeItems;

      if (currentIndex > -1) {
        activeItems.splice(currentIndex, 1);
      } else {
        activeItems.push(currentID);
      }

      self.setState({
        activeItems: activeItems
      });
    },

    handleEventAction: function (ev) {
      var self = this,
          target = ev.currentTarget,
          targetText = target.textContent;

      if (self.props.eventAction) {
        (self.props.eventAction.split(" ")).map(function(eventA) {

          if (eventA === "changeText") {
            self.publish(
              eventA + '_text-for-' + self.props.id, targetText
            );
          } else {
            self.publish(
              eventA + '_for_' + self.props.id, ev
            );
          }
        });
      }
    },

    renderItems: function(options) {
      var self = this,
          id = self.props.id,
          items = [];

      if ( options && options.length > 0 ) {
        options.map(function(value, index) {
          var text = value.text || false,
              type = value.type || false,
              link = value.link || "#";

          if (type === 'divider') {
            items.push(
              <li className="divider" key={"parent-"+id+"-divider-" + index} />
            );
          }

          if (value.items && value.items.length > 0) {
            var liID = encodeURI("more-" + index + "-" + text + link + value.items.length),
                isActiveID = self.state.activeItems.indexOf(liID),
                isActive = isActiveID > -1 ? 'active' : '';

            items.push(
              <li
                onClick={self.handleActive}
                className={"more " + isActive}
                id={liID}
                key={liID}
              >
                <a href={'javascript:;'}>
                  {text}
                  <i className="e-icon-navigation-chevron-right" />
                </a>
                <ul className={"e-nav e-paper e-shadow-1"} >
                  {self.renderItems(value.items)}
                </ul>
              </li>
            );
          }

          if (type !== "divider" && !value.items) {
            items.push(
              <li
                onClick={self.handleEventAction}
                key={"parent-"+id+"-link-" + index}
              >
                <a href={link}>
                  {text}
                </a>
              </li>
            );
          }
        });

        if (items.length > 0) {
          return items;
        }
      }

      return (
        <li
          onClick={self.handleEventAction}
          key={"parent-"+id+"-link"}
        >
          {self.props.children}
        </li>
      );
    },

    render: function () {
      var self = this,
          options = self.props.options,
          classes = {
            "e-nav": true,
            "right": self.props.right,
            "e-paper": true,
            "e-shadow-1": true,
            "hide": self.props.hide
          };

      classes = classSet(classes);

      if (!options) {
        var liClasses = {};

        if (self.props.classes) {
          liClasses = ClassNames(liClasses, self.props.classes);
        }

        liClasses = classSet(liClasses);

        return (
          <li
            onClick={self.props.onClick}
            key={"parent-"+self.props.id+"-link"}
            className={liClasses}
          >
            {self.props.children}
          </li>
        );
      }

      return (
        <ul
          className={classes}
          id={self.props.id}
        >
          {self.renderItems(options)}
        </ul>
      );
    }
});
