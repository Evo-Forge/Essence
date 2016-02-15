import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';
import {Dialog, DialogHeader, DialogContent, DialogFooter} from 'essence-dialog';

class AppDialog extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	open: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    showDialog() {
        this.setState({
            open: true
        });
    }

    hideDialog() {
        this.setState({
            open: false
        });
    }
    
    dialogClosed() {
    	console.log('dialogClosed');
    }

    dialogOpened() {
    	console.log('dialogOpened');
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>DIALOGS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								As you might expect, dialog boxes pop. And they have actions - set the dialog content and its actions with .e-dialogs-content and .e-dialogs-actions, as well as the button type & text. That’s it.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
                					<Btn 
                						type={'primary'} 
                						label={'Show Dialog'}
                						onClick={this.showDialog.bind(this)} 
                						className={'flat'} />

									<Dialog dismissible={false} visible={this.state.open} onOpen={this.dialogOpened.bind(this)} onClose={this.dialogClosed.bind(this)}>
										<DialogHeader className={'e-text-right'}>
											<Btn icon={'navigation-close'} onClick={this.hideDialog.bind(this)} className={'flat e-background-white'} />
										</DialogHeader>
										<DialogContent>
											This is the Dialog content
										</DialogContent>
										<DialogFooter>
											<Btn type={'succes'} label={'OK'} className={'flat'} />
											<Btn type={'info'} label={'Cancel'} onClick={this.hideDialog.bind(this)}  className={'flat'} />
										</DialogFooter>
									</Dialog>
								</Block>
		        			</Block>

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-dialog</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-black'}>
									Dialog component has the following options:
									<br />
									<br />
									1. <strong>dismissible</strong>: <u>true</u> or <u>false</u> to toggle on/off the dialog clicked overlay background
									<br />
									2. <strong>visible</strong>: <u>true</u> or <u>false</u> to hide or show the dialog modal
									<br />
									3. <strong>onOpen</strong>: <u>callback</u> function on the Dialog is shown
									<br />
									4. <strong>onClose</strong>: <u>callback</u> function on the Dialog is hidden
									<br />
									<br />
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
			        					import &#123;Dialog, DialogHeader, DialogContent, DialogFooter&#125; from 'essence-dialog';
										<br />
										<br />
										showDialog() &#123;
										<br />
										&nbsp;this.setState(&#123;
										<br />
										&nbsp;&nbsp;open: true
										<br />
										&nbsp;&#125;);
										<br />
										&#125;
										<br />
										<br />
										hideDialog() &#123;
										<br />
										&nbsp;this.setState(&#123;
										<br />
										&nbsp;&nbsp;open: false
										<br />
										&nbsp;&#125;);
										<br />
										&#125;
										<br />
										<br />
										dialogClosed() &#123;
										<br />
										&nbsp;console.log('dialogClosed');
										<br />
										&#125;
										<br />
										<br />
										dialogOpened() &#123;
										<br />
										&nbsp;console.log('dialogOpened');
										<br />
										&#125;
										<br />
										<br />
										&lt;Dialog dismissible=&#123;false&#125; visible=&#123;this.state.open&#125; onOpen=&#123;this.dialogOpened.bind(this)&#125; onClose=&#123;this.dialogClosed.bind(this)&#125;&gt;
										<br />
										&nbsp;&lt;DialogHeader className=&#123;'e-text-right'&#125;&gt;
										<br />
										&nbsp;&nbsp;&lt;Btn icon=&#123;'navigation-close'&#125; onClick=&#123;this.hideDialog.bind(this)&#125; className=&#123;'flat e-background-white'&#125; /&gt;
										<br />
										&nbsp;&lt;/DialogHeader&gt;
										<br />
										<br />
										&nbsp;&lt;DialogContent&gt;
										<br />
										&nbsp;&nbsp;This is the Dialog content
										<br />
										&nbsp;&lt;/DialogContent&gt;
										<br />
										<br />
										&nbsp;&lt;DialogFooter&gt;
										<br />
										&nbsp;&nbsp;&lt;Btn type=&#123;'succes'&#125; label=&#123;'OK'&#125; className=&#123;'flat'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&lt;Btn type=&#123;'info'&#125; label=&#123;'Cancel'&#125; onClick=&#123;this.hideDialog.bind(this)&#125; className=&#123;'flat'&#125; /&gt;
										<br />
										&nbsp;&lt;/DialogFooter&gt;
										<br />
										&lt;/Dialog&gt;
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

exports.AppDialog = AppDialog;