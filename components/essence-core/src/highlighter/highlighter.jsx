import React from 'react';
import ClassNames from 'classnames';
import TransitionGroup from 'react-addons-css-transition-group';
import './highlighter.less'; // require("!css!less!./highlighter.less");

class Highlighter extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      highlighterStyle: {
        display: 'none',
        left: '0px',
        right: '0px'
      },
      direction: 'to-right'
    }
  }

  componentDidMount() {
    if (!this.props.target) return;

    let target = this.props.target;
    let targetLeft = target.element.parentNode.offsetLeft;
    let stateLeft = this.state.highlighterStyle.left;

    this.setState({
      direction: targetLeft <= stateLeft  ? 'to-left' : 'to-right',
      highlighterStyle: {
        display: this.props.display,
        left: this.props.left,
        right: this.props.right
      }
    });
  }

  renderHighlighter() {
    return (
      <div
        className={ClassNames('e-tabs-highlighter', this.state.direction)}
        style={this.state.highlighterStyle}>
      </div>
    );
  }

	render() {
		return this.renderHighlighter();
	}
}

module.exports = Highlighter;