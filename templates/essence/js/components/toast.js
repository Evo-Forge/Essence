import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import Toast from 'essence-toast';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppToast extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	toast: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    renderToast() {
        if (this.state.toast) {
            return (
                <Toast classes={'e-text-green-500'} visible={true} delay={5000}>
                    You got a new message!
                </Toast>
            );
        }
        return;
    }

    toggleToast() {
        var toastStatus = !this.state.toast;

        this.setState({
            toast: toastStatus
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
			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
									{this.renderToast()}
                					<Btn 
                						type={'succes'} 
                						label={'Snow Toast'}
                						onClick={this.toggleToast.bind(this)} 
                						className={'flat'} />
								</Block>
		        			</Block>

		        			<Block>
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
										&lt;Toast classes=&#123;'e-text-green-500'&#125; visible=&#123;true&#125; delay=&#123;5000&#125;&gt;
										<br />
										&nbsp;You got a new message!
										<br />
										&lt;/Toast&gt;
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

exports.AppToast = AppToast;