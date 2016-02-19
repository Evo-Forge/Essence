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
                }
            ),
            menuClasses: ClassNames(
                {
                    'e-fab-menu': this.props.type === 'fab',
                    'e-nav-menu': this.props.type === 'fab' ? false : true,
                    'cover': this.props.type === 'cover',
                    'fixed': this.props.type === 'fab',
                    'active': false
                },
                this.props.classes,
                this.props.className
            ),
            placeholder: this.props.placeholder
        };
    }

    componentDidMount () {
        let self = this;
        document.addEventListener('click', function(event){
            if (self.currentMenu && !self.currentMenu.contains(event.target) && !self.state.isHidden){
                self.toggleMenu();
            }
        });

        document.addEventListener('touchend', function(event){
            if (self.currentMenu && !self.currentMenu.contains(event.target) && !self.state.isHidden){
                self.toggleMenu();
            }
        });
    }

    componentWillUnmount () {
        document.removeEventListener('click', function(event){
            if ( event && event.hasOwnProperty('props') && event.props.callback) {
                return event.props.callback();
            }
        });
        document.removeEventListener('touchend', function(event){
            if ( event && event.hasOwnProperty('props') && event.props.callback) {
                return event.props.callback();
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isHidden: true,
            isActive: false,
            classes: ClassNames(
                {
                    'hide': true,
                    'e-nav': true,
                    'e-paper': true,
                    'e-shadow-1': true,
                    'right': nextProps.right,
                    'fab-list': nextProps.type === 'fab'
                }
            ),
            menuClasses: ClassNames(
                {
                    'e-fab-menu': nextProps.type === 'fab',
                    'e-nav-menu': nextProps.type === 'fab' ? false : true,
                    'cover': nextProps.type === 'cover',
                    'fixed': nextProps.type === 'fab',
                    'active': false
                },
                nextProps.classes,
                nextProps.className
            ),
            placeholder: nextProps.placeholder
        });     
    }

    toggleMenu(child) {
        let menuItemText = this.menuItem;

        if ( child && child.hasOwnProperty('props') && child.props.placeholder) {
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
                }
            ),
            menuClasses: ClassNames(
                {
                    'e-fab-menu': this.props.type === 'fab',
                    'e-nav-menu': this.props.type === 'fab' ? false : true,
                    'cover': this.props.type === 'cover',
                    'fixed': this.props.type === 'fab',
                    'active': !this.state.isActive
                },
                this.props.classes,
                this.props.className
            )
        });

        if ( child && child.hasOwnProperty('props') && child.props.callback) {
            return child.props.callback();
        }
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

        // no icon or placeholder generate default menu
        if (!this.props.icon && !this.props.placeholder) {
            return (
                <span onClick={this.toggleMenu.bind(this)}>
                    <span ref={(ref) => this.selectedMenu = ref}>Menu</span>
                    <i className={'e-icon-navigation-arrow-drop-down'} />
                </span>
            );
        }

        if (this.props.placeholder) {
            return (
                <span onClick={this.toggleMenu.bind(this)}>
                    <span ref={(ref) => this.selectedMenu = ref}>{this.props.placeholder}</span>
                    <i className={'e-icon-navigation-arrow-drop-down'} />
                </span>
            );
        }
    }

    renderChildren() {
        let self = this;
        return React.Children.map(self.props.children, function (child, key) {
            var menuChild = (
                React.cloneElement(child, {
                    onClick: self.toggleMenu.bind(self, child),
                    onTouch: self.toggleMenu.bind(self, child),
                    ref: ((ref) => self.menuItemChild = ref)
                })
            );
            return (
                <li 
                    {...self.props}
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

module.exports = Menu;