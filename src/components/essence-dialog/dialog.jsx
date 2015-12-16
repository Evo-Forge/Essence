import React from 'react';
import ClassNames from 'classnames';
import './dialog.less';
 
class Dialog extends React.Component {
	constructor(props) {
        super(props);
        let dialogVisible = this.props.visible;
        this.state = {
            visible: dialogVisible,
        	classes: ClassNames(
                this.props.classes,
                this.props.className,
                {'transparent': !dialogVisible},
                this.props.full ? 'e-dialog-full' : 'e-dialog'
            ),
        };
    }

    toggle() {
        let newVisibleState = !this.state.visible;

        this.setState({
            visible: newVisibleState
        });

        if (!newVisibleState) {
            this.setState({
                classes: ClassNames(
                    'transparent',
                    this.state.classes
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
            <div>
                <div 
                    {...this.props}
                    className={this.state.classes}
                >
                    {this.props.children}
                </div>
                {this.overlay()}
            </div>
        );
	}
}

export default Dialog;