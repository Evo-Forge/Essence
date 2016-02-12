import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import Input from 'essence-input';
import Toast from 'essence-toast';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppToast extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			delay: 5000,
			visible: false,
			message: 'You got a new message!',
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    toastStarted() {
    	{/* console.log('toast started'); */}
    }
    
    toastPaused() {
    	{/* console.log('toast paused'); */}
    }

    toastResumed() {
    	{/* console.log('toast resumed'); */}
    }

    toastEnded() {
    	{/* console.log('toast ended'); */}
    	this.setState({
            visible: false
        });
    }

    showToast() {
        this.setState({
            visible: true
        });
    }

    changeMessage(event) {
    	let message = event.target.value;
    	this.setState({
    		message: message || 'You got a new message!'
    	});
    }

    changeNumber(event) {
    	let delay = event.target.value;
    	this.setState({
    		delay: delay || 5000
    	});
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>TOASTS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Remember those confirmation messages from long time ago? They’re now called snackbars and toasts and they come with rules. Head onto Google to check out how to use them. Then check out the below examples hot to integrate them from Essence.
							</Text>
		        		</CardHeader>

		        		<CardContent>
		        			<Block className={'e-row'}>
				        		<Block className={'brick brick-6'}>
		        					<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
		        					<Divider classes={'thick short e-background-indigo-400'} />
			        				<Block className={'e-row e-padding-top-15'}>
			        					<Block className={'brick brick-8'}>
				        					<Input
												classes={'has-success'}
												defaultValue={this.state.message}
												onBlur={this.changeMessage.bind(this)}
												label={'Toast message'}/>
			        					</Block>
			        					<Block className={'brick brick-4'}>
											<Input 
												type={'number'}
												classes={'has-success'}
												defaultValue={this.state.delay}
												onBlur={this.changeNumber.bind(this)}
											label={'Delay in ms'}/>
			        					</Block>
			        				</Block>
			        				<Block className={'e-text-center e-padding-top-15'}>
	                					<Btn 
	                						type={'succes'} 
	                						label={'Snow Toast'}
	                						onClick={this.showToast.bind(this)} 
	                						className={'flat'} />
									</Block>
									<Toast 
										delay={this.state.delay}
										classes={'e-text-green-500'} 
										visible={this.state.visible} 
										onStart={this.toastStarted.bind(this)} 
										onPause={this.toastPaused.bind(this)} 
										onResume={this.toastResumed.bind(this)} 
										onEnd={this.toastEnded.bind(this)} >
										{this.state.message}
									</Toast>
			        			</Block>
			        			<Block className={'brick brick-6'}>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thick short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-toast</strong>
				        				</code>
			        				</pre>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
										To customise the hide function for Toast modify the number from option <strong>delay</strong> with a delay in miliseconds. 
									</Text>

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											import Toast from 'essence-toast';
											<br />
											<br />
											&lt;Toast classes=&#123;'e-text-green-500'&#125; visible=&#123;{this.state.visible.toString()}&#125; delay=&#123;{this.state.delay}&#125;&gt;
											<br />
											&nbsp;{this.state.message}
											<br />
											&lt;/Toast&gt;
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

exports.AppToast = AppToast;