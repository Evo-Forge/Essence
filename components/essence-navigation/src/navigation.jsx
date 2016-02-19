import React from 'react';
import ClassNames from 'classnames';
import './navigation.less'; // require('!css!less!./navigation.less');
 
class Navigation extends React.Component {
	constructor(props) {
        super(props);
        let navigationVisible = this.props.visible;
        this.state = {
            visible: navigationVisible,
        	classes: ClassNames(
                'e-nav-drawer',
                this.props.classes,
                this.props.className,
                {'e-navigation-open': navigationVisible}
            )
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible,
            classes: ClassNames(
                'e-nav-drawer',
                nextProps.classes,
                nextProps.className,
                {'e-navigation-open': nextProps.visible}
            )
        });
    }

    toggle() {
        let newVisibleState = !this.state.visible;

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

module.exports = Navigation;