import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Switch from 'essence-switch';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppSwitch extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>SWITCHES</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Switches allow the user to select options. There are three kinds: checkboxes, radio buttons, and on/off switches. Here they are, in all their splendor.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Divider />

		        			<Block className={'e-row'}>
								<Block className={'brick brick-5'}>
									<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
									<Divider classes={'thick short e-background-indigo-400'} />
									<Block className={'e-padding-top-15'}>
										<Block className={'e-padding-bottom-25'}>
											<Text className={'e-text-indigo-400'}>Checkbox: </Text>
											<br />
											<Switch type={'checkbox'} text={'Default checkbox'} name={'switch-uncheckbox'} />
										</Block>
										<Block className={'e-padding-bottom-25'}>
											<Text className={'e-text-indigo-400'}>Radio: </Text>
											<br />
											<Switch type={'radio'} text={'1st option'} name={'switch-radio'} />
											<br />
											<Switch type={'radio'} text={'2nd option'} name={'switch-radio'} />
										</Block>
										<Block className={'e-padding-bottom-25'}>
											<Text className={'e-text-indigo-400'}>Switches: </Text>
											<br />
											<Switch type={'switches'} afterText={'ON'} beforeText={'OFF'} name={'switch-switches'} />
										</Block>
									</Block>
								</Block>
			        			
			        			<Block className={'brick brick-7'}>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thick short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-switch</strong>
				        				</code>
			        				</pre>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
										Create a new ReactJS file with the code bellow.
									</Text>

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											import Switch from 'essence-switch';
											<br />
											<br />
											&lt;Switch type=&#123;'checkbox'&#125; text=&#123;'Default checkbox'&#125; name=&#123;'switch-uncheckbox'&#125; /&gt;
											<br />
											&lt;Switch type=&#123;'radio'&#125; text=&#123;'1st option'&#125; name=&#123;'switch-radio'&#125; /&gt;
											<br />
											&lt;Switch type=&#123;'radio'&#125; text=&#123;'2nd option'&#125; name=&#123;'switch-radio'&#125; /&gt;
											<br />
											&lt;Switch type=&#123;'switches'&#125; afterText=&#123;'ON'&#125; beforeText=&#123;'OFF'&#125; name=&#123;'switch-switches'&#125; /&gt;
											<br />
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

exports.AppSwitch = AppSwitch;