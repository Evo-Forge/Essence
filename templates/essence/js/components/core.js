import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Tab from 'essence-tab';
import Btn from 'essence-button';
import {Block, Divider, Text} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppCore extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	textType: 'span',
			textPosition: 'e-text-center',
			textTypography: 'e-body1',
			active: {
				'type': null,
				'position': null,
				'typo': null
			},
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

	changeType(type) {
		let active = this.state.active;
		active.type = type;

		this.setState({
			textType: type || 'span',
			active: active
		});
	}

	changePosition(position) {
		let active = this.state.active;
		active.position = position;

		this.setState({
			textPosition: position || 'e-text-center',
			active: active
		});
	}

	changeTypography(typography) {
		let active = this.state.active;
		active.typo = typography;

		this.setState({
			textTypography: typography || 'e-body1',
			active: active
		});
	}

	renderType() {
		let self = this;
		let typeList = [];
		let types = [
			'a', 'p', 'label', 'strong', 'small', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'sup', 'sub', 'em'
		];


		[].forEach.call(types, function(type) {
			typeList.push(
				<Btn 
					label={type}
					type={ (type === self.state.active.type) ? 'succes' : 'info' }
					ripple={false}
					className={'flat'}
					key={'text-type-' + type}
					onClick={self.changeType.bind(self, type.toLowerCase())}/>
			);
		});

		return typeList;
	}

	renderPosition() {
		let self = this;
		let positionList = [];
		let positions = [
			'e-text-left', 'e-text-right', 'e-text-center', 'e-text-justify', 'e-text-uppercase', 'e-text-capitalize', 'e-text-lowercase'
		];

		[].forEach.call(positions, function(position) {
			positionList.push(
				<Btn 
					label={position}
					type={ (position === self.state.active.position) ? 'succes' : 'info'}
					ripple={false}
					className={'flat'}
					key={'text-position-' + position.toLowerCase()}
					onClick={self.changePosition.bind(self, position.toLowerCase())}/>
			);
		});

		return positionList;
	}

	renderTypography() {
		let self = this;
		let typographList = [];
		let typographs = [
			'e-display-4', 'e-display-3', 'e-display-2', 'e-display-1', 'e-headline', 'e-title', 'e-subhead', 'e-body2', 'e-body1', 'e-caption', 'e-button'
		];

		[].forEach.call(typographs, function(typograph) {
			typographList.push(
				<Btn 
					label={typograph}
					type={ (typograph === self.state.active.typo) ? 'succes' : 'info'}
					ripple={false}
					className={'flat'}
					key={'text-typograph-' + typograph.toLowerCase()}
					onClick={self.changeTypography.bind(self, typograph.toLowerCase())}/>
			);
		});

		return typographList;
	}

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>ESSENCE CORE COMPONENTS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								There are several components that are included in the Essence Core package.
								Please review them bellow to understand how to use them.
							</Text>
		        		</CardHeader>

		        		<CardContent>
		        			<Block>
		        				<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 1. GRID SYSTEM</Text>
								<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									When it comes to organizing content, grids come in handy. Take a look at the examples below to pick the best system for your content.
								</Text>
								
								<Block className={'e-row e-text-center e-body1 e-text-white e-padding-top-15'}>
									<Block classes={'brick brick-12 e-background-teal-500'}>
										brick-12
									</Block>
								</Block>

								<Block className={'e-row e-text-center e-body1 e-text-white e-padding-top-15'}>
									<Block classes={'brick brick-6 e-background-teal-500'}>
										brick-6
									</Block>
									<Block classes={'brick brick-6 e-background-teal-500'}>
										brick-6
									</Block>
								</Block>

								<Block className={'e-row e-text-center e-body1 e-text-white e-padding-top-15'}>
									<Block classes={'brick brick-4 e-background-teal-500'}>
										brick-4
									</Block>
									<Block classes={'brick brick-4 e-background-teal-500'}>
										brick-4
									</Block>
									<Block classes={'brick brick-4 e-background-teal-500'}>
										brick-4
									</Block>
								</Block>
								
								<Block className={'e-row e-text-center e-body1 e-text-white e-padding-top-15 e-padding-bottom-15'}>
									<Block classes={'brick brick-3 e-background-teal-500'}>
										brick-3
									</Block>
									<Block classes={'brick brick-3 e-background-teal-500'}>
										brick-3
									</Block>
									<Block classes={'brick brick-3 e-background-teal-500'}>
										brick-3
									</Block>
									<Block classes={'brick brick-3 e-background-teal-500'}>
										brick-3
									</Block>
								</Block>

		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-core</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

								<pre className={'e-background-grey-100 e-text-black'}>
				    				<code>
										import &#123;Block&#125; from 'essence-core';
										<br />
										<br />
										&lt;Block classes=&#123;'brick brick-12'&#125;&gt;brick-12&lt;/Block&gt;
										<br />
										<br />
										&lt;Block classes=&#123;'brick brick-6'&#125;&gt;brick-6&lt;/Block&gt;
										<br />
										&lt;Block classes=&#123;'brick brick-6'&#125;&gt;brick-6&lt;/Block&gt;
										<br />
										<br />
										&lt;Block classes=&#123;'brick brick-4'&#125;&gt;brick-4&lt;/Block&gt;
										<br />
										&lt;Block classes=&#123;'brick brick-4'&#125;&gt;brick-4&lt;/Block&gt;
										<br />
										&lt;Block classes=&#123;'brick brick-4'&#125;&gt;brick-4&lt;/Block&gt;
										<br />
										<br />
										&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
										<br />
										&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
										<br />
										&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
										<br />
										&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
										<br />
										<br />
										... more bricks on the wall ...
				    				</code>
								</pre>
		        			</Block>
		        			<br />
		        			<br />

		        			<Block>
		        				<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 2. DIVIDER</Text>
								<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									According to our needs we created some dividers and stored them in a .less file called, you've guest it, dividers.
									
									We've created three values for width and five values for height. You can combine them as you please.
								</Text>

								<Block className={'e-padding-top-15 e-text-blue-grey-400'}>
									Thin short
									<Divider classes={'thin short e-background-indigo-400'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-blue-grey-400'}>
									Thin long
									<Divider classes={'thin long e-background-indigo-400'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-blue-grey-400'}>
									Thin
									<Divider classes={'thin e-background-indigo-400'} />
								</Block>
								
								<Block className={'e-padding-top-15 e-text-blue-grey-400'}>
									Thick short
									<Divider classes={'thick short e-background-indigo-400'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-blue-grey-400'}>
									Thick long
									<Divider classes={'thick long e-background-indigo-400'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-blue-grey-400'}>
									Thick
									<Divider classes={'thick e-background-indigo-400'} />
								</Block>
								
								<br />
								<br />

								<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-core</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

								<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import &#123;Divider&#125; from 'essence-core';
										<br />
										<br />
										&lt;Divider classes=&#123;'thick short e-background-indigo-400'&#125; /&gt;
										<br />
										&lt;Divider classes=&#123;'thick long e-background-indigo-400'&#125; /&gt;
										<br />
										&lt;Divider classes=&#123;'thick short e-background-indigo-400'&#125; /&gt;
										<br />
										&lt;Divider classes=&#123;'thin long e-background-indigo-400'&#125; /&gt;
										<br />
										&lt;Divider classes=&#123;'thick e-background-indigo-400'&#125; /&gt;
										<br />
										&lt;Divider classes=&#123;'thin e-background-indigo-400'&#125; /&gt;
										<br />
			        				</code>
		        				</pre>
		        			</Block>
							<br />
							<br />

							<Block>
								<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 3. RIPPLE INK</Text>
								<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									This component is design for Btn component to simulate a color ripple effect on the background element.
								</Text>

								<Block className={'e-padding-top-15 e-text-center'}>
									<Btn 
										label={'Ripple Effect'}
										ripple={true}
										type={'succes'}
										className={'raised'} />
								</Block>
								
								<br />
								<br />

								<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
								<Divider classes={'thick short e-background-indigo-400'} />

								<pre className={'e-background-grey-100 e-text-black'}>
				    				<code>
										npm install <strong>essence-core</strong>
				    				</code>
								</pre>

								<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Include the RippleInk component inside an element container where style position must be 'relative'.
									<br />
									<br />
									- The RippleInk will generate a div with style position absolute and the Ripple Effect with the background color calculated from the element.
									<br />
									- The Ripple Effect position is calculated based on the click event position inside the parent. 
								</Text>

								<pre className={'e-background-grey-100 e-text-black'}>
				    				<code>
										import &#123;Utils, RippleInk&#125; from 'essence-core';
										<br />
										<br />
										let boundingClient = this.currentButton.getBoundingClientRect();
										<br />
										let color = Utils.BackgroundColor(event);
										<br />
										let position = Utils.ClickPosition(event, boundingClient);
										<br />
										<br />
										&lt;RippleInk color=&#123;color&#125; position=&#123;position&#125;/&gt;
				    				</code>
								</pre>
							</Block>
							<br />
							<br />

							<Block>
								<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 4. TEXT TYPOGRAPHY</Text>
								<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Typography is such an important part of a catchy website, so you must use it carefully. You are just a few classes away of doing it! To do that, we are here helping you with predefined classes.
								</Text>

								<Block className={'e-row'}>
									<Block className={'brick brick-5'}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
										<Divider classes={'thick short e-background-indigo-400'} />
										<Block className={'e-padding-bottom-100'} />

										<Block className={'e-background-teal-500 e-text-center e-padding-top-15 e-padding-bottom-15 e-body1'}>
											<Block
												classes={'e-text-white'}>
												&lt;Text type=&#123;'{this.state.textType}'&#125; classes=&#123;'{ClassNames(this.state.textPosition, this.state.textTypography)}'&#125;&gt;
												<Text 
													target={'_blank'}
													type={this.state.textType}
													href={'http://essence.pearlhq.com'}
													classes={ClassNames('e-text-yellow-400', this.state.textPosition, this.state.textTypography)}>
													Text Typography Example
												</Text>
												&lt;/Text&gt;

											</Block>
										</Block>
									</Block>
									<Block className={'brick brick-7'}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
										<Divider classes={'thick short e-background-indigo-400'} />

										<pre className={'e-background-grey-100 e-text-black'}>
						    				<code>
												npm install <strong>essence-core</strong>
						    				</code>
										</pre>

										<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
											There are a list of available types that can be used as in the list bellow: 
											<br />
											<Text classes={'e-caption'}>
												- a, 
												p, 
												label, 
												strong, 
												small, 
												caption, 
												h1, 
												h2, 
												h3, 
												h4, 
												h5, 
												h6, 
												sup, 
												sub, 
												em
											</Text>
											<br />
											<br />
										</Text>

										<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
											For typography styling there are a list of available options:
											<br />
											<Text classes={'e-caption'}>
												- e-text-left, &nbsp;
												e-text-right, &nbsp;
												e-text-center, &nbsp;
												e-text-justify, &nbsp;
												e-text-uppercase, &nbsp;
												e-text-capitalize, &nbsp;
												e-text-lowercase
												<br />
												- e-display-4, &nbsp; 
												e-display-3, &nbsp; 
												e-display-2, &nbsp; 
												e-display-1, &nbsp; 
												e-headline, &nbsp; 
												e-title, &nbsp; 
												e-subhead, &nbsp; 
												e-body2, &nbsp; 
												e-body1, &nbsp; 
												e-caption, &nbsp; 
												e-button
											</Text>
										</Text>

										<pre className={'e-background-grey-100 e-text-black'}>
						    				<code>
												import &#123;Text&#125; from 'essence-core';
												<br />
												<br />
												&lt;Text type=&#123;a&#125; href=&#123;'http://essence.pearlhq.com'&#125; target=&#123;'_blank'&#125;&gt;
													Discover Essence
												&lt;Text/&gt;
												<br />
						    				</code>
										</pre>
									</Block>
								</Block>
								
								<Divider />
								
								<Block className={'e-padding-top-25 e-padding-bottom-25'}>

									<Text type={'h4'} classes={'e-text-indigo-400'}>CHOOSE TEXT STYLING:</Text>
									<Divider classes={'thick short e-background-indigo-400'} />

									<Tab data={{
										'header': [{
												'context': (<Text>Type</Text>)
											},{
												'context': (<Text>Position</Text>)
											},{
												'context': (<Text>Typography</Text>)
											}
										],
										'rows': [ 
											(
												<Block>{this.renderType()}</Block>
											),
											(
												<Block>{this.renderPosition()}</Block>
											),
											(
												<Block>{this.renderTypography()}</Block>
											)
										]
									}}
									classes={'e-background-indigo-400 e-text-grey-50'} />
								</Block>

							</Block>
							<br />
							<br />

							<Block>
								<Text type={'h4'} classes={'e-background-indigo-400 e-padding-top-15 e-padding-bottom-15 e-text-white'}>&nbsp; 5. UTILITIES</Text>
								<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Utilities are named 'Utils' and represent helpers for other components to maintain the desired functionality.
								</Text>

								<Divider />
								<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									- <strong>BackgroundColor</strong>: extracts the color property from an element, it is used on the RippleEffect for a Btn component
									<br />
									<br />
									- <strong>ClickPosition</strong>: calculate the position of a click based on the clicked element and the parent coordinates.
									<br />
									<br />
									- <strong>Client</strong> has 3 functions:
										<br />
									&nbsp;&nbsp; <u>isMobile</u> return true or false if the client uses a mobile browser, 
										<br />
									&nbsp;&nbsp; <u>screenSize</u>: return the screen width (1 = small, 2 = medium, 3 = large), 
										<br />
									&nbsp;&nbsp; <u>documentSize</u>: return the document size (1 = small, 2 = medium, 3 = large)
									<br />
									<br />
									- <strong>Timer</strong>: starts a timer instance. It is used on the SnackBar &amp; Toast component.
								</Text>
								<br />
								<br />
								
								<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
								<Divider classes={'thick short e-background-indigo-400'} />

								<pre className={'e-background-grey-100 e-text-black'}>
				    				<code>
										import &#123;Utils&#125; from 'essence-core';
										<br />
										<br />
										let boundingClient = this.refs.yourElement.getBoundingClientRect();
										<br />
										<br />
										let position = Utils.ClickPosition(event, boundingClient);
										<br />
										<br />
										let color = Utils.BackgroundColor(event);
										<br />
										<br />
										let isMobile = Utils.Client.isMobile();
										<br />
										<br />
										let screenSize = Utils.Client.screenSize();
										<br />
										<br />
										let documentSize = Utils.Client.documentSize();
										<br />
										<br />
										this.timer = new Utils.Timer(
										<br />
										&nbsp;&nbsp;function() &#123;
										<br />
										&nbsp;&nbsp;&nbsp;// your callback function
										<br />
										&nbsp;&nbsp;&#125;,
										<br />
										&nbsp;&nbsp;2000 // miliseconds
										<br />
										);
										<br />
										<br />
										pauseTimer() &#123;
										<br />
										&nbsp;if (this.timer) &#123;
										<br />
										&nbsp;&nbsp;this.timer.pause();
										<br />
										&nbsp;&#125;
										<br />
										&#125;
										<br />
										<br />
										resumeTimer() &#123;
										<br />
										&nbsp;if (this.timer) &#123;
										<br />
										&nbsp;&nbsp;this.timer.resume();
										<br />
										&nbsp;&#125;
										<br />
										&#125;
										<br />
				    				</code>
								</pre>

							</Block>
		        		</CardContent>
					</Card>
				</Block>
			</Block>
		);
    }
}

exports.AppCore = AppCore;