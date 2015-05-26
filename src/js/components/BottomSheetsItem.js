'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'BottomSheetsItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        classes: {
          'e-bottom-sheet': true,
          'animate': false,
          'transparent': true
        }
      };
    },

    showDialog: function () {
      var self = this,
          classes = self.state.classes;

      classes['transparent'] = false;
      classes['animate'] = true;

      self.setState({
        classes: classes
      });

      document.querySelector('body').className = 'e-modal-open';
    },

    hideDialog: function () {
      var self = this,
          classes = self.state.classes;

      classes['transparent'] = true;
      classes['animate'] = false;

      self.setState({
        classes: classes
      });

      document.querySelector('body').className = null;
    },

    renderModalBackground: function () {
      var self = this;

      if (!self.state.classes['transparent']) {
        return (
          <div
            id={'e-modal-bg-' + self.props.id}
            style={{display: 'block'}}
            onClick={self.hideDialog}
            className={"e-modal-bg"}/>
        );
      }

      return null;
    },

    componentDidMount: function () {
      var self = this;

      self.subscribe('actions:bottomsheets', function (data) {
        if (data.action === 'show' && data.targetID === self.props.id) {
          self.showDialog();
        }

        if (data.action === 'hide' && data.targetID === self.props.id) {
          self.hideDialog();
        }
      });
    },

    render: function () {
      var self = this,
          classes = self.state.classes,
          style = self.state.style;

      classes = classSet(classes);

      return (
        <div style={{'position': 'relative'}}>
          <div
            id={self.props.id}
            style={style}
            className={classes}
          >
            {self.props.children}
          </div>
          {self.renderModalBackground()}
        </div>
      );
    }
});
