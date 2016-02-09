import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';
import Chip from 'essence-chip';

var ChipDeletable = {
  name: 'deletable',
  text: [<strong>Chip</strong>, <span> (deletable)</span>],
  icon: 'D',
  deletable: true,
  onClose: ( function () { console.log('deletable chip'); } )
};

var ChipNonDeletable = {
  name: 'nondeletable',
  text: [<strong>Chip</strong>, <span> (non deletable)</span>],
  icon: 'N',
  deletable: false,
  onClose: ( function () { console.log('non deletable chip'); } )
};

var ChipNoIconDeletable = {
  name: 'noicondeletable',
  text: [<strong>Chip</strong>, <span> (no icon deletable)</span>],
  deletable: true,
  onClose: ( function () { console.log('no icon deletable chip'); } )
};

var ChipNoIconNonDeletable = {
  name: 'noiconnondeletable',
  text: [<strong>Chip</strong>, <span> (no icon non deletable)</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

class AppChip extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>CHIPS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								They cannot be eaten. But can be used to show complex information, such as calendar events or contacts. Use them wisely by adding the e-chip-image/text/address class, as well as desired button class to your nifty code.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-padding-bottom-25')}>
									<Chip data={ChipDeletable} />
									<Chip data={ChipNonDeletable} />
									<Chip data={ChipNoIconDeletable} />
									<Chip data={ChipNoIconNonDeletable} />
								</Block>
		        			</Block>
			        		<Divider />

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-chip</strong>
			        				</code>
		        				</pre>

		        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
									Create a new ReactJS file with the code bellow.
								</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import Chip from 'essence-chip';
										<br />
										<br />
										var ChipDeletable = &#123;
										<br />
										&nbsp;&nbsp;name: 'ChipDeletable',
										<br />
										&nbsp;&nbsp;text: [&lt;strong&gt;Chip&lt;/strong&gt;, &lt;span&gt; (deletable)&lt;/span&gt;],
										<br />
										&nbsp;&nbsp;icon: 'D',
										<br />
										&nbsp;&nbsp;deletable: true,
										<br />
										&nbsp;&nbsp;onClose: ( function () &#123; console.log('deletable chip'); &#125; )
										<br />
										&#125;
										<br />
										<br />
										var ChipNonDeletable = &#123;
										<br />
										&nbsp;&nbsp;name: 'ChipNonDeletable',
										<br />
										&nbsp;&nbsp;text: [&lt;strong&gt;Chip&lt;/strong&gt;, &lt;span&gt; (non deletable)&lt;/span&gt;],
										<br />
										&nbsp;&nbsp;icon: 'N',
										<br />
										&nbsp;&nbsp;deletable: false,
										<br />
										&nbsp;&nbsp;onClose: ( function () &#123; console.log('non deletable chip'); &#125; )
										<br />
										&#125;
										<br />
										<br />var ChipNoIconDeletable = &#123;
										<br />
										&nbsp;&nbsp;name: 'ChipNoIconDeletable',
										<br />
										&nbsp;&nbsp;text: [&lt;strong&gt;Chip&lt;/strong&gt;, &lt;span&gt; (no icon deletable)&lt;/span&gt;],
										<br />
										&nbsp;&nbsp;deletable: true,
										<br />
										&nbsp;&nbsp;onClose: ( function () &#123; console.log('no icon deletable chip'); &#125; )
										<br />
										&#125;<br />
										<br />var ChipNoIconNonDeletable = &#123;
										<br />
										&nbsp;&nbsp;name: 'ChipNoIconNonDeletable',
										<br />
										&nbsp;&nbsp;text: [&lt;strong&gt;Chip&lt;/strong&gt;, &lt;span&gt; (no icon non deletable)&lt;/span&gt;],
										<br />
										&nbsp;&nbsp;deletable: false,
										<br />
										&nbsp;&nbsp;onClose: ( function () &#123; console.log('no icon non deletable chip'); &#125; )
										<br />
										&#125;
										<br />
										<br />
										&lt;Chip data=&#123;ChipDeletable&#125;/&gt;
										<br />
										&lt;Chip data=&#123;ChipNonDeletable&#125;/&gt;
										<br />
										&lt;Chip data=&#123;ChipNoIconDeletable&#125;/&gt;
										<br />
										&lt;Chip data=&#123;ChipNoIconNonDeletable&#125;/&gt;
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

exports.AppChip = AppChip;