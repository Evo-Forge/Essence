'use strict';

var React = require('react/addons'),
    PubSub = require('../utils/PubSub'),
    ClassNames = require('../utils/ClassNames'),
    DateFormat = require('../utils/DateFormat'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DatePicker',

    mixins: [PubSub, ClassNames, DateFormat],

    getInitialState() {
      return {
        classes: {
          'e-picker-container': true,
          'transparent': true,
        }
      };
    },

    componentDidMount() {
      var self = this,
          classes = this.state.classes || [];

      self.subscribe('actions:datepicker', function (data) {
        if (data.action === "hide") {
          self.hideDatePicker(data.id);
        } else if (data.action === "show") {
          self.showDatePicker(data.id);
        } else if (data.action === "setValue") {
          self.hideDatePicker(data.id);
        }
      });

      classes = ClassNames(classes, self.props.classes);

      self.setState({
        classes: classes
      });
    },

    showDatePicker(componentID) {
      var self = this,
          classes = self.state.classes;

      if (componentID === self.props.id) {
        classes['transparent'] = false;

        self.setState({
          classes: classes
        });

        document.querySelector('body').className = 'e-modal-open';
      }
    },

    hideDatePicker(componentID) {
      var self = this,
          classes = self.state.classes;

      if (componentID === self.props.id) {
        classes['transparent'] = true;

        self.setState({
          classes: classes
        });

        document.querySelector('body').className = '';
      }
    },

    handleClick(ev, newDate) {
      this.setProps({
        date: newDate
      });
    },

    renderChildren() {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (childrens === 1) {
        React.addons.cloneWithProps(self.props.children, {
          onClick: self.handleClick,
          date: self.props.date,
          parentId: self.props.id,
          key: 0
        });
      } else if (childrens > 1) {
        self.props.children.map(function (item, key) {
          item = (
            React.addons.cloneWithProps(item, {
              onClick: self.handleClick,
              date: self.props.date,
              parentId: self.props.id,
              key: key
            })
          );

          children.push(item);
        });
      }

      return children;
    },

    renderModalBackground() {
      var self = this;

      if (!self.state.classes['transparent']) {
        return (
          <div
            id={'e-modal-bg-' + self.props.id}
            style={{display: 'block'}}
            onClick={this.hideDatePicker.bind(this, self.props.id)}
            className={"e-modal-bg"}
          />
        );
      }

      return null;
    },

    render() {
      var self = this,
          classes = classSet(self.state.classes);

      return (
        <div>
          <div className={classes} id={self.props.id}>
              {self.renderChildren()}
          </div>
          {self.renderModalBackground()}
        </div>
      );
    }
});
