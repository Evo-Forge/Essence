import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Image from 'essence-image';
import Input from 'essence-input';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppImage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            ),
            imageSrc: 'http://essence.pearlhq.com/assets/img/essence_icon.png'
        };
    }

    changeImage(event) {
    	let src = event.target.value;
    	this.setState({
    		imageSrc: src || 'http://essence.pearlhq.com/assets/img/essence_icon.png'
    	});
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>IMAGES</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								They cannot be eaten. But can be used to show complex information, such as calendar events or contacts. Use them wisely by adding the e-chip-image/text/address class, as well as desired button class to your nifty code.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-padding-bottom-25')}>
									<Image src={this.state.imageSrc} />
									&nbsp;
									&nbsp;
									<Image src={this.state.imageSrc} height={'150px'} />
									&nbsp;
									&nbsp;
									<Image src={this.state.imageSrc} width={'50px'} height={'100px'} />
									&nbsp;
									&nbsp;
									<Image src={this.state.imageSrc} height={'75px'} />
									&nbsp;
									&nbsp;
									<Image src={this.state.imageSrc} width={'50px'} height={'50px'} alt={'Essence Image'} />
								</Block>
								<Block className={ClassNames('e-padding-bottom-25 e-padding-top-25 e-row')}>
									<Block className={'brick brick-3'} />
									<Block className={'brick brick-6'}>
										<Input 
											name={'image-src'}
											classes={'has-success'}
											onBlur={this.changeImage.bind(this)}
											placeholder={'Change image src, write your image url'}/>
									</Block>
								</Block>
		        			</Block>
			        		<Divider />

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-image</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import Image from 'essence-image';
										<br />
										<br />
										&lt;Image src=&#123;'{this.state.imageSrc}'&#125; /&gt;
										<br />
										&lt;Image src=&#123;'{this.state.imageSrc}'&#125; height=&#123;'150px'&#125; /&gt;
										<br />
										&lt;Image src=&#123;'{this.state.imageSrc}'&#125; width=&#123;'50px'&#125; height=&#123;'100px'&#125; /&gt;
										<br />
										&lt;Image src=&#123;'{this.state.imageSrc}'&#125; height=&#123;'75px'&#125; /&gt;
										<br />
										&lt;Image src=&#123;'{this.state.imageSrc}'&#125; width=&#123;'50px'&#125; height=&#123;'50px'&#125; alt=&#123;'Essence Image'&#125; /&gt;
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

exports.AppImage = AppImage;