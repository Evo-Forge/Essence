'use strict';

var React = require('react/addons'),
    classSet = React.addons.classSet,
    Mobile = require('../utils/Mobile'),
    PubSub = require('../utils/PubSub');

module.exports = React.createClass({
    displayName: 'SliderItem',

    mixins: [PubSub, Mobile],

    getInitialState: function() {
      return {
        isMobile: this.isMobile(),
        isMoving: false,
        isHidden: '',
        classes: {
          'e-slider': true,
          'discrete': (this.props.discrete ? true : false),
          'zero': (this.props.start < 1 ? true : false)
        },
        discrete: (this.props.start || 0),
        handleStyles: { left: this.props.start ? this.props.start+'%' : '0%' },
        fillStyles: { width: this.props.start ? this.props.start+'%' : '0%' },
        discreteStyles: {
          marginLeft: this.props.discrete ? this.props.start+'%' : '-7px',
          transform: false
        }
      };
    },

    renderMoveStart: function () {
      var self = this,
          discreteStyles = self.state.discreteStyles;

      discreteStyles.transform = 'scale(1)';

      self.setState({
        discreteStyles: discreteStyles,
        isMoving: true,
        isHidden: (self.props.discrete) ? '-hide' : ''
      });
    },

    renderMoveEnd: function () {
      var self = this,
          discreteStyles = self.state.discreteStyles;

      discreteStyles.transform = 'scale(0)';

      self.setState({
        discreteStyles: discreteStyles,
        isHidden: '',
        isMoving: false
      });
    },

    renderMove: function (event) {
      var self = this;
      self.renderDrag(event);
    },

    renderDrag: function (event) {
      var self = this,
          classes = self.state.classes,
          discreteStyles = self.state.discreteStyles,
          element = event.target,
          //width = element.parentNode.offsetParent.offsetWidth,
          width = event.currentTarget.offsetWidth,
          widthLeft = event.currentTarget.offsetLeft,
          clientX = (self.state.isMobile) ?
              event.changedTouches[0].clientX : event.clientX,
          horizontal = (((clientX - widthLeft) / width) * 100).toFixed(0),
          horizontalFill = horizontal;

      if (self.props.steps) {
        horizontal = horizontalFill = (Math.round((horizontal / 20)) * 20);
      }

      if (event.screenX !== 0) {
        self.setState({
          discrete: horizontal,

          handleStyles: {
            left: horizontal + "%"
          },

          fillStyles: {
            width: horizontalFill + "%"
          }
        });

        discreteStyles.marginLeft = horizontal + '%';
        classes.zero = ((horizontal < 1) ? true : false);
      }

      self.setState({
        discreteStyles: discreteStyles,
        classes: classes
      });

      event.preventDefault();
    },

    renderSteps: function () {
      var self = this,
          step = 0,
          steps = [],
          scrollFix = (
            <div
              className='e-step'
              style={{marginLeft: '99.8%'}}
              key={'step-99.8'}
            />
          );

      for (step; step <= 80; step += 20) {
        steps.push(
          <div
            className='e-step'
            style={{ marginLeft: step + '%' }}
            key={'step-' + step}
          />
        );
      }

      steps.push(scrollFix);

      if (self.props.steps) {
        return (
          <div className="e-steps">
            {steps}
          </div>
        );
      }

      return null;
    },

    renderDiscrete: function () {
      var self = this;

      if (self.props.discrete) {
        return (
          <div
            className="e-discrete-value"
            style={self.state.discreteStyles}
          >
            {self.state.discrete}
          </div>
        );
      }
      return null;
    },

    renderFill: function () {
      var self = this;

      if (self.props.fill && !self.props.disable) {
        return (
          <div
          className="e-fill"
          style={self.state.fillStyles}
          >
          </div>
        );
      }
      return null;
    },

    renderSlider: function () {
      var self = this,
          classes = self.state.classes,
          onMove = self.state.isMoving ? self.renderMove : null;

      if (self.props.disable) {
        classes['disabled'] = true;
      }

      classes = classSet(classes);

      return (
        <div
            className={classes}
            onMouseDown={self.renderMoveStart}
            onMouseUp={self.renderMoveEnd}
            onMouseMove={onMove}
            onTouchStart={self.renderMoveStart}
            onTouchEnd={self.renderMoveEnd}
            onTouchMove={onMove}
          >
          <div className="e-slider-track">
            <div
              className={"e-slider-handle" + self.state.isHidden}
              style={self.state.handleStyles}
              ref="sliderHandle"
            >
            </div>
          </div>
          {self.renderFill()}
          {self.renderDiscrete()}
          {self.renderSteps()}
        </div>
      );
    },

    render: function () {
      var self = this;

      return self.renderSlider();
    }
});
