'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'TabItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        currentID: (this.props.active ? this.props.id : -1),
        parentID: (this.props.parentId ? this.props.parentId : ''),
        highlighterCSS: {
          left: 0,
          right: 0,
          direction: 'to-right'
        }
      };
    },

    handleMenuItemClick: function (ev) {
      var self = this,
          elem = ev.target,
          id = elem.id,
          prevPosition = this.state.highlighterCSS,
          width = elem.offsetWidth,
          left = elem.parentNode.offsetLeft,
          right = (elem.parentNode.offsetParent.offsetWidth -
              (elem.parentNode.offsetLeft + elem.offsetWidth)
          );

      if (elem.getAttribute('data-disabled') === 'true') {
        return;
      }

      /*console.log([
        elem,
        width,
        id,
        left,
        right,
        prevPosition
      ]);*/

      prevPosition.direction = (left <= prevPosition.left) ? 'to-left' : 'to-right';
      prevPosition.left = left;
      prevPosition.right = right;
      prevPosition.width = width;

      this.setState({
        highlighterCSS: prevPosition
      });

      this.publish('highlighterCSS:'+ self.state.parentID, prevPosition);
      this.publish('menu:activeItem', {
        activeItem: id,
        highlighterCSS: prevPosition
      });

      ev.preventDefault();
    },

    handleMenuItemKey: function (ev) {
      var elem = ev;
      if (ev.key === 'Tab') {
        this.handleMenuItemClick(ev);
      }
    },

    renderItem: function () {
      var self = this,
          type = self.props.type,
          parentType = self.props.parentType,
          listClasses = (parentType === "fixed") ? "brick brick-2 " : "",
          isActive = self.props.active ? 'active' :
              self.state.active ? 'active' : '';

      if (type === 'content') {
        return (
          <div
            id={self.state.parentID + "-" + self.props.id}
            className={"e-card e-shadow-1 e-tab-content " + isActive}

          >
            <p className={"e-subhead"}>
              {self.props.children}
            </p>
          </div>
        );
      }

      if (type === 'list') {
        return (
          <li
            className={listClasses + isActive}
            data-disabled={self.props.disabled}
          >
            <a
              href='#'
              id={self.state.parentID + "-" + self.props.id}
              parentId={self.state.parentID}
              onClick={self.handleMenuItemClick}
              onKeyUp={self.handleMenuItemKey}
            >
              {self.props.label}
            </a>
          </li>
        );
      }


      return (<div />);
    },

    render: function () {
      var self = this;

      return self.renderItem();
    }
});
