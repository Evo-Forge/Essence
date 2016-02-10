import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import Tab from 'essence-tab';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppCore extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	textType: 'span',
			textClass: 'e-text-center',
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    renderType() {
    	return ('renderType');
    }

	renderPosition() {
		return ('renderPosition');
	}

	renderTypography() {
		return ('renderTypography');
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
										... more brick on the wall ...
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

								<Block className={'e-padding-top-15 e-padding-bottom-25 e-text-center'}>
									<Block className={'e-text-center e-body1 e-background-teal-500 e-text-white e-padding-top-15 e-padding-bottom-15'}>
										<Text 
											type={this.state.textType}
											classes={ClassNames('e-text-white', this.state.textClass)}
											href={'http://essence.pearlhq.com'}
											target={'_blank'}>

											&lt;Text type=&#123;'{this.state.textType}'&#125; classes=&#123;'{this.state.textClass}'&#125;&gt;
											 Text Typography Example
											&lt;/Text&gt;

										</Text>
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
												<Block className={'e-text-center'}>
													{this.renderType()}
												</Block>
											),
											(
												<Block className={'e-text-center'}>
													{this.renderPosition()}
												</Block>
											),
											(
												<Block className={'e-text-center'}>
													{this.renderTypography()}
												</Block>
											)
										]
									}}
									classes={'e-background-indigo-400 e-text-grey-50'} />

								</Block>

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

		        		</CardContent>
					</Card>
				</Block>
			</Block>
		);
    }
}

exports.AppCore = AppCore;