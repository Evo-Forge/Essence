'use strict';

var React = require('react/addons'),
    PubSub = require('../mixins/PubSub'),
    Utils = require('../utils'),
    classSet = React.addons.classSet;

module.exports = React.createClass({
    displayName: 'CardItem',

    mixins: [PubSub],

    getInitialState: function() {
      return {
        style: {},
        classes: {
          'card': true
        }
      };
    },

    renderHeader: function () {
      if (this.props.header) {
        var self = this,
          title = (self.props.headerTitle) ?
              self.props.headerTitle : '',
          subhead = (self.props.headerSubhead) ?
              self.props.headerSubhead : '',
          imageSrc = (self.props.headerImage) ?
              self.props.headerImage : self.props.leftImage ?
              self.props.leftImage : '',
          imageAlt = (self.props.headerImageAlt) ?
              self.props.headerImageAlt : '';

        return (
          <div className={"card-header clearfix"}>
            <div className={"card-header-image"}>
              <img src={imageSrc} alt={imageAlt} />
            </div>

            <div className={"card-header-text"}>
              <h2 className={"e-title"}>{title}</h2>
              <h3 className={"e-subhead"}>{subhead}</h3>
            </div>
          </div>
        );
      }

      return null;
    },

    renderImage: function () {
      var self = this,
          headline = '',
          imageSrc = (self.props.image) ? self.props.image : '',
          imageAlt = (self.props.imageAlt) ? self.props.imageAlt : '',
          imagesGallery = [],
          imageGallery = '';

      if (self.props.imageGallery) {
        self.props.imageGallery.map(function (image, index) {
          var img = (<img key={index} src={image.src} alt={image.alt} />);
          imagesGallery.push(img);
        });

        imageGallery = (
          <div className={"card-gallery"}>
            {imagesGallery}
          </div>
        );
      }

      if (self.props.headline && !self.props.imageGallery) {
        headline = (
          <h2 className={"e-headline"}>
            {self.props.headline}
          </h2>
        );
      }

      return (
        <div className={"card-main-image"}>
          <img src={imageSrc} alt={imageAlt} />
          {headline}
          {imageGallery}
        </div>
      );

    },

    renderText: function () {
      var self = this;
      if (self.props.text) {
        return (
          <div className={"card-supporting-text"}>
            <h4>{self.props.text}</h4>
          </div>
        );
      }

      return null;
    },

    renderAction: function () {
      var self = this,
          childrens = React.Children.count(self.props.children),
          children = [];

      if (!self.props.action && childrens > 0) {
        if (childrens === 1) {
          children.push(self.props.children);
        } else {
          self.props.children.map(function (item) {
            children.push(item);
          });
        }

        return (
          <div className={"card-suplimentary-actions clearfix"}>
            <div className="e-left">
              {children[0]}
            </div>
            <div className="e-right">
              {children[1]}
            </div>
          </div>
        );

      } else if (self.props.action || childrens > 0) {
        if (childrens === 1) {
          children.push(self.props.children);
        } else {
          self.props.children.map(function (item) {
            children.push(item);
          });
        }

        return (
          <div>
            {children}
          </div>
        );
      }

      return null;
    },

    renderCard: function () {
      var self = this,
          classes = classSet(Utils.classNames(self.state.classes, self.props.classes));

      if (!self.props.text && !self.props.header) {
        return (
          <div className={classes}>
            {this.props.children}
          </div>
        );
      }

      return (
        <div className={classes}>
          {self.renderHeader()}
          {self.renderImage()}
          {self.renderText()}
          {self.renderAction()}
        </div>
      );
    },

    render: function () {
      var self = this;
      return self.renderCard();
    }
});
