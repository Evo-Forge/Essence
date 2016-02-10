import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Slider from 'essence-slider';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppSlider extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>SLIDERS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Sliders let users select a value from a continuous or discrete range of values by moving the slider thumb. The smallest value is to the left, the largest to the right.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
									<Block classes={'brick brick-12'}>
										<Slider step={1} fill={false} />
									</Block>
									<Block classes={'brick brick-12'}>
										<Slider step={10} start={10}/>
									</Block>
									<Block classes={'brick brick-12'}>
										<Slider discrete={true} step={1} start={20}/>
									</Block>
									<Block classes={'brick brick-12'}>
										<Slider discrete={true} step={10} start={30}/>
									</Block>
									<Block classes={'brick brick-12'}>
										<Slider discrete={true} step={10} start={40} disable={true}/>
									</Block>
								</Block>
		        			</Block>

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-slider</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import Slider from 'essence-slider';
										<br />
										<br />
										&lt;Slider step=&#123;1&#125; fill=&#123;false&#125; /&gt;
										<br />
										&lt;Slider step=&#123;10&#125; start=&#123;10&#125;/&gt;
										<br />
										&lt;Slider discrete=&#123;true&#125; step=&#123;1&#125; start=&#123;20&#125;/&gt;
										<br />
										&lt;Slider discrete=&#123;true&#125; step=&#123;10&#125; start=&#123;30&#125;/&gt;
										<br />
										&lt;Slider discrete=&#123;true&#125; step=&#123;10&#125; start=&#123;40&#125; disable=&#123;true&#125;/&gt;
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

exports.AppSlider = AppSlider;