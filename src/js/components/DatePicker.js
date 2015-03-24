'use strict';

var React = require('react/addons'),
    ClassNames = require('../utils/ClassNames'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'DatePicker',

    mixins: [ClassNames],

    getInitialState() {
      return {
        classes: {
          'e-picker-container': true
        }
      };
    },

    componentDidMount() {
      var classes = this.state.classes || [];

      classes = ClassNames(classes, this.props.classes);

      this.setState({
        classes: classes
      });
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
          key: 0
        });
      } else if (childrens > 1) {
        self.props.children.map(function (item, key) {
          /*if (item.props.name === 'DatePickerHeader') {
            item = (
              React.addons.cloneWithProps(item, {
                onClick: self.handleClick,
                date: self.props.date,
                key: key
              })
            );
          } else {
            item = (
              React.addons.cloneWithProps(item, {
                onClick: self.handleClick,
                key: key
              })
            );
          }*/

          item = (
            React.addons.cloneWithProps(item, {
              onClick: self.handleClick,
              date: self.props.date,
              key: key
            })
          );

          children.push(item);
        });
      }

      return children;
    },

    renderInputDate() {
      var self = this,
          inputDate = (self.props.date.month || "01") + "/" +
          (self.props.date.day || "01") + "/" + (self.props.year || "2015");

      return (
        <input
        name={self.props.inputName || "DatePickerInput"}
        defaultValue={inputDate}
        />
      );
    },

    render() {
      var self = this,
          classes = classSet(self.state.classes);

      return (
        <div className={classes}>
          {self.renderChildren()}
        </div>
      );
    }
});
