import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import AppBar from '../../../components/essence-appbar/src/appbar.jsx';
import Button from 'essence-button';
import Icon from 'essence-icon';
import Image from 'essence-image';
import Input from 'essence-input';
import Menu from 'essence-menu';
import Navigation from '../../../components/essence-navigation/src/navigation.jsx';
import Toast from 'essence-toast';
import Tab from 'essence-tab';
import {Block, Text, Divider} from 'essence-core';
import {List, ListItem} from 'essence-list';

import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

// Components list
import Components from './components.js';
import Colors from './colors.js';
import Icons from './icons.js';

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

class AppColors extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	backgroundColor: '',
        	textColor: '',
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    changeBackgroundColor(key) {
    	this.setState({
    		backgroundColor: Colors[key].background
    	});
    }

    changeTextColor(key) {
    	this.setState({
    		textColor: Colors[key].text
    	});
    }

    renderBackgroundColors() {
    	let self = this;
		let colorsList = [];

    	Object.keys(Colors).forEach(function(key) { 
			var component = Colors[key];
			colorsList.push(
				(
					<Button 
						key={'color-'+key}
						onClick={self.changeBackgroundColor.bind(self, key)} 
						className={ClassNames('flat', component.background)} 
						icon={'image-colorize'}
						type={'primary'} />
				)
			); 
		});

		return colorsList;
    }

    renderTextColors() {
    	let self = this;
		let colorsList = [];

    	Object.keys(Colors).forEach(function(key) { 
			var component = Colors[key];
			colorsList.push(
				(
					<Button 
						key={'color-'+key}
						onClick={self.changeTextColor.bind(self, key)} 
						className={ClassNames('flat', component.background)} 
						icon={'image-colorize'}
						type={'primary'} />
				)
			); 
		});

		return colorsList;
    }

    renderColor() {
    	return (
    		<p className={ClassNames('e-padding-top-25 e-padding-bottom-25', this.state.backgroundColor)}>
				<span className={ClassNames(this.state.textColor)}>
					This is your text to test the colors for background & text.
				</span>
			</p>
    	);
    }

    render() {
        return (
			<Block classes={'e-row'}>
				<Block classes={'brick brick-6'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'}>Test the colors</Text>
		        			<Divider />
		        		</CardHeader>
		        		<CardContent classes={'e-text-center'}>
		        			{this.renderColor()}
			        		<Divider />
			        		<Block className={'e-padding-top-25 e-text-left'}>
			        			<Text type={'h5'}>
			        				Current Text color: <strong>{this.state.textColor || 'e-text-black'}</strong>
			        			</Text>
			        			<Text type={'h5'}>
			        				Current Background color: <strong>{this.state.backgroundColor || 'e-background-white'}</strong>
			        			</Text>
			        		</Block>
		        		</CardContent>
					</Card>
				</Block>
				<Block classes={'brick brick-6'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'}>Choose color</Text>
		        			<Divider />
		        		</CardHeader>
		        		<CardContent>
		        			<Tab 
								data={{
									'header': [{
											'context': (<Text>Text</Text>)
										},{
											'context': (<Text>Background</Text>)
										}
									],
									'rows': [ 
										(<Block classes={'colors'}>{this.renderTextColors()}</Block>),
										(<Block classes={'colors'}>{this.renderBackgroundColors()}</Block>)
									]
								}}
								classes={'e-background-cyan-500 e-text-grey-50'} />
		        		</CardContent>
					</Card>
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

    renderMenu() {
		let self = this;
		let renderComponents = [];

		Object.keys(Components).forEach(function(key) { 
			var component = Components[key];
			renderComponents.push(
				(
					<ListItem key={'component-'+key}>
						<Text type={'a'} href={'#component-'+key}>
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
					Adaugat la Favorite
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
    	console.log('toggleSideBar', this.state.showSideBar);
    	this.setState({
    		showSideBar: !this.state.showSideBar
    	});
    }

    loadComponent(component) {
    	console.log('load this component', Components[component]);
    	let iframeLink = Components[component].url;
    	
    	this.setState({
    		appcontent: Components[component]
    	});

    	// document.querySelector('.component iframe').src = iframeLink;

    	return component;
    }

    renderMenu() {
		let self = this;
		let renderComponents = [];

		Object.keys(Components).forEach(function(key) { 
			var component = Components[key];
			renderComponents.push(
				(
				<Text 
					key={'component-'+key} 
					classes={'e-text-black'} 
					callback={self.loadComponent.bind(self, key)}>
					{component.title}
				</Text>
				)
			); 
		});
		
		return renderComponents;
    }

    render() {
    	console.log('renderSideBar', this.state.showSideBar);
        return(
        	<div>
				<AppBar classes={'e-background-cyan-400'}>
					{/*
					<Text className={'e-text-white'}>Essence - MD Framework</Text>

					<Menu type={'cover'} icon={'navigation-menu'} classes={'e-left e-text-white e-background-cyan-400'}>
						{this.renderMenu()}
					</Menu>
					*/}
					<Button onClick={this.toggleSideBar.bind(this)} className={'flat e-background-cyan-400 e-text-white e-left'} type={'primary'} icon={'navigation-menu'}/>

					<Block className={'e-right'}>
						{this.renderToast()}
						<Button onClick={this.toggleToast.bind(this)} className={'flat e-background-cyan-400 e-text-white e-right'} type={'primary'} icon={'action-favorite'}/>
					</Block>
					
					<Block className={'e-right search-block'}>
						{this.renderSearch()}
						<Button onClick={this.toggleSearch.bind(this)} className={'flat e-background-cyan-400 e-text-white e-right'} type={'primary'} icon={'action-search'}/>
					</Block>
					
					{this.props.children}
				</AppBar>

				<AppNavigation visible={this.state.showSideBar} />
        	</div>
        );
    }
}

ReactDOM.render(
	<Block>
		<AppHeader />
		<AppColors />
	</Block>
	,
	document.querySelector('.app')
);