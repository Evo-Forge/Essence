import React from 'react';
import ClassNames from 'classnames';
import './bottomsheet.less'; // require('!css!less!./bottomsheet.less');
 
class BottomSheet extends React.Component {
	
	constructor(props) {
        super(props);
        let overlayVisible = this.props.visible;
        this.state = {
            visible: overlayVisible,
        	classes: ClassNames(
                'e-bottom-sheet',
                { 'animate': overlayVisible },
                { 'transparent': !overlayVisible },
                this.props.className,
                this.props.classes
            )
        };
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
        }
    }

    overlay() {
      if (this.state.visible) {
        return (
          <div
            style={{display: 'block'}}
            onClick={this.toggle.bind(this)}
            className={'e-modal-bg'}
          />
        );
      }
      return;
    }

	render() {
		return (
            <div style={{'position': 'relative'}}>
                <div {...this.props} className={this.state.classes}>
                    {this.props.children}
                </div>
                {this.overlay()}
            </div>
        );
	}
}

export default BottomSheet;