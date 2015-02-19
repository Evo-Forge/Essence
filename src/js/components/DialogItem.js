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
          'hide': true,
          'e-dialog': true,
          'e-dialog-full': (this.props.fullPage) ? true : false
        },
        modalStyle: {
          display: 'none'
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

      self.subscribe('actions:dialog', function (data) {
        if (data === "hide") {
          self.hideDialog();
        } else if (data === "show") {
          self.showDialog();
        }
      });

    },

    showDialog: function () {
      var self = this,
          modalStyle = self.state.modalStyle,
          classes = self.state.classes;

      classes['hide'] = false;
      modalStyle['display'] = 'block !important';

      self.setState({
        classes: classes,
        modalStyle: modalStyle
      });

      document.querySelector('body').className = 'e-navigation-open';
    },

    hideDialog: function () {
      var self = this,
          modalStyle = self.state.modalStyle,
          classes = self.state.classes;

      classes['hide'] = true;
      modalStyle['display'] = 'block !important';

      self.setState({
        classes: classes,
        modalStyle: modalStyle
      });

      document.querySelector('body').className = '';
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

      return null;
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

      return null;
    },

    renderModalBackground: function () {
      var self = this;

      if (!self.state.classes['hide']) {
        return (
          <div
            id={'e-modal-bg-' + self.props.id}
            style={{display: 'block'}}
            onClick={self.hideDialog}
            className={"e-modal-bg"}
          />
        );
      }

      return null;
    },

    renderDialog: function () {
      var self = this,
          classes = self.state.classes;

      classes = classSet(classes);

      return (
        <div>
          <div
            id={self.props.id}
            className={classes}
          >
            {self.renderHeader()}
            {self.renderContent()}
            {self.renderActions()}
          </div>
          {self.renderModalBackground()}
        </div>
      );
    },

    render: function () {
      var self = this;

      return self.renderDialog();
    }
});
