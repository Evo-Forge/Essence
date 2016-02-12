import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import Icon from 'essence-icon';
import {List, ListItem} from 'essence-list';
import BottomSheets from 'essence-bottomsheet';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppBottomSheet extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	visible: {
        		simple: false,
        		bigicons: false,
        	},
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    showSimple() {
    	let visible = this.state.visible;
    	visible.simple = true;

    	this.setState({
    		visible: visible
    	})
    }

    hideSimple() {
    	let visible = this.state.visible;
    	visible.simple = false;

    	this.setState({
    		visible: visible
    	})
    }

    showBigIcons() {
    	let visible = this.state.visible;
    	visible.bigicons = true;

    	this.setState({
    		visible: visible
    	})
    }

    hideBigIcons() {
    	let visible = this.state.visible;
    	visible.bigicons = false;

    	this.setState({
    		visible: visible
    	})
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>BOTTOM SHEETS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								You know those cool looking sheets that pop-up from the bottom of the screen? Yeah, we have those too. Depending on how you want information to be displayed, aligned or arranged, use the appropriate code. Here are some examples to get you started.
							</Text>
		        		</CardHeader>

		        		<CardContent>
							<Block className={'e-padding-top-25 e-padding-bottom-25'}>
								<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

								<Block className={'e-text-center'}>
									<Btn 
										type={'succes'} 
										label={'Show Simple Bottom Sheets'}
										onClick={this.showSimple.bind(this)} 
										className={'flat'} />

									<Btn 
										type={'info'} 
										label={'Show Big Icons Bottom Sheets'}
										onClick={this.showBigIcons.bind(this)} 
										className={'flat'} />
								</Block>

								<BottomSheets 
									classes={'e-background-white'} 
									onEnd={this.hideSimple.bind(this)}
									visible={this.state.visible.simple}>
								    <List type={'navigation'}>
								        <ListItem>
								            <Text type={'a'} href={'#icons'}>
								                <Icon name={'action-picture-in-picture'} />
								                <Text>Icons </Text>
								                &nbsp;
								                <Text type={'sup'}>
								                	<Text type={'strong'} className={'e-text-indigo-400'}>by Essence</Text>
								                </Text>
								            </Text>
								        </ListItem>
								        <ListItem>
								            <Text type={'a'} href={'#colors'}>
								                <Icon name={'image-color-lens'} />
								                <Text>Colors</Text>
								                &nbsp;
								                <Text type={'sup'}>
								                	<Text type={'strong'} className={'e-text-indigo-400'}>by Essence</Text>
								                </Text>
								            </Text>
								        </ListItem>
								        <ListItem>
								            <Text type={'a'} href={'#button'}>
								                <Icon name={'toggle-radio-button-on'} />
								                <Text>Buttons</Text>
								                &nbsp;
								                <Text type={'sup'}>
								                	<Text type={'strong'} className={'e-text-indigo-400'}>by Essence</Text>
								                </Text>
								            </Text>
								        </ListItem>
								        <ListItem>
								            <Text type={'a'} href={'#slider'}>
								                <Icon name={'image-wb-irradescent'} />
								               	<Text>Sliders</Text>
								               	&nbsp;
								               	<Text type={'sup'}>
								               		<Text type={'strong'} className={'e-text-indigo-400'}>by Essence</Text>
								               	</Text>
								            </Text>
								        </ListItem>
								    </List>
								</BottomSheets>
								
								<BottomSheets 
									classes={'e-background-white big-icons'}
									onEnd={this.hideBigIcons.bind(this)}
									visible={this.state.visible.bigicons}>
								    <List type={'navigation'} className={'e-text-indigo-400'}>
								        <ListItem>
								            <Text type={'a'} href={'#icons'}>
								                <Icon name={'action-picture-in-picture'} />
								                <Text>Icons</Text>
								            </Text>
								        </ListItem>
								        <ListItem>
								            <Text type={'a'} href={'#colors'}>
								                <Icon name={'image-color-lens'} />
								                <Text>Colors</Text>
								            </Text>
								        </ListItem>
								        <ListItem>
								            <Text type={'a'} href={'#button'}>
								                <Icon name={'toggle-radio-button-on'} />
								                <Text>Buttons</Text>
								            </Text>
								        </ListItem>
								        <ListItem>
								            <Text type={'a'} href={'#core'}>
								                <Icon name={'action-group-work'} />
								               	<Text>Core</Text>
								            </Text>
								        </ListItem>
								        <ListItem>
								            <Text type={'a'} href={'#slider'}>
								                <Icon name={'image-wb-irradescent'} />
								               	<Text>Sliders</Text>
								            </Text>
								        </ListItem>
								        <ListItem>
								            <Text type={'a'} href={'#touchpad'}>
								                <Icon name={'action-tab-unselected'} />
								               	<Text>TouchPad</Text>
								            </Text>
								        </ListItem>
								    </List>
								</BottomSheets>
							</Block>
							<Divider />

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Use the "BottomSheets" Essence component to render a group of "BottomSheetsItem" components. The "BottomSheets" Essence component will return a div container with class name "e-bottom-sheet". Inside the BottomSheets component you can include only the BottomSheetsItem component. A "BottomSheetsItem" Essence component will render one List component. 
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-bottomsheet</strong>
			        				</code>
		        				</pre>

								<Text type={'p'} classes={'e-body1 e-text-indigo-400'}>
									BOTTOM SHEETS SIMPLE
								</Text>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import BottomSheets from 'essence-bottomsheet';
										<br />
										<br />
										&lt;BottomSheets classes=&#123;'e-background-white'&#125; visible=&#123;true&#125;&gt;
										<br />
										&nbsp;&lt;List type=&#123;'navigation'&#125;&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#icons'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-picture-in-picture'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Icons &lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'sup'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;by Essence&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#colors'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'image-color-lens'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Colors&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'sup'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;by Essence&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#button'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'toggle-radio-button-on'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Buttons&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'sup'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;by Essence&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#slider'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'image-wb-irradescent'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Sliders&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'sup'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;by Essence&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;/List&gt;
										<br />
										&lt;/BottomSheets&gt;
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-indigo-400'}>
									BOTTOM SHEETS BIG ICONS
								</Text>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import BottomSheets from 'essence-bottomsheet';
										<br />
										<br />
										&lt;BottomSheets classes=&#123;'e-background-white big-icons'&#125; visible=&#123;true&#125;&gt;
										<br />
										&nbsp;&lt;List type=&#123;'navigation'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#icons'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-picture-in-picture'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Icons&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#colors'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'image-color-lens'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Colors&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#button'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'toggle-radio-button-on'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Buttons&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#core'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-group-work'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Core&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#slider'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'image-wb-irradescent'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Sliders&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#touchpad'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-tab-unselected'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;TouchPad&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;/List&gt;
										<br />
										&lt;/BottomSheets&gt;
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

exports.AppBottomSheet = AppBottomSheet;