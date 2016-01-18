import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '../components/essence-appbar/src/appbar.jsx';
import Text from '../components/essence-core/src/text/text.jsx';
import Block from '../components/essence-core/src/block/block.jsx';
import Icon from '../components/essence-icon/src/icon.jsx';
import Menu from '../components/essence-menu/src/menu.jsx';
import List from '../components/essence-list/src/list.jsx';
import ListItem from '../components/essence-list/src/item.jsx';
import Navigation from '../components/essence-navigation/src/navigation.jsx';

ReactDOM.render(
	<Block>
		<AppBar classes={'e-background-yellow-100'}>
			<Icon name={'navigation-menu'} classes={'e-left'} />
			<Menu type={'cover'} classes={'e-left'} placeholder={'Options'}>
			   	<Block placeholder={'Notifications'}>
				   	<Icon name='notification-sms' />
					<Text>Notifications</Text>
				</Block>
				<Block placeholder={'Tap & Play'}>
				   	<Icon name='notification-tap-and-play' />
					<Text>Tap & Play</Text>
				</Block>
				<Block placeholder={'Vibrations'}>
				   	<Icon name='notification-vibration' />
					<Text>Vibrations</Text>
				</Block>
			</Menu>
		    <Icon name={'navigation-more-vert'} classes={'e-right'} />
		    <Icon name={'action-favorite'} classes={'e-right'} />
		    <Icon name={'action-search'} classes={'e-right'} />	   
		</AppBar>

		<Navigation classes={'e-background-green-100'}>
			<Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
				<Block type={'header'} classes={'e-nav-header e-background-red-100'}>
					<Text>Navigation header</Text>
				</Block>
				<List type={'navigation'}>
					<ListItem>
						<Text type={'a'} href={'#item 1'}>
							<Icon name={'content-inbox'} />
							Inbox
						</Text>
					</ListItem>
					<ListItem>
						<Text type={'a'} href={'#item 2'}>
							<Icon name={'action-grade'} />
							Starred
						</Text>
					</ListItem>
					<ListItem>
						<Text type={'a'} href={'#item 3'}>
							<Icon name={'content-send'} />
							Sent mail
						</Text>
					</ListItem>
					<ListItem>
						<Text type={'a'} href={'#item 4'}>
							<Icon name={'action-account-circle'} />
							Drafts
						</Text>
					</ListItem>
					
				</List>
				<Block type={'footer'} classes={'e-nav-footer e-background-red-100'}>
					Navigation footer
				</Block>
			</Block>
		</Navigation>
	</Block>
	,
	document.querySelector('.app')
);