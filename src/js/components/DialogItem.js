'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DialogItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        isMobile: Utils.mobile.isMobile(),
        classes: {
          'e-dialog': this.props.full ? false : true,
          'e-dialog-full': this.props.full ? true : false,
          'transparent': this.props.show ? false : true,
        },
        modalStyle: {
          display: 'none'
        }
      };
    },

    componentDidMount: function () {
      var self = this,
          classes = self.state.classes;

      classes = Utils.classNames(classes, self.props.classes);

      self.setState({
        classes: classes
      });

      self.subscribe('actions:dialog', function (data) {
        if (data.action === "hide") {
          self.hideDialog(data.id);
        } else if (data.action === "show") {
          self.showDialog(data.id);
        }
      });

    },

    showDialog: function (dialogID) {
      var self = this,
          modalStyle = self.state.modalStyle,
          classes = self.state.classes;

      if (dialogID === self.props.id) {
        classes['transparent'] = false;

        modalStyle['display'] = 'block !important';
        self.setState({
          classes: classes,
          modalStyle: modalStyle
        });

        document.querySelector('body').className = 'e-modal-open';
      }
    },

    hideDialog: function (dialogID) {
      var self = this,
          modalStyle = self.state.modalStyle,
          classes = self.state.classes;

      if (dialogID === self.props.id) {
        classes['transparent'] = true;
        modalStyle['display'] = 'block !important';

        self.setState({
          classes: classes,
          modalStyle: modalStyle
        });

        document.querySelector('body').className = '';
      }
    },

    renderModalBackground: function () {
      var self = this;

      if (!self.state.classes['transparent']) {
        return (
          <div
            id={'e-modal-bg-' + self.props.id}
            style={{display: 'block'}}
            onClick={this.hideDialog.bind(this, self.props.id)}
            className={"e-modal-bg"} />
        );
      }

      return null;
    },

    renderDialog: function () {
      var self = this,
          classes = classSet(self.state.classes);

      return (
        <div>
          <div id={self.props.id} className={classes}>
            {self.props.children}
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
