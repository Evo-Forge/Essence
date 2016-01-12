import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '../components/essence-appbar/src/appbar.jsx';
import Text from '../components/essence-core/src/text/text.jsx';
import Block from '../components/essence-core/src/block/block.jsx';
import Icon from '../components/essence-icon/src/icon.jsx';
import Menu from '../components/essence-menu/src/menu.jsx';

ReactDOM.render(
	<AppBar classes={'e-background-yellow-100'}>
		
		<Icon name={'navigation-menu'} classes={'e-left'}/>

		<Menu type={'cover'} classes={'e-left'} placeholder='Options'>			
			<Block>
				<Icon name='notification-sms' />
				<Text>Notifications</Text>
			</Block>

			<Block>
				<Icon name='notification-tap-and-play' />
				<Text>Tap & Pay</Text>
			</Block>

			<Block classes={'divider'} />

			<Text type={'a'} href='http://www.google.com/' target={'_target'}>Google</Text>
		</Menu>
	</AppBar>
	,
	document.querySelector('.app')
);