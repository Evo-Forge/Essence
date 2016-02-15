import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import Tooltip from 'essence-tooltip';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppTooltip extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	visible: {
        		byID: false,
        		byClassName: false,
        	},
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    showTooltipByID() {
    	let visible = this.state.visible;
    	visible.byID = true;

        this.setState({
            visible: visible
        });
    }
    
    hideTooltipByID() {
    	let visible = this.state.visible;
    	visible.byID = false;

        this.setState({
            visible: visible
        });
    }

    showTooltipByClassName() {
    	let visible = this.state.visible;
    	visible.byClassName = true;

        this.setState({
            visible: visible
        });
    }

    hideTooltipByClassName() {
    	let visible = this.state.visible;
    	visible.byClassName = false;
    	
        this.setState({
            visible: visible
        });
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>TOOLTIPS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Tooltips are labels that appear on hover and focus when the user hovers over an element with the cursor, focuses on an element using a keyboard (usually through the tab key), or, in a touch UI, upon touch (without releasing). Check out some examples and how to use them below.
							</Text>
		        		</CardHeader>

		        		<CardContent>
		        			<Block className={'e-row'}>
				        		<Block className={'brick brick-4'}>
		        					<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
		        					<Divider classes={'thick short e-background-indigo-400'} />
			        				<Block className={'e-text-center e-padding-top-50'}>
										<Btn 
											id={'tooltipButton'} 
											type={'succes'} 
											label={'Tooltip by ID'}
											onMouseOver={this.showTooltipByID.bind(this)} 
											onMouseOut={this.hideTooltipByID.bind(this)} 
											className={'flat'} />
										<br />
										<Btn 
											type={'info'} 
											label={'Tooltip by class name'}
											onMouseOver={this.showTooltipByClassName.bind(this)} 
											onMouseOut={this.hideTooltipByClassName.bind(this)} 
											className={'flat tooltipButton'} />
										<br />

									</Block>
									<Tooltip 
										target={'#tooltipButton'}  
										visible={this.state.visible.byID}>
											Tooltip by ID tooltipButton
									</Tooltip>

									<Tooltip 
										target={'.tooltipButton'}  
										visible={this.state.visible.byClassName}>
											Tooltip by class name tooltipButton
									</Tooltip>
			        			</Block>
			        			<Block className={'brick brick-8'}>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thick short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-tooltip</strong>
				        				</code>
			        				</pre>

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											import Tooltip from 'essence-tooltip';
											<br />
											<br />
											&lt;Tooltip target=&#123;'#tooltipButton'&#125; visible=&#123;{this.state.visible.byID.toString()}&#125;&gt;
											<br />
											&nbsp;&nbsp;Tooltip by ID #tooltipButton
											<br />
											&lt;/Tooltip&gt;
											<br />
											<br />
											&lt;Tooltip target=&#123;'.tooltipButton'&#125; visible=&#123;{this.state.visible.byClassName.toString()}&#125;&gt;
											<br />
											&nbsp;&nbsp;Tooltip by class name .tooltipButton
											<br />
											&lt;/Tooltip&gt;
											<br />
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

exports.AppTooltip = AppTooltip;