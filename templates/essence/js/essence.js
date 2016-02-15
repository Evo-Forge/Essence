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
	AppNavigation,
	AppPaper,
	AppProgress,
	AppSlider,
	AppSnackBar,
	AppSwitch,
	AppToast,
	AppTab,
	AppTouchPad,
	AppTooltip,
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
				<Block>
					<Block classes={'clearfix'}>
						<Block classes={'brick brick-12 e-text-center e-background-indigo-400 e-padding-top-100 e-padding-bottom-50 e-no-margin'} style={{width: '100%'}}>
							<Block>
								<Image className={'e-img-rsp'} src={'./assets/img/ess-logo.png'} alt={'Essence'} />
								<Text type={'h5'} classes={'e-display-4 e-text-white'}>
									essence
								</Text>
								<Text type={'h5'} classes={'e-headline e-text-white e-text-uppercase'}>
									The Essential Material Design Framework
								</Text>
								<Text type={'a'} href={'#get-started'} classes={'e-btn raised e-background-indigo-800'}>
									Get Started with Essence
								</Text>
								<Text type={'a'} href={'https://github.com/PearlVentures/Essence'} target={'_blank'} classes={'e-btn raised e-background-white e-text-indigo-800'}>
									Download from GitHub
								</Text>
								<Text type={'a'} href={'https://www.npmjs.com/~pearlventures'} target={'_blank'} classes={'e-btn raised e-background-teal-500 e-text-white'}>
									Install from NPM
								</Text>
							</Block>
						</Block>
						<Block classes={'brick brick-12 e-text-center'}>
							<Block>
								<Text type={'h3'} classes={'e-display-1 e-text-indigo-400 e-text-uppercase e-margin-bottom-100'}>
									Build it on one, use it on all!
								</Text>
								<Image className={'e-img-rsp'} src={'./assets/img/essence_responsive_banner.png'} alt={'Essence'} />
							</Block>

							<Block className={'e-row e-padding-top-15 e-padding-bottom-15'}>
								<Block classes={'brick brick-1'}>&nbsp;</Block>
								<Block classes={'brick brick-10'}>
									<Divider />
								</Block>
								<Block classes={'brick brick-1'}>&nbsp;</Block>
							</Block>

							<Block className={'e-row'}>
								<Text type={'h3'} classes={'e-display-1 e-text-indigo-400 e-text-uppercase e-margin-bottom-15'}>
									Distilled with
								</Text>
								<Block classes={'brick brick-5 e-text-center'}>
									<Image className={'e-img-rsp'} src={'./assets/img/less.png'} alt={'Less'} />
								</Block>
								<Block classes={'brick brick-2'}>
									&nbsp;
								</Block>
								<Block classes={'brick brick-5 e-text-center'}>
									<Image className={'e-img-rsp'} src={'./assets/img/react.png'} alt={'ReactJS'} />
								</Block>
							</Block>

							<Block className={'e-row'}>
								<Block classes={'brick brick-1'}>&nbsp;</Block>
								<Block classes={'brick brick-10'}>
									<Divider />
								</Block>
								<Block classes={'brick brick-1'}>&nbsp;</Block>
							</Block>

							<Block className={'e-row'}>
								<Block classes={'brick brick-6 e-text-center'}>
									<Image className={'e-img-rsp'} src={'./assets/img/focus.png'} alt={'Fully focused'} />
									<Text type={'p'} classes={'e-title line-height-12 e-text-indigo-400 e-text-uppercase'}>
										Fully focused
									</Text>
									<Divider classes={'thick medium e-background-indigo-400'} style={{left: '37%'}} />
									<Text type={'p'} classes={'e-subhead line-height-12 e-text-blue-grey-400'}>
										On intuitive & natural interaction
									</Text>
								</Block>
								<Block classes={'brick brick-6 e-text-center'}>
									<Image className={'e-img-rsp'} src={'./assets/img/document.png'} alt={'Fully documented'} />
									<Text type={'p'} classes={'e-title line-height-12 e-text-indigo-400 e-text-uppercase'}>
										Fully documented
									</Text>
									<Divider classes={'thick medium e-background-indigo-400'} style={{left: '37%'}} />
									<Text type={'p'} classes={'e-subhead line-height-12 e-text-blue-grey-400'}>
										And example-packed
									</Text>
								</Block>
							</Block>
						</Block>
						<Block classes={'brick brick-12 e-text-center e-text-indigo-100 e-background-indigo-400 e-padding-top-25 e-padding-bottom-25 e-no-margin'} style={{width: '100%'}}>
							<Text type={'p'} classes={'e-title e-text-indigo-100'}>
								<Text>Join us on </Text>
								<Text type={'a'} className={'e-text-white'} href={'https://twitter.com/Pearl_HQ'}>Twitter </Text> 
								<Text type={'a'} className={'e-text-white'} href={'https://facebook.com/pearlhq'}>Facebook </Text> 
								<Text type={'a'} className={'e-text-white'} href={'https://github.com/PearlVentures/Essence'}>GitHub </Text>
							</Text>
							<Text type={'small'} classes={'e-text-indigo-100'}>
								<Text type={'small'}>Copyright {(new Date().getFullYear())}</Text>
								<br />
								<Text type={'a'} className={'e-text-white'} href={'http://pearlhq.com'}>Pearl Ventures</Text>
								<Text> - an Evozon Company</Text>
							</Text>
						</Block>
					</Block>
				</Block>
			</Block>
		);
    }
}

class AppAbout extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400 e-text-uppercase'}>The Basics of Material Design</Text>
		        			<Divider classes={'thick medium e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								What is it and how it works?
							</Text>
		        		</CardHeader>

		        		<CardContent>
		        			<Block className={'e-row'}>
			        			<Block className={'brick-12'}>
			        				<Text type={'blockquote'} className={'e-text-indigo-400'} style={{marginLeft: '90px', marginTop: '30px'}}>
			        					<Text classes={'e-title e-text-blue-grey-400'}>
			        						Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.
			        					</Text>
			        					<Divider className={'thick short e-background-indigo-400 e-margin-top-25 e-margin-bottom-25'} />
			        					<Block type={'footer'} className={'e-title e-text-blue-grey-400'}>
			        						Master Yuan-Ma
			        						<Text type={'cite'} className={'e-subhead e-text-blue-grey-400'}>
			        							The Book of Programming
			        						</Text>
			        					</Block>
			        				</Text>
			        			</Block>
								
								<Divider className={'thinnest e-background-grey-300'} />
			        			
			        			<Block className={'brick-12'}>
						        	<Block classes={'e-padding-top-15 e-padding-bottom-15'}>
										<Text type={'h3'} classes={'e-text-indigo-400 e-text-uppercase'}>THE ESSENCE</Text>
										<Divider classes={'thick medium e-background-indigo-400'} />
									</Block>
								</Block>
			        			<Block className={'brick-12'}>
			        				<Block className={'e-row'}>
										<Block className={'brick brick-4'}>
											<Image src={'./assets/img/visual-1.png'} className={'e-img-rsp'} />
										</Block>
										<Block className={'brick brick-8 e-text-left e-padding-top-50'}>
											<Text type={'p'} classes={'e-headline line-height-15 e-text-uppercase e-text-indigo-400'}>
												GOOGLE DEFINED, CRAFTED WITH ESSENCE
											</Text>
											<Divider classes={'thick short e-background-indigo-400'} />
											<Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-400 e-padding-bottom-15'}>
												In the word of the mighty Google, material design is a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform.
											</Text>
											<Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-400 e-padding-bottom-15'}>
												And we're trying to make this even better with Essence
											</Text>
										</Block>
			        				</Block>
			        			</Block>
			        			<Block className={'brick-12'}>
			        				<Block className={'e-row'}>
										<Block className={'brick brick-4'}>
											<Image src={'./assets/img/visual-2.png'} className={'e-img-rsp'} />
										</Block>
										<Block className={'brick brick-8 e-text-left e-padding-top-50'}>
											<Text type={'p'} classes={'e-headline line-height-15 e-text-uppercase e-text-indigo-400'}>
												INHERENTLY NATURAL FEEL
											</Text>
											<Divider classes={'thick short e-background-indigo-400'} />
											<Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-400 e-padding-bottom-15'}>
												It’s not always natural what feels to be natural. We call natural interactions those that are total automatisms and require no extra thinking on our part. And for this to happen we need to have meaning, intuitiveness and intention. We use crisp and large typography, big imagery and perfect color balances to immerse the user in his experience.
											</Text>
											<Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-400 e-padding-bottom-15'}>
												All this combined provide a user interaction that “feels natural”.
											</Text>
										</Block>
			        				</Block>
			        			</Block>
			        			<Block className={'brick-12'}>
			        				<Block className={'e-row'}>
										<Block className={'brick brick-4'}>
											<Image src={'./assets/img/visual-3.png'} className={'e-img-rsp'} />
										</Block>
										<Block className={'brick brick-8 e-text-left e-padding-top-50'}>
											<Text type={'p'} classes={'e-headline line-height-15 e-text-uppercase e-text-indigo-400'}>
												MOVEMENT DEFINES FLOW
											</Text>
											<Divider classes={'thick short e-background-indigo-400'} />
											<Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-400 e-padding-bottom-15'}>
												No interface should start movement by itself. Motion is only within the grasp of the user and he holds the absolute authority of what happens and when. And when the motion starts, it transforms the whole design - but it all takes place in a single environment that gives the user a sense of familiarity, coherence and trust.
											</Text>
											<Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-400 e-padding-bottom-15'}>
												Movement has purpose and that purpose is to provide seamless interaction and continuity, down to its essence.
											</Text>
										</Block>
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

class AppContact extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            ),
            message: false,
            visibleOK: false,
            visibleFailed: false,
        };
    }

    sendMessage() {
    	let self = this;
    	let email = this.contactEmail;
    	let subject = this.contactSubject;
    	let message = this.contactMessage;

		$.post(
			'contact.php',
			{
				email: email.state.inputValue,
				subject: subject.state.inputValue,
				message: message.state.inputValue
			},
			function (result) {
				console.log('contact result', result);
				if (result.status === 200) {
					document.querySelector('[name=email]').value = '';
					document.querySelector('[name=subject]').value = '';
					document.querySelector('[name=message]').value = '';

					self.setState({
						message: 'Your message has been sent!',
						visibleOK: true,
						visibleFailed: false,
					});
				}

				if (result.status === 403) {
					self.setState({
						message: 'Your message has NOT been sent!',
						visibleOK: false,
						visibleFailed: true,
					});
				}
			}.bind(self),
			'json'
		);
    }

    render() {
        return (
        	<Block classes={'e-container e-padding-top-25'}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400 e-text-uppercase'}>GET IN TOUCH WITH US HERE</Text>
		        			<Divider classes={'thick medium e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Let us know what you think about Essence Project, write us any suggestion or idea that can help improve Essence.
							</Text>
		        		</CardHeader>

		        		<CardContent>
		        			<Block className={'e-row'}>
			        			<Block className={'brick-12'}>
						        	<Block className={'e-padding-bottom-15'}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>CONTACT:</Text>
										<Divider classes={'thick short e-background-indigo-400'} />
										
										<Toast classes={'e-text-green-500'} visible={this.state.visibleOK} delay={3000}>
											{this.state.message}
										</Toast>
										<Toast classes={'e-text-orange-500'} visible={this.state.visibleFailed} delay={8000}>
											{this.state.message}
										</Toast>

										<Block classes={'e-body1'}>
											<Block className={'e-padding-top-15'}>
												<Input type={'email'} ref={(ref) => this.contactEmail = ref} name={'email'} label={'Email address'} />
											</Block>
											<Block className={'e-padding-top-15'}>
												<Input type={'text'} ref={(ref) => this.contactSubject = ref} name={'subject'} label={'Message subject'} />
											</Block>
											<Block className={'e-padding-top-15'}>
												<Input type={'textarea'} ref={(ref) => this.contactMessage = ref} name={'message'} label={'Your message for us'} />
											</Block>
											<Button label={'SEND MESSAGE'} type={'succes'} className={'raised'} onClick={this.sendMessage.bind(this)} />
										</Block>
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

class AppNavigationMenu extends React.Component {
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

    renderEssenceMenu() {
		let self = this;
		let renderComponents = [];
    	let EssenceMenu = {
    		'home': {
    			title: 'Home'
    		},
    		'about': {
    			title: 'About'
    		},
    		'get-started': {
    			title: 'Getting started'
    		},
    		'contact': {
    			title: 'Contact'
    		}
    	};

		Object.keys(EssenceMenu).forEach(function(key) { 
			var component = EssenceMenu[key];
			renderComponents.push(
				(
					<li key={'component-'+key}>
						<Text type={'a'} href={'#'+key}>
							<Block classes={'content e-left'}>
								<Text type={'small'}>{component.title}</Text>
							</Block>	
						</Text>
					</li>
				)
			); 
		});
		
		return renderComponents;
    }
    renderComponentsMenu() {
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
					<Block type={'header'} className={'e-nav-header'} style={{lineHeight: '52px'}}>
						<Text type={'a'} href={'#home'}>
							<Image 
								width={'40px'} 
								height={'40px'} 
								style={{ verticalAlign: 'middle'}} 
								src={'http://essence.pearlhq.com./assets/img/essence_icon.png'} />
						</Text>
						<Text type={'h2'} classes={'e-text-indigo-400 e-right'} style={{width: '74%', lineHeight: '45px'}}>
							<Text>essence</Text>
						</Text>
					</Block>
					<List type={'navigation'} classes={'e-background-white'}>
						<ListItem key={'component-md'}>
							<Block classes={'group-list-title'}>
								<Image src={'./assets/img/material-design.png'} height={'24px'} alt={'Material Design'} />
								&nbsp;
								<Text type={'small'}>
									Material Design
								</Text>
							</Block>
							<List type={'navigation'}>
								{this.renderEssenceMenu()}
							</List>
						</ListItem>
						<ListItem key={'component-components'}>
							<Block classes={'group-list-title'}>
								<Image src={'./assets/img/components.png'} height={'24px'} alt={'Components'} />
								&nbsp;
								<Text type={'small'}>
									Components
								</Text>
							</Block>
							<List type={'navigation'}>
								{this.renderComponentsMenu()}
							</List>
						</ListItem>
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
				'home',
				'about',
				'get-started',
				'contact',
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

    showSideBar() {
    	this.setState({
    		showSideBar: true
    	});
    }

    hideSideBar() {
    	this.setState({
    		showSideBar: false
    	});
    }

    renderSideBarButton() {
    	if (Utils.Client.documentSize() > 2) {
    		return;
    	}

    	return (
    		<Button 
    			onClick={this.showSideBar.bind(this)} 
    			className={'flat e-background-indigo-400 e-text-white e-left'} 
    			icon={'navigation-menu'}
    			type={'primary'} />
    	);
    }

    loadComponent() {
    	let componentHash = window.location.hash.replace('#', '');
    	let componentContent = '';

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
    		case 'navigation':
    			componentContent = <AppNavigation />;
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
    		case 'tooltip':
    			componentContent = <AppTooltip />;
    			break;
    		case 'get-started':
    			componentContent = <AppGetStarted />;
    			break;
    		case 'contact':
    			componentContent = <AppContact />;
    			break;
    		case 'about':
    			componentContent = <AppAbout />;
    			break;
    		case 'home':
    		default:
    			componentContent = <AppHome />;
    			break;
    	}

    	if (this.state.components.indexOf(componentHash) > -1) {
			this.setState({
				content: componentContent
			});
			this.hideSideBar();
    	}
    }

    renderContent() {
    	return this.state.content;
    }

    render() {
        return(
        	<div>
				<AppBar classes={'e-background-indigo-400'} style={{overflow: 'inherit'}}>
					{this.renderSideBarButton()}
					<Text className={'e-text-white'}>Essence - MD Framework</Text>
					
					<Menu type={'cover'} icon={'navigation-more-vert'} classes={'e-text-white e-right'}>
						<Text className={'e-text-black'}>
							<Text type={'a'} href={'#about'}>
								About
							</Text>
						</Text>
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
							<Text type={'a'} href={'https://www.npmjs.com/~pearlventures'} target={'_blank'}>
								Install from NPM
							</Text>
						</Text>
						<Text className={'e-text-black'}>
							<Text type={'a'} href={'#contact'}>
								Contact
							</Text>
						</Text>
					</Menu>
					
					{this.props.children}
				</AppBar>

				<AppNavigationMenu 
					visible={this.state.showSideBar} 
					callback={this.loadComponent.bind(this)}/>

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