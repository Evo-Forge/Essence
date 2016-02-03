import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Block from '../../../components/essence-core/src/block/block.jsx';
import Text from '../../../components/essence-core/src/text/text.jsx';
import List from '../../../components/essence-list/src/list.jsx';
import ListItem from '../../../components/essence-list/src/item.jsx';
import Navigation from '../../../components/essence-navigation/src/navigation.jsx';
import Icon from '../../../components/essence-icon/src/icon.jsx';
import Image from '../../../components/essence-image/src/image.jsx';

<Navigation>
	<List type={'navigation'} classes={"e-background-white"}>
		<ListItem>
			<Text type={'a'} href={'#appbar'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>AppBar</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#bottomsheet'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>BottomSheet</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#button'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Button</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#card'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Card</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#chip'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Chip</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#data-table'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Data Table</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#dialog'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Dialog</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#icon'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Icon</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#image'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Image</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#input'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Input</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#list'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>List</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#menu'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Menu</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#navigation'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Navigation</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#paper'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Paper</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#progress'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Progress</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#slider'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Slider</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#snackbar'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>SnackBar</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#switch'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Switch</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#tab'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Tab</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#toast'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Toast</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#tooltip'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>Tooltip</Text>
				</Block>	
			</Text>
		</ListItem>
		<ListItem>
			<Text type={'a'} href={'#touchpad'}>
				<Block classes={'content e-left'}>
					<Text type={'small'}>TouchPad</Text>
				</Block>	
			</Text>
		</ListItem>

	</List>
</Navigation>

ReactDOM.render(
	<Block classes={'brick brick-12'}>
		<SideBar />
	</Block>
	,
	document.querySelector('.app')
);