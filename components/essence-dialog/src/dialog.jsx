import React from 'react';
import ClassNames from 'classnames';
import './dialog.less'; // require('!css!less!./dialog.less');
 
class Dialog extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            onOpen: this.props.onOpen,
            onClose: this.props.onClose,
            visible: this.props.visible,
            classes: ClassNames(
                this.props.classes,
                this.props.className,
                {'transparent': !this.props.visible},
                this.props.full ? 'e-dialog-full' : 'e-dialog'
            ),
            dismissible: this.props.dismissible === undefined ? true : this.props.dismissible,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.onOpen && this.state.visible === true) {
            return this.state.onOpen();
        }

        if (this.state.onClose && this.state.visible === false) {
            return this.state.onClose();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            onOpen: nextProps.onOpen,
            onClose: nextProps.onClose,
            visible: nextProps.visible,
            classes: ClassNames(
                nextProps.classes,
                nextProps.className,
                {'transparent': !nextProps.visible},
                nextProps.full ? 'e-dialog-full' : 'e-dialog'
            ),
            dismissible: nextProps.dismissible === undefined ? true : nextProps.dismissible
        });
    }

    toggle() {
        let newVisibleState = !this.state.visible;

        if (this.state.dismissible) {
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
    }

    overlay() {
      if (this.state.visible) {
        return (
          <div 
            onClick={this.toggle.bind(this)} 
            style={{display: 'block', zIndex: 6}} 
            className={'e-modal-bg'} />
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

Dialog.defaultProps = {
    visible: false,
    onOpen: undefined,
    onClose: undefined,
    dismissible: undefined
};

module.exports = Dialog;