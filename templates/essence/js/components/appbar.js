import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppBarComponent extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>APPBAR</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								It’s never been more fun to create an appbar with button and navigation and whatever. Start with the .e-appbar class then add buttons, menus and whatever you need.
							</Text>
		        		</CardHeader>

		        		<CardContent>
		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Use the "AppBar" Essence component to render a div html tag with "e-appbar" classname. Inside the AppBar Essence component you can include any type of components.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-appbar</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import AppBar from 'essence-appbar';
										<br />
										<br />
										&lt;AppBar className=&#123;"e-background-indigo-400"&#125;&gt;
										<br />
										&nbsp;&nbsp;AppBar Component - use menus, buttons or other components
										<br />
										&lt;/AppBar&gt;
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

exports.AppBarComponent = AppBarComponent;