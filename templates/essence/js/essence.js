import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import AppBar from 'essence-appbar';
import Menu from 'essence-menu';
import Input from 'essence-input';
import Toast from 'essence-toast';
import Button from 'essence-button';
import {List, ListItem} from 'essence-list';
import Icon from 'essence-icon';
import Image from 'essence-image';

import {Block, Text, Divider} from 'essence-core';
import Navigation from 'essence-navigation';

class AppHeader extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	search: 'close',
        	toast: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    renderSearch() {
    	let classes = ClassNames('e-no-margin e-text-white e-left', this.state.search);
    	return (
			<Input
				type={'search'}
				name='search-input'
				placeholder='Search...'
				classes={classes}/>
		);
	}

    renderToast() {
    	if (this.state.toast) {
    		return (
    			<Toast classes={'e-text-green-500'} visible={true} delay={5000}>
					Adaugat la Favorite
				</Toast>
			);
    	}

    	return;
    }

    toggleSearch() {
    	this.setState({
    		search: (this.state.search === 'close' ? 'open' : 'close')
    	});
    }

    toggleToast() {
    	var toastStatus = !this.state.toast;

    	this.setState({
    		toast: toastStatus
    	});
    }

    render() {
        return(
			<AppBar classes={'e-background-cyan-400'}>
				<Button className={'flat e-background-cyan-400 e-text-white e-left'} type={'primary'} icon={'navigation-menu'}/>

				<Text className={'e-text-white'}>Essence - test</Text>

				<Menu type={'cover'} icon={'navigation-more-vert'} classes={'e-right e-text-white e-background-cyan-400'}>
					<Text classes={'e-text-black'}>Profile</Text>
					<Text classes={'e-text-black'}>Settings</Text>
					<Text classes={'e-text-black'}>Logout</Text>
				</Menu>
				
				<Block className={'e-right'}>
					{this.renderToast()}
					<Button onClick={this.toggleToast.bind(this)} className={'flat e-background-cyan-400 e-text-white e-right'} type={'primary'} icon={'action-favorite'}/>
				</Block>
				
				<Block className={'e-right search-block'}>
					{this.renderSearch()}
					<Button onClick={this.toggleSearch.bind(this)} className={'flat e-background-cyan-400 e-text-white e-right'} type={'primary'} icon={'action-search'}/>
				</Block>
			</AppBar>
        );
    }
};

class SideBar extends React.Component {
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
    	return;
        return (
			<Navigation>
				<List type={'navigation'} classes={'e-background-white'}>
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
        );
    }
}

ReactDOM.render(
	<Block classes={'brick brick-12'}>
		<AppHeader />
	</Block>
	,
	document.querySelector('.app')
);