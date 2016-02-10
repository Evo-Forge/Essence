import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Progress from 'essence-progress';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppProgress extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>PROGRESS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Make loading content in your app as delightful and painless as possible by minimizing the amount of visual change a user sees before they can view and interact with content. Each operation should only be represented by one activity indicator—for example, one refresh operation should not display both a refresh bar and an activity circle. Below you’ll find six variations of activity indicators. Use them wisely.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
									<Block classes={'brick brick-2'}>
										<Progress type={'circle'} />
									</Block>
									<Block classes={'brick brick-2'}>
										<Progress type={'circle'} small={true} />
									</Block>
									<Block classes={'brick brick-2'}>
										<Progress type={'dots'} />
									</Block>
									<Block classes={'brick brick-2'}>
										<Progress type={'slider'} />
									</Block>
									<Block classes={'brick brick-2'}>
										<Progress type={'fix'} />
									</Block>
									<Block classes={'brick brick-2'}>
										<Progress type={'dynamic'} />
									</Block>
								</Block>
		        			</Block>

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-progress</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import Progress from 'essence-progress';
										<br />
										<br />
										&lt;Progress type=&#123;'circle'&#125; />
										<br />
										&lt;Progress type=&#123;'circle'&#125; small=&#123;true&gt; />
										<br />
										&lt;Progress type=&#123;'dots'&#125; />
										<br />
										&lt;Progress type=&#123;'slider'&#125; />
										<br />
										&lt;Progress type=&#123;'fix'&#125; />
										<br />
										&lt;Progress type=&#123;'dynamic'&#125; />
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

exports.AppProgress = AppProgress;