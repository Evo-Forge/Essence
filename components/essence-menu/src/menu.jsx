import React from 'react';
import ClassNames from 'classnames';
import './menu.less'; // require('!css!less!./menu.less');
 
class Menu extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            isActive: false,
        	classes: ClassNames(
                {
                    'hide': true,
                    'e-nav': true,
                    'e-paper': true,
                    'e-shadow-1': true,
                    'right': this.props.right,
                    'fab-list': this.props.type === 'fab'
                },
                this.props.classes,
                this.props.className
            ),
            menuClasses: ClassNames(
                {
                    'e-fab-menu': this.props.type === 'fab',
                    'e-nav-menu': this.props.type === 'fab' ? false : true,
                    'cover': this.props.type === 'cover',
                    'fixed': this.props.type === 'fab',
                    'active': false
                }
            ),
            placeholder: this.props.placeholder || 'Menu'
        };
    }

    componentDidMount () {
        let self = this;
        document.addEventListener("click", function(event){
            if (!self.currentMenu.contains(event.target) && !self.state.isHidden){
                self.toggleMenu();
            }
        });

        document.addEventListener("touchend", function(event){
            if (!self.currentMenu.contains(event.target) && !self.state.isHidden){
                self.toggleMenu();
            }
        });
    }

    componentWillUnmount () {
        document.removeEventListener("click");
        document.removeEventListener("touchend");
    }

    toggleMenu(child) {
        let menuItemText = this.menuItem;

        if (child.props !== undefined && child.props.placeholder) {
            this.setState({
                placeholder: child.props.placeholder
            });
        }

        this.setState({
            isHidden: !this.state.isHidden,
            isActive: !this.state.isActive,
            classes: ClassNames(
                {
                    'e-nav': this.props.type === 'fab' ? false : true,
                    'e-paper': this.props.type === 'fab' ? false : true,
                    'e-shadow-1': this.props.type === 'fab' ? false : true,
                    'right': this.props.right,
                    'hide': !this.state.isHidden,
                    'fab-list': this.props.type === 'fab'
                },
                this.props.classes,
                this.props.className
            ),
            menuClasses: ClassNames(
                {
                    'e-fab-menu': this.props.type === 'fab',
                    'e-nav-menu': this.props.type === 'fab' ? false : true,
                    'cover': this.props.type === 'cover',
                    'fixed': this.props.type === 'fab',
                    'active': !this.state.isActive
                }
            )
        });
    }

    renderPlaceHolder() {
        if (this.props.type === 'fab') {
            return (
                <span 
                    onClick={this.toggleMenu.bind(this)}
                    className={'e-btn-fab lines-button'}
                >
                    <span className={'lines'} />
                </span>
            );
        }

        return (
            <span onClick={this.toggleMenu.bind(this)}>
                <span ref={(ref) => this.selectedMenu = ref}>
                    {this.state.placeholder}
                </span>
                <i className={'e-icon-navigation-arrow-drop-down'} />
            </span>
        );
    }

    renderChildren() {
        let self = this;
        return React.Children.map(self.props.children, function (child, key) {
            var menuChild = (
                React.cloneElement(child, {
                    onClick: self.toggleMenu.bind(self, child),
                    ref: ((ref) => self.menuItemChild = ref)
                })
            );
            return (
                <li 
                    onClick={self.toggleMenu.bind(self)}
                    ref={(ref) => self.menuItem = ref}>
                    {menuChild}
                </li>
            );
        });
    }

    renderIcon() {
        if (this.props.icon) {
            return (
                <i 
                    className={'e-icon-' + this.props.icon} 
                    onClick={this.toggleMenu.bind(this)}
                />
            );
        }
        return;
    }

	render() {
		return (
            <nav 
                className={this.state.menuClasses} 
                ref={(ref) => this.currentMenu = ref}
            >
                {this.renderPlaceHolder()}
                {this.renderIcon()}
                <ul {...this.props} className={this.state.classes}>
                    {this.renderChildren()}
                </ul>
            </nav>
        );
	}
}

export default Menu;