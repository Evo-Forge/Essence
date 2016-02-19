import React from 'react';
import ClassNames from 'classnames';
import * as Utils from 'essence-core/src/utils/utils';
import Highlighter from 'essence-core/src/highlighter/highlighter.jsx';
 
class TabItem extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.classes,
                this.props.className,
                this.props.type,
                {
                    'e-tabs': true,
                    'e-background-cyan-500': true,
                    'e-text-grey-50': true
                }
            ),
            highlighter: {
                left: '1px',
                width: '0px',
                right: '1px',
                target: false,
                display: 'none',
                direction: 'to-right'
            },
            menu: [],
            content: [],
        };
    }

    componentDidMount () {
        // render first item + set highlighter css values
        this.renderFirstItem();
        this.renderItems();
    }

    componentWillUnmount() {
        // render highlighter css values on resize
        window.removeEventListener('resize', this.renderActiveItem);
    }

    setHighlighterProps(element) {
        let highlighter = this.state.highlighter;
        let parentId = this.props.id;

        if (element) {
            highlighter = {
                target: element,
                left: element.parentNode.getBoundingClientRect().left,
                right: (element.parentNode.offsetParent.getBoundingClientRect().width - (element.parentNode.getBoundingClientRect().left + element.getBoundingClientRect().width)),
                width: element.getBoundingClientRect().width,
                direction: 'to-right',
                display: 'block'
            };
        }

        highlighter.right = (highlighter.right < 0) ? 0 : highlighter.right;
        
        this.setState({
            highlighter: highlighter
        });
    }

    setActiveItem(data) {
        let tabList = document.querySelector('.e-tabs-list');
        let tabMenuItem = document.querySelector('#' + data.activeItem) || {};

        tabList.scrollLeft = tabMenuItem.getBoundingClientRect().left;

        let target = document.querySelector('#' + data.activeItem);

        // set highlighter CSS styles + publish event to Highlighter component
        this.setHighlighterProps(target);

        this.setState({
            activeItem: data.activeItem,
            highlighterId: this.props.type + '-' + this.props.id,
            highlighter: data.highlighter
        });
    }

    renderFirstItem() {
        let tabContainer = document.querySelector('.e-tabs-list');
        let items       = this.state.menu;
        let firstId     = items[0] !== undefined ? items[0].props.id : false;
        let parentId    = this.props.id || '';
        let target      = document.getElementById(parentId + '-' + firstId);

        if (!firstId) { return; }

        // set highlighter CSS styles + publish event to Highlighter component
        this.setHighlighterProps(target);

        this.setActiveItem({
            activeItem: parentId + '-' + firstId
        });

        // render highlighter css values on resize
        window.addEventListener('resize', this.renderActiveItem);
        tabContainer.addEventListener('scroll', this.renderScrollItem);
        tabContainer.addEventListener('touchMove', this.renderScrollItem);
    }

    renderScrollItem() {
        let activeElement = document.querySelector('.e-tabs-list li.active a');
        if (!activeElement.getAttribute('id')) { return; }

        this.setHighlighterProps(activeElement);
    }

    renderActiveItem() {
        let activeElement = document.querySelector('.e-tabs-list li.active a');
        if (!activeElement.getAttribute('id')) { return; }

        // set highlighter CSS styles + publish event to Highlighter component
        this.setHighlighterProps(activeElement);

        this.setActiveItem({
            activeItewm: activeElement.getAttribute('id')
        });
    }

    renderScrollable(position) {
        if ( Utils.Mobile.screenSize() <= 2 && position ) {
            if ( position === 'left' ) {
                return (
                    <a className={'e-tabs-scroller left'} href='#'>
                        <i className={'e-icon-navigation-chevron-left'} />
                    </a>
                );
            }

            if (position === 'right') {
                return (
                    <a className={'e-tabs-scroller right'} href='#'>
                        <i className={'navigation-chevron-right'} />
                    </a>
                );
            }
        }
        return;
    }

    renderItems() {
        let self = this;
        let menuItems = this.state.menu;
        let contentItems = this.state.content;

        React.Children.map(function (item, index) {
            let itemID = self.props.id + '-' + item.props.id;
            let itemActive = false;

            if (
                !this.state.activeItem &&
                (
                (index === 0 && item.props.type === 'list') ||
                (index === 1 && item.props.type === 'content')
                )
            ) {
                itemActive = true;
            } else if (itemID === this.state.activeItem) {
                itemActive = true;
            } else {
                itemActive = false;
            }

            item = (
                React.cloneElement(item, {
                    id: (!item.props.id) ? 'tab-item-' + index : item.props.id,
                    parentId: self.props.id,
                    parentType: self.props.type,
                    key: item.props.type +'-'+ itemID,
                    active: itemActive
                })
            );

            if (item.props.type === 'list') {
                menuItems.push(item);
            }

            if (item.props.type === 'content') {
                contentItems.push(item);
            }
        });

        if (menuItems.length > 0 || contentItems.length > 0) {
            this.setState({
                menu: menuItems,
                content: contentItems
            });
        }
    }

    renderMenu() {
        return (
            <nav className={this.state.classes}>
                <Highlighter 
                    left={this.state.highlighter.left}
                    right={this.state.highlighter.right}
                    width={this.state.highlighter.width} 
                    target={this.state.highlighter.target} 
                    display={this.state.highlighter.display}
                    direction={this.state.highlighter.direction}
                />
                <ul className={'e-tabs-list e-row'}>
                    {this.state.menu}
                </ul>
            </nav>
        );
    }

    renderContent() {
        return (
            <div className={'e-tabs-container e-background-white'}>
                {this.state.content}
            </div>
        );
    }
    
	render() {
		return (
            <div>
                {this.renderMenu()}
                {this.renderContent()}
            </div>
        );
	}
}

module.exports = TabItem;