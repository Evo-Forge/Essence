'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    Mobile = require('../utils/Mobile'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'DialogItem',

    mixins: [PubSub, Mobile],

    getInitialState: function() {
      return {
        isMobile: this.isMobile(),
        classes: {
          'e-dialog': (this.props.fullPage) ? false : true,
          'e-dialog-full': (this.props.fullPage) ? true : false
        }
      };
    },

    renderChildren: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        children.push(self.props.children);
      } else {
        self.props.children.map(function (item) {
          children.push(item);
        });
      }

      return children;
    },


    componentDidMount: function () {
      var self = this;
      // Subscribe to Action:Dialog
      self.subscribe('actions:dialog', function () {
        // "Show me the dialog"
      });
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    renderHeader: function () {
      var self = this;

      if (self.props.title) {
        return (
          <div className={"e-dialogs-header"}>
            <h2>{self.props.title}</h2>
          </div>
        );
      }

      return '';
    },

    renderContent: function () {
      var self = this;

      return (
        <div className={"e-dialogs-content"}>
          <p>
            {self.props.content}
          </p>
        </div>
      );
    },

    renderActions: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          actions = [];

      if (childrens === 1) {
        actions.push(self.props.children);
      } else if (childrens > 1) {
        self.props.children.map(function (item) {
          actions.push(item);
        });
      }

      if (actions.length > 0) {
        return (
          <div className={"e-dialogs-actions"}>
            {actions}
          </div>
        );
      }

      return '';
    },

    renderDialog: function () {
      var self = this,
          classes = self.state.classes;

      if (self.props.disable) {
        classes['disabled'] = true;
      }

      classes = classSet(classes);

      return (
        <div className={classes}>
          {self.renderHeader()}
          {self.renderContent()}
          {self.renderActions()}
        </div>
      );
    },

    render: function () {
      var self = this;

      return (
        <div>
          {self.renderDialog()}
          <br />
        </div>
      );
    }
});
