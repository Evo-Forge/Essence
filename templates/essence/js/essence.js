import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import AppBar from 'essence-appbar';
import Button from 'essence-button';
import Icon from 'essence-icon';
import Image from 'essence-image';
import Input from 'essence-input';
import Menu from 'essence-menu';
import Navigation from 'essence-navigation';
import Toast from 'essence-toast';
import Tab from 'essence-tab';
import {Block, Text, Divider, Utils} from 'essence-core';
import {List, ListItem} from 'essence-list';

import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

// Components list
import Components from './components/items.js';
import {AppColors} from './components/colors.js';
import {AppIcons} from './components/icons.js';

class AppContent extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    renderHeader() {
    	if (this.props.data && this.props.data.title) {
	    	return (
	    		<CardHeader>
			        <Text type={'h3'}>
			        	{this.props.data.title}
			        </Text>
			    </CardHeader>
	    	);
    	}
    	return;
    }

    renderContent() {
    	if (this.props.data && this.props.data.description) {
	    	return (
	    		<CardContent classes={'e-background-light-blue-300 e-text-white'}>
			        <Text type={'h5'}>
			        	Description
			        </Text>
			        <Text type={'small'}>
			        	{this.props.data.description}
			        </Text>
			    </CardContent>
	    	);
    	}
    	return;
    }

    renderFooter() {
    	if (this.props.data && this.props.data.footer) {
	    	return (
	    		<CardFooter>
			        {this.props.data.footer}
			    </CardFooter>
	    	);
    	}
    	return;
    }

    render() {
        return (
        	<Card>
			    {this.renderHeader()}
			    {this.renderContent()}
			    {this.renderFooter()}
			</Card>
		);
    }
}

class AppNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    componentDidMount() {
    	let componentHash = window.location.hash;
    	window.onhashchange = this.props.callback.bind(this);
    }

    renderMenu() {
		let self = this;
		let renderComponents = [];

		Object.keys(Components).forEach(function(key) { 
			var component = Components[key];
			renderComponents.push(
				(
					<ListItem key={'component-'+key}>
						<Text type={'a'} href={'#'+key}>
							<Block classes={'content e-left'}>
								<Text type={'small'}>{component.title}</Text>
							</Block>	
						</Text>
					</ListItem>
				)
			); 
		});
		
		return renderComponents;
    }

    render() {
        return (
			<Navigation visible={this.props.visible}>
				<Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
					<Block type={'header'} classes={'e-nav-header'}>
						<Text 
							type={'h2'} 
							className={'e-text-indigo-400 e-text-center'}>
							<Image className={'e-center'} width={'40px'} height={'40px'} src={'http://essence.pearlhq.com/assets/img/essence_icon.png'} />
						</Text>
					</Block>
					<List type={'navigation'} classes={'e-background-white'}>
						{this.renderMenu()}
					</List>
				</Block>
			</Navigation>
        );
    }
}

class AppHeader extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	search: 'close',
        	toast: false,
        	showSideBar: false,
        	appcontent: {},
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    renderSearch() {
    	let classes = ClassNames('e-no-margin e-text-white e-left', this.state.search);
    	return (
			<Input
				type={'search'}
				name='search-input'
				placeholder='Search...'
				classes={classes}/>
		);
	}

    renderToast() {
    	if (this.state.toast) {
    		return (
    			<Toast classes={'e-text-green-500'} visible={true} delay={5000}>
					Added to Favorite
				</Toast>
			);
    	}

    	return;
    }

    toggleSearch() {
    	this.setState({
    		search: (this.state.search === 'close' ? 'open' : 'close')
    	});
    }

    toggleToast() {
    	var toastStatus = !this.state.toast;

    	this.setState({
    		toast: toastStatus
    	});
    }

    toggleSideBar() {
    	this.setState({
    		showSideBar: !this.state.showSideBar
    	});
    }

    renderSideBarButton() {
    	if (Utils.Client.documentSize() > 2) {
    		return;
    	}

    	return (
    		<Button 
    			onClick={this.toggleSideBar.bind(this)} 
    			className={'flat e-background-indigo-400 e-text-white e-left'} 
    			icon={'navigation-menu'}
    			type={'primary'} />
    	);
    }

    loadComponent() {
    	let componentHash = window.location.hash;
    	console.log('loadComponent', componentHash);
    }

    render() {
        return(
        	<div>
				<AppBar classes={'e-background-indigo-400'}>
					{/*
					<Text className={'e-text-white'}>Essence - MD Framework</Text>
					*/}

					{this.renderSideBarButton()}
					
					<Block className={'e-right'}>
						{this.renderToast()}
						<Button onClick={this.toggleToast.bind(this)} className={'flat e-background-indigo-400 e-text-white e-right'} type={'primary'} icon={'action-favorite'}/>
					</Block>
					
					{/*
					<Block className={'e-right search-block'}>
						{this.renderSearch()}
						<Button onClick={this.toggleSearch.bind(this)} className={'flat e-background-indigo-400 e-text-white e-right'} type={'primary'} icon={'action-search'}/>
					</Block>
					*/}
					
					{this.props.children}
				</AppBar>

				<AppNavigation visible={this.state.showSideBar} callback={this.loadComponent} />
        	</div>
        );
    }
}

ReactDOM.render(
	<Block>
		<AppHeader />
		<AppIcons />
		<AppColors />
	</Block>
	,
	document.querySelector('.app')
);