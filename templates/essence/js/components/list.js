import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Icon from 'essence-icon';
import Image from 'essence-image';
import Switch from 'essence-switch';
import { List, ListItem } from 'essence-list';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppList extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>LISTS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Lists are best suited to presenting a homogeneous data type or sets of data types, such as images and text. Take a look at the examples below and pick one - and keep it consistent as much as possible.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block classes={'e-row e-padding-bottom-25'}>
		        				<Block className={'brick brick-4'}>
		        					<Text type={'p'} className={'e-text-indigo-400'}>List - Single Line</Text>
									<List type={'navigation'}>
										<ListItem>
											<Text type={'a'}>
												<Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
												<Block classes={'content e-left'}>List Controls</Block>	
												<Switch type={'checkbox'} classes={'e-right'} name='radioButton'/>
											</Text>
										</ListItem>
										<ListItem>
											<Text type={'a'}>
												<Switch type={'switches'} classes={'e-left'} name='switch'/>
												<Block classes={'content e-left'}>List Controls</Block>
												<Switch type={'switches'} classes={'e-right'} name='switch'/>
											</Text>
										</ListItem>
										<ListItem>
											<Text type={'a'}>
												<Icon name={'action-stars'} classes={'e-left'} />
												<Block classes={'content e-left'}>Mutant Ninja</Block>								
												<Image src={'http://i.imgur.com/a7okZb.jpg'} alt={'Star Wars'} classes={'e-avatar e-right'} />
											</Text>
										</ListItem>
									</List>
								</Block>
								<Block className={'brick brick-4'}>
		        					<Text type={'p'} className={'e-text-indigo-400'}>List - Two Lines</Text>
									<List type={'navigation'} classes={'e-twolinelist'}>
										<ListItem>
											<Text type={'a'}>
												<Image src={'http://i.imgur.com/Ix585.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
												<Block classes={'content e-left'}>
													<Text classes={'primary'}>Johnny Bravo</Text>
													<Text classes={'secondary'}>Jan 9, 2016</Text>
												</Block>	
												<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
											</Text>
										</ListItem>
										<ListItem>
											<Text type={'a'}>
												<Image src={'http://i.imgur.com/xrDnt12.png'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
												<Block classes={'content e-left'}>
													<Text classes={'primary'}>Uncle Bear</Text>
													<Text classes={'secondary'}>Jan 10, 2016</Text>
												</Block>	
												<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
											</Text>
										</ListItem>
										<ListItem>
											<Text type={'a'}>
												<Image src={'http://i.imgur.com/a7okZb.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
												<Block classes={'content e-left'}>
													<Text classes={'primary'}>Mutant Ninja</Text>
													<Text classes={'secondary'}>Jan 11, 2016</Text>
												</Block>	
												<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
											</Text>
										</ListItem>
									</List>
								</Block>
								<Block className={'brick brick-4'}>
		        					<Text type={'p'} className={'e-text-indigo-400'}>List - Three Lines</Text>
									<List type={'navigation'} classes={'e-threelinelist'}>
										<ListItem>
											<Text type={'a'}>
												<Image src={'http://i.imgur.com/Ix585.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
												<Block classes={'content e-left'}>
													<Text classes={'primary'}>Johnny Bravo</Text>
													<Text classes={'secondary'}>Jan 9, 2016</Text>
													<Text classes={'tertiary'}>21:44</Text>
												</Block>	
												<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
											</Text>
										</ListItem>
										<ListItem>
											<Text type={'a'}>
												<Image src={'http://i.imgur.com/xrDnt12.png'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
												<Block classes={'content e-left'}>
													<Text classes={'primary'}>Uncle Bear</Text>
													<Text classes={'secondary'}>Jan 10, 2016</Text>
													<Text classes={'tertiary'}>08:21</Text>
												</Block>	
												<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
											</Text>
										</ListItem>
										<ListItem>
											<Text type={'a'}>
												<Image src={'http://i.imgur.com/a7okZb.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
												<Block classes={'content e-left'}>
													<Text classes={'primary'}>Mutant Ninja</Text>
													<Text classes={'secondary'}>Jan 11, 2016</Text>
													<Text classes={'tertiary'}>20:14</Text>
												</Block>	
												<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
											</Text>
										</ListItem>
									</List>
								</Block>
		        			</Block>
			        		<Divider />

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-list</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import &#123; List, ListItem &#125; from 'essence-list';
										<br />
										<br />
										/* <Text type={'strong'}>List with Single Line</Text> */
										<br />
										&lt;List type=&#123;'navigation'&#125;&gt;
										<br />
										&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Switch type=&#123;'checkbox'&#125; classes=&#123;'e-left'&#125; name='radioButton'/&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;List Controls&lt;/Block&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Switch type=&#123;'checkbox'&#125; classes=&#123;'e-right'&#125; name='radioButton'/&gt;
										<br />
										&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Switch type=&#123;'switches'&#125; classes=&#123;'e-left'&#125; name='switch'/&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;List Controls&lt;/Block&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Switch type=&#123;'switches'&#125; classes=&#123;'e-right'&#125; name='switch'/&gt;
										<br />
										&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-stars'&#125; classes=&#123;'e-left'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;Mutant Ninja&lt;/Block&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/a7okZb.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-right'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&lt;/ListItem&gt;
										<br />
										&lt;/List&gt;
										<br />
										<br />
										/* <Text type={'strong'}>List with Two Lines</Text> */
										<br />
										&lt;List type=&#123;'navigation'&#125; classes=&#123;'e-twolinelist'&#125;&gt;
										<br />
										&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/Ix585.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Johnny Bravo&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 9, 2016&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/xrDnt12.png'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Uncle Bear&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 10, 2016&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/a7okZb.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Mutant Ninja&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 11, 2016&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&lt;/ListItem&gt;
										<br />
										&lt;/List&gt;
										<br />
										<br />
										/* <Text type={'strong'}>List with Three Lines</Text> */
										<br />
										&lt;List type=&#123;'navigation'&#125; classes=&#123;'e-threelinelist'&#125;&gt;
										<br />
										&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/Ix585.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Johnny Bravo&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 9, 2016&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'tertiary'&#125;&gt;21:44&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/xrDnt12.png'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Uncle Bear&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 10, 2016&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'tertiary'&#125;&gt;08:21&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/a7okZb.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Mutant Ninja&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 11, 2016&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'tertiary'&#125;&gt;20:14&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&lt;/ListItem&gt;
										<br />
										&lt;/List&gt;
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

exports.AppList = AppList;