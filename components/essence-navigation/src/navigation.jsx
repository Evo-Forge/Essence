import React from 'react';
import ClassNames from 'classnames';
import './navigation.less'; // require('!css!less!./navigation.less');

class Navigation extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            onOpen: this.props.onOpen,
            onClose: this.props.onClose,
            visible: this.props.visible,
        	classes: ClassNames(
                'e-nav-drawer',
                this.props.classes,
                this.props.className,
                {'e-navigation-open': this.props.visible}
            ),
            dismissible: this.props.dismissible === undefined ? true : this.props.dismissible
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
                'e-nav-drawer',
                nextProps.classes,
                nextProps.className,
                {'e-navigation-open': nextProps.visible}
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

            this.setState({
                classes: ClassNames(
                    'e-nav-drawer',
                    this.props.classes,
                    this.props.className,
                    {'e-navigation-open': newVisibleState}
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
            className={'e-modal-bg'} />
        );
      }
      return;
    }

	render() {
		return (
            <div>
                <aside
                    {...this.props}
                    className={this.state.classes}
                >
                    <nav>{this.props.children}</nav>
                </aside>
                {this.overlay()}
            </div>
        );
	}
}

Navigation.defaultProps = {
    visible: false,
    onOpen: undefined,
    onClose: undefined,
    dismissible: undefined
};

module.exports = Navigation;