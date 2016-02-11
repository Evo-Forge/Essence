import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Tab from 'essence-tab';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

var tabs = {
    'header': [
        { 'context': (<Text>Tab 1</Text>) },
        { 'context': (<Text>Tab 2</Text>) },
        { 'context': (<Text>Tab with callback alert</Text>), 'callback': ( function() { alert('Hey you'); } ) },
        { 'context': (<Text>Tab with callback link</Text>), 'callback': ( function() { window.open('http://essence.pearlhq.com/', '_blank'); }) }
    ],
    'rows': [ 
        (<Text>This is the context for Tab 1</Text>),
        (<Text>This is the context for Tab 2</Text>),
        (<Text>This is the context for Tab with callback alert</Text>),
        (<Text>This is the context for Tab with callback link</Text>)
    ]
};

class AppTab extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>TABS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block>
			        			<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />
		        				<Tab 
									data={tabs}
									classes={'e-background-cyan-500 e-text-grey-50'} 
									indicator={'e-background-red-500'}/>
		        			</Block>

		        			<Block className={'e-padding-top-50'}>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-tab</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									To customise the colour <strong>indicator</strong> try the example below. 
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import Tab from 'essence-tab';
										<br />
										<br />
										<br />
										var tabs = &#123;
										<br />
										&nbsp;'header': [
										<br />
										&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab 1&lt;/Text&gt;) &#125;,
										<br />
										&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab 2&lt;/Text&gt;) &#125;,
										<br />
										&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab with callback alert&lt;/Text&gt;), 'callback': ( function() &#123; alert('Hey you'); &#125; ) &#125;,
										<br />
										&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab with callback link&lt;/Text&gt;), 'callback': ( function() &#123; window.open('http://essence.pearlhq.com/', '_blank'); &#125;) &#125;
										<br />
										&nbsp;&nbsp;],
										<br />
										&nbsp;&nbsp;'rows': [ 
										<br />
										&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab 1&lt;/Text&gt;),
										<br />
										&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab 2&lt;/Text&gt;),
										<br />
										&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab with callback alert&lt;/Text&gt;),
										<br />
										&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab with callback link&lt;/Text&gt;)
										<br />
										&nbsp;]
										<br />
										&#125;;
										<br />
										<br />
										&lt;Tab 
										<br />
										&nbsp;&nbsp;data=&#123;tabs&#125;
										<br />
										&nbsp;&nbsp;classes=&#123;'e-background-cyan-500 e-text-grey-50'&#125; 
										<br />
										&nbsp;&nbsp;indicator=&#123;'e-background-red-500'&#125;/&gt;
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

exports.AppTab = AppTab;