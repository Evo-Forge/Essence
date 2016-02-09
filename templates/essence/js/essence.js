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
import {
	Components, 
	AppColors, 
	AppIcons,
	AppBarComponent,
	AppBottomSheet,
	AppButton,
	AppCard,
	AppChip,
	AppCore,
} from './components/';

class AppHome extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return (
        	<Block>
				<Block classes={'e-padding-top-100 e-padding-bottom-100'}>
					<Block classes={'clearfix e-margin-bottom-15'}>
						<Block classes={'brick brick-12 e-text-center'}>
							<Text type={'h5'} classes={'e-display-4 e-text-indigo-400'}>
								essence
							</Text>
							<Text type={'h5'} classes={'e-headline e-text-indigo-400 e-text-uppercase'}>
								The Essential Material Design Framework
							</Text>
						</Block>
					</Block>
				</Block>
				<Block classes={'e-footer e-text-indigo-400 e-padding-top-50 e-padding-bottom-15'}>
					<Text type={'p'} classes={'e-text-center e-title'}>
						<Text>Join us on </Text>
						<Text type={'a'} href={'https://twitter.com/Pearl_HQ'}>Twitter </Text> 
						<Text type={'a'} href={'https://facebook.com/pearlhq'}>Facebook </Text> 
						<Text type={'a'} href={'https://github.com/PearlVentures/Essence'}>GitHub </Text>
					</Text>
					<Text type={'p'} classes={'e-text-center'}>
						<Text>Copyright 2016</Text>
					</Text>
					<Text type={'p'} classes={'e-text-center'}>
						<Text type={'a'} href={'http://pearlhq.com'}>Pearl Ventures</Text><Text> - an Evozon Company</Text>
					</Text>

				</Block>
			</Block>
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

class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	search: 'close',
        	toast: false,
        	showSideBar: false,
        	content: <AppHome />,
			components: [
				'icons',
				'colors',
				'appbar',
				'bottomsheet',
				'button',
				'card',
				'chip',
				'core',
				'data-table',
				'dialog',
				'image',
				'input',
				'list',
				'menu',
				'navigation',
				'paper',
				'progress',
				'slider',
				'snackbar',
				'switch',
				'tab',
				'toast',
				'tooltip',
				'touchpad',
			],
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    componentDidMount() {
    	return this.loadComponent();
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
    	let componentHash = window.location.hash.replace('#', '');
    	let componentContent = '';
    	console.log('loadComponent', componentHash);

    	switch (componentHash) {
    		case 'icons':
    			componentContent = <AppIcons classes={'e-padding-top-15'} />;
    			break;
    		case 'colors':
    			componentContent = <AppColors classes={'e-padding-top-15'} />;
    			break;
    		case 'appbar':
    			componentContent = <AppBarComponent />;
    			break;
    		case 'bottomsheet':
    			componentContent = <AppBottomSheet />;
    			break;
    		case 'button':
    			componentContent = <AppButton />;
    			break;
    		case 'card':
    			componentContent = <AppCard />;
    			break;
    		case 'chip':
    			componentContent = <AppChip />;
    			break;
    		case 'core':
    			componentContent = <AppCore />;
    			break;
    		default:
    			componentContent = <AppHome />;
    			break;
    	}

    	if (this.state.components.indexOf(componentHash) > -1) {
			this.setState({
				content: componentContent
			});
    	}
    }

    renderContent() {
    	return this.state.content;
    }

    render() {
        return(
        	<div>
				<AppBar classes={'e-background-indigo-400'}>
					
					<Text className={'e-text-white'}>Essence - MD Framework</Text>
					

					{this.renderSideBarButton()}
					
					<Block className={'e-right'}>
						{this.renderToast()}
						<Button onClick={this.toggleToast.bind(this)} className={'flat e-background-indigo-400 e-text-white e-right'} type={'primary'} icon={'action-favorite'}/>
					</Block>
					
					
					<Block className={'e-right search-block'}>
						{this.renderSearch()}
						<Button onClick={this.toggleSearch.bind(this)} className={'flat e-background-indigo-400 e-text-white e-right'} type={'primary'} icon={'action-search'}/>
					</Block>
					
					
					{this.props.children}
				</AppBar>

				<AppNavigation visible={this.state.showSideBar} callback={this.loadComponent.bind(this)} />

				{this.renderContent()}
        	</div>
        );
    }
}

ReactDOM.render(
	<Block>
		<App />
	</Block>
	,
	document.querySelector('.app')
);