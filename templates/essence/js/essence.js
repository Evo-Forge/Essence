import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Tab from 'essence-tab';
import Icon from 'essence-icon';
import Menu from 'essence-menu';
import Image from 'essence-image';
import Input from 'essence-input';
import Toast from 'essence-toast';
import AppBar from 'essence-appbar';
import Button from 'essence-button';
import Navigation from 'essence-navigation';
import {List, ListItem} from 'essence-list';
import {Block, Text, Divider, Utils} from 'essence-core';
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
	AppDialog,
	AppDataTable,
	AppImage,
	AppInput,
	AppList,
	AppMenu,
	AppPaper,
	AppProgress,
	AppSlider,
	AppSnackBar,
	AppSwitch,
	AppToast,
	AppTab,
	AppTouchPad,
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

class AppGetStarted extends React.Component {
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
        	<Block classes={'e-container e-padding-top-25'}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400 e-text-uppercase'}>Get Started with Essence</Text>
		        			<Divider classes={'thick medium e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Learn how to use Essence for your application
							</Text>
		        		</CardHeader>

		        		<CardContent>
		        			<Block className={'e-row'}>
			        			<Block className={'brick brick-6'}>
						        	<Block className={'e-padding-bottom-15'}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>INSTALL:</Text>
										<Divider classes={'thick short e-background-indigo-400'} />

										<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
											To install all Essence components you can use the command bellow.
										</Text>

										<pre classes={'e-background-grey-100 e-text-black'}>
											<code>
												npm install <strong>react-essence</strong>
											</code>
										</pre>
									</Block>
								</Block>
								<Block className={'brick brick-6'}>
									<Block className={'e-padding-bottom-15'}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>USE COMPONENTS:</Text>
										<Divider classes={'thick short e-background-indigo-400'} />
										
										<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
											To install individual components please see the side menu. Each component has a live example and a "How To Use" instructions.
										</Text>

										<pre classes={'e-background-grey-100 e-text-black'}>
											<code>
												npm install <strong>essence-__component-name__</strong>
											</code>
										</pre>
									</Block>
								</Block>
							</Block>

		        			<Block className={'e-row'}>
			        			<Block className={'brick brick-6'}>
									<Block className={'e-padding-bottom-15'}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO TEST/RUN:</Text>
										<Divider classes={'thick short e-background-indigo-400'} />
										
										<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
											There are 3 options: <br />
											1. <u>essence:test</u> runs a development instance with this template & is started from webpack-dev-server with content base from /templates/essence
											<br />
											2. <u>essence:live</u> runs a production instance with this template compiled with webpack & started with http-server on port 8080 and content base from /templates/essence
											<br />
											3. <u>essence:custom</u> runs a development instante of a boilerplate template & is started from webpack-dev-server with content base from /templates/boilerplate
										</Text>

										<pre classes={'e-background-grey-100 e-text-black'}>
											<code>
												npm run <strong>essence:custom</strong>
											</code>
										</pre>
									</Block>
								</Block>

								<Block className={'brick brick-6'}>
									<Block className={'e-padding-bottom-15'}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>MAKE A TEMPLATE:</Text>
										<Divider classes={'thick short e-background-indigo-400'} />
										
										<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
											1. create a copy of the boilerplate template
											<br />
											2. choose a unique name for the template
											<br />
											3. use the Essence components & copy/paste the component code from "How to use"
											<br />
											4. run the command bellow & replace the <u>your-template-name</u> with the name for the template
											<br />
										</Text>

										<pre classes={'e-background-grey-100 e-text-black'}>
											<code>
												npm run <strong>essence:your-template-name</strong>
											</code>
										</pre>
									</Block>
								</Block>
							</Block>
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

    componentDidMount() {
    	let componentHash = window.location.hash;
    	window.onhashchange = this.props.callback.bind(this);
    }

    renderMenu() {
		let self = this;
		let renderComponents = [];
    	let componentHash = window.location.hash.replace('#', '');

		Object.keys(Components).forEach(function(key) { 
			var component = Components[key];
			renderComponents.push(
				(
					<ListItem 
						key={'component-'+key} 
						className={componentHash === key ? 'e-background-grey-200' : ''}>
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
				'get-started',
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
    		case 'dialog':
    			componentContent = <AppDialog />;
    			break;
    		case 'data-table':
    			componentContent = <AppDataTable />;
    			break;
    		case 'image':
    			componentContent = <AppImage />;
    			break;
    		case 'input':
    			componentContent = <AppInput />;
    			break;
    		case 'list':
    			componentContent = <AppList />;
    			break;
    		case 'menu':
    			componentContent = <AppMenu />;
    			break;
    		case 'paper':
    			componentContent = <AppPaper />;
    			break;
    		case 'progress':
    			componentContent = <AppProgress />;
    			break;
    		case 'slider':
    			componentContent = <AppSlider />;
    			break;
    		case 'snackbar':
    			componentContent = <AppSnackBar />;
    			break;
    		case 'switch':
    			componentContent = <AppSwitch />;
    			break;
    		case 'toast':
    			componentContent = <AppToast />;
    			break;
    		case 'tab':
    			componentContent = <AppTab />;
    			break;
    		case 'touchpad':
    			componentContent = <AppTouchPad />;
    			break;
    		case 'get-started':
    			componentContent = <AppGetStarted />;
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
				<AppBar classes={'e-background-indigo-400'} style={{overflow: 'inherit'}}>
					<Text className={'e-text-white'}>Essence - MD Framework</Text>
					
					<Menu type={'cover'} icon={'navigation-more-vert'} classes={'e-text-white e-right'}>
						<Text className={'e-text-black'}>
							<Text type={'a'} href={'#get-started'}>
								Get Started with Essence
							</Text>
						</Text>
						<Text className={'e-text-black'}>
							<Text type={'a'} href={'https://github.com/PearlVentures/Essence'} target={'_blank'}>
								Download from GitHub
							</Text>
						</Text>
						<Text className={'e-text-black'}>
							<Text type={'a'} href={'https://www.npmjs.com/~blogtools'} target={'_blank'}>
								Install from NPM
							</Text>
						</Text>
					</Menu>
					
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