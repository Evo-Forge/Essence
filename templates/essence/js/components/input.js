import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Input from 'essence-input';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppInput extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>TEXT FIELDS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Text fields allow the user to input text. They can be single line, with or without scrolling, or multi-line, and can have an icon. Touching a text field places the cursor and automatically displays the keyboard. Check out our examples and use the one that fits your scenario.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
		        					<Block className={'brick brick-4'}>
										<Input
											classes={'has-success'}
											type={'text'}
											name={'label'}
											placeholder={'Input + Placeholder and has-success'}/>
									</Block>
		        					<Block className={'brick brick-4'}>
										<Input
											classes={'has-success'}
											type={'text'}
											name={'label'}
											placeholder={'Input + Placeholder, has-success, Counter = 50'}
											counter={50}/>
									</Block>
		        					<Block className={'brick brick-4'}>
										<Input
											classes={'has-error'}
											type={'text'}
											name={'label'}
											placeholder={'Input + Placeholder, has-error, Counter = 20'}
											counter={20}/>
									</Block>
								</Block>
		        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
		        					<Block className={'brick brick-6'}>
										<Input
											type={'text'}
											name={'label'}
											placeholder={'Disabled input'}
											disabled={true}/>
										<Input
											type={'text'}
											name={'label'}
											label={'Input with label'}/>
									</Block>
									<Block className={'brick brick-6'}>
										<Input
											type={'email'}
											name={'label'}
											label={'Email input'}/>
										<Input
											type={'number'}
											name={'label'}
											placeholder={'Number input'}
											hint={'Number input'}/>
									</Block>
								</Block>
		        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
		        					<Block className={'brick brick-6'}>
										<Input
											type={'textarea'}
											name={'label'}
											rows={5}
											label={'Textarea + Label with 5 rows'}/>
									</Block>
									<Block className={'brick brick-6'}>
										<Input
											type={'textarea'}
											name={'label'}
											rows={3}
											placeholder={'Textarea + Placeholder with 3 rows'}/>
									</Block>
								</Block>
		        			</Block>

			        		<Divider />

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-input</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import Image from 'essence-input';
										<br />
										<br />
										&lt;Input classes=&#123;'has-success'&#125; type=&#123;'text'&#125; name=&#123;'label'&#125; placeholder=&#123;'Input + Placeholder and has-success'&#125;/&gt;
										<br />
										&lt;Input classes=&#123;'has-success'&#125; type=&#123;'text'&#125; name=&#123;'label'&#125; placeholder=&#123;'Input + Placeholder, has-success, Counter = 50'&#125; counter=&#123;50&#125;/&gt;
										<br />
										&lt;Input classes=&#123;'has-error'&#125; type=&#123;'text'&#125; name=&#123;'label'&#125; placeholder=&#123;'Input + Placeholder, has-error, Counter = 20'&#125; counter=&#123;20&#125;/&gt;
										<br />
										&lt;Input type=&#123;'text'&#125; name=&#123;'label'&#125; placeholder=&#123;'Disabled input'&#125; disabled=&#123;true&#125;/&gt;
										<br />
										&lt;Input type=&#123;'text'&#125; name=&#123;'label'&#125; label=&#123;'Input with label'&#125;/&gt;
										<br />
										&lt;Input type=&#123;'email'&#125; name=&#123;'label'&#125; label=&#123;'Email input'&#125;/&gt;
										<br />
										&lt;Input type=&#123;'number'&#125; name=&#123;'label'&#125; placeholder=&#123;'Number input'&#125; hint=&#123;'Number input'&#125;/&gt;
										<br />
										&lt;Input type=&#123;'textarea'&#125; name=&#123;'label'&#125; rows=&#123;5&#125; label=&#123;'Textarea + Label with 5 rows'&#125;/&gt;
										<br />
										&lt;Input type=&#123;'textarea'&#125; name=&#123;'label'&#125; rows=&#123;3&#125; placeholder=&#123;'Textarea + Placeholder with 3 rows'&#125;/&gt;
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

exports.AppInput = AppInput;