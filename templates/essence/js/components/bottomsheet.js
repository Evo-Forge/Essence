import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppBottomSheet extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>BOTTOM SHEETS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								You know those cool looking sheets that pop-up from the bottom of the screen? Yeah, we have those too. Depending on how you want information to be displayed, aligned or arranged, use the appropriate code. Here are some examples to get you started.
							</Text>
		        		</CardHeader>

		        		<CardContent>
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
										import AppBar from 'essence-bottomsheet';
										<br />
										<br />
										&lt;BottomSheets classes=&#123;'e-background-white'} visible=&#123;true}&gt;
										<br />
										&nbsp;&lt;Block&gt;
										<br />
										&nbsp;&nbsp;&lt;List type=&#123;'navigation'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#item 1'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'social-share'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />                  
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#item 2'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'file-file-upload'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upload
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;ListItem&gt;
										<br />                  
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#item 3'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'content-content-copy'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copy
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;ListItem&gt;
										<br />                  
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#item 4'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-print'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Print this page
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;/List&gt;
										<br />
										&nbsp;&lt;/Block&gt;
										<br />
										&lt;/BottomSheets&gt;
										<br />
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
										import AppBar from 'essence-bottomsheet';
										<br />
										<br />
										&lt;BottomSheets classes=&#123;'e-background-white big-icons'} visible=&#123;true}&gt;
										<br />
										&nbsp;&lt;Block&gt;
										<br />
										&nbsp;&nbsp;&lt;List type=&#123;'navigation'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#item 1'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'social-share'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />                  
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#item 2'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'file-file-upload'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Upload
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;ListItem&gt;
										<br />                  
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#item 3'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'content-content-copy'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copy
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;ListItem&gt;
										<br />                  
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#item 4'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-print'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Print this page
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;/List&gt;
										<br />
										&nbsp;&lt;/Block&gt;
										<br />
										&lt;/BottomSheets&gt;
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

exports.AppBottomSheet = AppBottomSheet;