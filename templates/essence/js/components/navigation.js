import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Navigation from 'essence-navigation';
import Image from 'essence-image';
import {List, ListItem} from 'essence-list';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

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

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>NAVIGATION</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Navigation Drawers help your users browse the site. Here's an example similar to the one we use. Add it to your aplication and customize the menus.
							</Text>
		        		</CardHeader>

		        		<CardContent>
		        			<Block className={'e-row'}>
				        		<Block className={'brick brick-4'}>
		        					<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
		        					<Divider classes={'thick short e-background-indigo-400'} />
			        				<Block>
										<Navigation style={{position:'relative', zIndex: '2'}}>
											<Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
												<Block type={'header'} className={'e-nav-header'} style={{lineHeight: '52px'}}>
													<Text type={'a'} href={'#home'}>
														<Image 
															width={'40px'} 
															height={'40px'} 
															style={{ verticalAlign: 'middle'}} 
															src={'http://essence.pearlhq.com/assets/img/essence_icon.png'} />
													</Text>
													<Text type={'h2'} classes={'e-text-indigo-400 e-right'} style={{width: '74%', lineHeight: '45px'}}>
														<Text>essence</Text>
													</Text>
												</Block>
												<List type={'navigation'} classes={'e-background-white'}>
													<ListItem key={'about'}>
														<Text type={'a'} href={'#about'}>
															<Block classes={'content e-left'}>
																<Text type={'small'}>About</Text>
															</Block>	
														</Text>
													</ListItem>
													<ListItem key={'get-started'}>
														<Text type={'a'} href={'#get-started'}>
															<Block classes={'content e-left'}>
																<Text type={'small'}>Get Started</Text>
															</Block>	
														</Text>
													</ListItem>
													<ListItem key={'contact'}>
														<Text type={'a'} href={'#contact'}>
															<Block classes={'content e-left'}>
																<Text type={'small'}>Contact</Text>
															</Block>	
														</Text>
													</ListItem>
												</List>
											</Block>
										</Navigation>
									</Block>
			        			</Block>
			        			<Block className={'brick brick-8'}>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thick short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-navigation</strong>
				        				</code>
			        				</pre>

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											import Navigation from 'essence-navigation';
											<br />
											<br />
											&lt;Navigation&gt;
											<br />
											&nbsp;&lt;Block classes=&#123;'e-navigation-wrapper'&#125; id=&#123;'navigationMenu'&#125;&gt;
											<br />
											&nbsp;&nbsp;&lt;Block type=&#123;'header'&#125; className=&#123;'e-nav-header'&#125; style=&#123;&#123;lineHeight: '52px'&#125;&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#home'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&lt;Image width=&#123;'40px'&#125; height=&#123;'40px'&#125; style=&#123;&#123;verticalAlign: 'middle'&#125;&#125; src=&#123;'http://essence.pearlhq.com/assets/img/essence_icon.png'&#125; /&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'h2'&#125; classes=&#123;'e-text-indigo-400 e-right'&#125; style=&#123;&#123;width: '74%', lineHeight: '45px'&#125;&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;essence&lt;/Text&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
											<br />
											&nbsp;&nbsp;&lt;/Block&gt;
											<br />
											&nbsp;&nbsp;&lt;List type=&#123;'navigation'&#125; classes=&#123;'e-background-white'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;ListItem key=&#123;'about'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#about'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'small'&#125;&gt;About&lt;/Text&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;ListItem key=&#123;'get-started'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#get-started'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Get Started&lt;/Text&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;ListItem key=&#123;'contact'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#contact'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Contact&lt;/Text&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
											<br />
											&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
											<br />
											&nbsp;&nbsp;&lt;/List&gt;
											<br />
											&nbsp;&lt;/Block&gt;
											<br />
											&lt;/Navigation&gt;
				        				</code>
			        				</pre>
			        			</Block>
			        		</Block>
		        		</CardContent>
					</Card>
				</Block>
			</Block>
		);
    }
}

exports.AppNavigation = AppNavigation;