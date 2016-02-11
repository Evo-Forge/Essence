import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Tab from 'essence-tab';
import Paper from 'essence-paper';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppPaper extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>PAPERS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								In material design, every pixel drawn by an application resides on a sheet of paper. Paper has a flat background color and can be sized to serve a variety of purposes. A typical layout is composed of multiple sheets of paper. Here you have some examples in the most common shapes and states.
							</Text>
		        		</CardHeader>
					</Card>
					<Tab data={{
						'header': [{
								'context': (<Text>Paper</Text>)
							},{
								'context': (<Text>Paper Sharp</Text>)
							},{
								'context': (<Text>Paper Circle</Text>)
							}
						],
						'rows': [ 
							(
								<Block className={'e-row'}>
									<Block className={'brick brick-6'}>
				        				<Block className={ClassNames('e-padding-bottom-25')}>
					        				<Text type={'h4'} classes={'e-text-indigo-400'}>EXAMPLE:</Text>
					        				<Divider classes={'thick short e-background-indigo-400'} />

											<Block classes={'e-background-grey-100 e-padding-top-50 e-padding-bottom-50 e-text-center'}>
												<Paper className={'e-text-blue-400 e-background-white'}>
													<Text type={'small'}>Paper</Text>
												</Paper>
											</Block>
										</Block>
				        			</Block>

				        			<Block className={'brick brick-6'}>
				        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
				        				<Divider classes={'thick short e-background-indigo-400'} />

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												npm install <strong>essence-paper</strong>
					        				</code>
				        				</pre>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
											Create a new ReactJS file with the code bellow.
										</Text>

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
					        					import Paper from 'essence-paper';
												<br />
												<br />
												/* <Text type={'strong'}>Simple Paper</Text> */
												<br />
												&lt;Paper className=&#123;'e-text-blue-400 e-background-white'&#125;&gt;
												<br />
												&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Paper&lt;/Text&gt;
												<br />
												&lt;/Paper&gt;
					        				</code>
				        				</pre>
				        			</Block>
			        			</Block>
							),
							(
								<Block className={'e-row'}>
									<Block className={'brick brick-6'}>
				        				<Block className={ClassNames('e-padding-bottom-25')}>
					        				<Text type={'h4'} classes={'e-text-indigo-400'}>EXAMPLE:</Text>
					        				<Divider classes={'thick short e-background-indigo-400'} />

											<Block classes={'e-background-grey-100 e-padding-top-50 e-padding-bottom-50 e-text-center'}>
												<Paper type={'sharp'} className={'e-text-blue-400 e-background-white'}>
													<Text type={'small'}>Sharp</Text>
												</Paper>
											</Block>
										</Block>
				        			</Block>

				        			<Block className={'brick brick-6'}>
				        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
				        				<Divider classes={'thick short e-background-indigo-400'} />

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												npm install <strong>essence-paper</strong>
					        				</code>
				        				</pre>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
											Create a new ReactJS file with the code bellow.
										</Text>

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
					        					import Paper from 'essence-paper';
												<br />
												<br />
												/* <Text type={'strong'}>Paper Sharp</Text> */
												<br />
												&lt;Paper type=&#123;'sharp'&#125; className=&#123;'e-text-yellow-600 e-background-white'&#125;&gt;
												<br />
												&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Sharp&lt;/Text&gt;
												<br />
												&lt;/Paper&gt;
					        				</code>
				        				</pre>
				        			</Block>
			        			</Block>
							),
							(
								<Block className={'e-row'}>
									<Block className={'brick brick-6'}>
				        				<Block className={ClassNames('e-padding-bottom-25')}>
					        				<Text type={'h4'} classes={'e-text-indigo-400'}>EXAMPLE:</Text>
					        				<Divider classes={'thick short e-background-indigo-400'} />

											<Block classes={'e-background-grey-100 e-padding-top-50 e-padding-bottom-50 e-text-center'}>
												<Paper type={'circle'} className={'e-text-blue-400 e-background-white'}>
													<Text type={'small'}>Circle</Text>
												</Paper>
											</Block>
										</Block>
				        			</Block>

				        			<Block className={'brick brick-6'}>
				        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
				        				<Divider classes={'thick short e-background-indigo-400'} />

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												npm install <strong>essence-paper</strong>
					        				</code>
				        				</pre>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
											Create a new ReactJS file with the code bellow.
										</Text>

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
					        					import Paper from 'essence-paper';
												<br />
												<br />
												/* <Text type={'strong'}>Paper Circle</Text> */
												<br />
												&lt;Paper type=&#123;'circle'&#125; className=&#123;'e-text-red-400 e-background-white'&#125;&gt;
												<br />
												&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Circle&lt;/Text&gt;
												<br />
												&lt;/Paper&gt;
					        				</code>
				        				</pre>
				        			</Block>
			        			</Block>
							)
						]
					}}
					classes={'e-background-indigo-400 e-text-center e-text-grey-50'} />
				</Block>
			</Block>
		);
    }
}

exports.AppPaper = AppPaper;