import React from 'react';
import ClassNames from 'classnames';
import './bottomsheet.less'; // require('!css!less!./bottomsheet.less');
 
class BottomSheet extends React.Component {
	
	constructor(props) {
        super(props);
        let overlayVisible = props.visible;
        this.state = {
            visible: overlayVisible,
        	classes: ClassNames(
                'e-bottom-sheet',
                { 'animate': overlayVisible },
                { 'transparent': !overlayVisible },
                props.className,
                props.classes
            ),
            styles: {
                overlay: {display: 'block', zIndex: '6'},
                container: {position: 'relative'}
            },
            onStart: props.onStart,
            onEnd: props.onEnd
        };

        if (props.visible && props.onEnd) {
            props.onEnd();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible,
            classes: ClassNames(
                'e-bottom-sheet',
                { 'animate': nextProps.visible },
                { 'transparent': !nextProps.visible },
                nextProps.className,
                nextProps.classes
            ),
            onStart: nextProps.onStart,
            onEnd: nextProps.onEnd
        });
        
        if (!nextProps.visible) {
            this.setState({
                classes: ClassNames(
                    'e-bottom-sheet',
                    {'transparent': true},
                    {'animate': false},
                    nextProps.className,
                    nextProps.classes
                )
            });
        }

        if (nextProps.visible && this.state.onStart) {
            this.state.onStart();
        }
    }

    toggle() {
        let toggleVisible = !this.state.visible;

        this.setState({
            visible: toggleVisible
        });

        if (!toggleVisible) {
            this.setState({
                classes: ClassNames(
                    'e-bottom-sheet',
                    {'transparent': true},
                    {'animate': false},
                    this.props.className,
                    this.props.classes
                )
            });

            if (this.props.visible && this.props.onEnd) {
                this.props.onEnd();
            }
        }
    }

    overlay() {
      if (this.state.visible) {
        return (
          <div
            style={this.state.styles.overlay}
            onClick={this.toggle.bind(this)}
            className={'e-modal-bg'}
          />
        );
      }
      return;
    }

	render() {
		return (
            <div style={this.state.styles.container}>
                <div {...this.props} className={this.state.classes}>
                    {this.props.children}
                </div>
                {this.overlay()}
            </div>
        );
	}
}

module.exports = BottomSheet;