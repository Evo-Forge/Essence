'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'Block',

    getInitialState: function() {
      return {
        classes: [],
        text: false
      };
    },

    componentWillReceiveProps: function () {
      var self = this;
      self.renderChildren();
    },

    renderChildren: function () {
      var self = this,
          classes = classSet(self.props.classes);

      if (self.props.type) {
        // type: div => html div tag
        if (self.props.type === 'div') {
          return (<div
            className={classes}
            onClick={self.props.onClick}
            href={self.props.link}
            key={self.props.id}
            id={self.props.id}
          >
            {this.props.children}
          </div>);
        }

        // type: header => html header tag
        if (self.props.type === 'header') {
          return (<header
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {self.props.children}
          </header>);
        }

        // type: footer => html footer tag
        if (self.props.type === 'footer') {
          return (<footer
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {self.props.children}
          </footer>);
        }

        // type: ul => html ul tag
        if (self.props.type === 'ul') {
          return (<ul
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {self.props.children}
          </ul>);
        }

        // type: li => html li tag
        if (self.props.type === 'li') {
          return (<li
            className={classes}
            onClick={self.props.onClick}
            key={self.props.id}
            id={self.props.id}
          >
            {self.props.children}
          </li>);
        }

        // type: hr => html hr tag
        if (self.props.type === 'hr') {
          return (<hr
            className={classes}
            key={self.props.id}
            id={self.props.id}/>
          );
        }

        // type: br => html br tag
        if (self.props.type === 'br') {
          return (<br
            className={classes}
            key={self.props.id}
            id={self.props.id}/>
          );
        }
      }

      return (
        <span
          className={classes}
          onClick={self.props.onClick}
          key={self.props.id}
          id={self.props.id}
        >
          {this.props.children}
        </span>
      );
    },

    render: function () {
      var self = this;
      return self.renderChildren();
    }
});
