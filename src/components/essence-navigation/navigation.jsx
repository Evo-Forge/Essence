import React from 'react';
import ClassNames from 'classnames';
import './navigation.less';
 
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
                {'e-navigation-open': !navigationVisible}
            ),
        };
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

export default Navigation;