import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import AppBar from '../components/essence-appbar/src/appbar.jsx';
import Text from '../components/essence-core/src/text/text.jsx';
import Block from '../components/essence-core/src/block/block.jsx';
import Icon from '../components/essence-icon/src/icon.jsx';
import Switch from '../components/essence-switch/src/switch.jsx';
import Input from '../components/essence-input/src/input.jsx';
import Menu from '../components/essence-menu/src/menu.jsx';
import Btn from '../components/essence-button/src/button.jsx';

import DataTable from '../components/essence-data-table/src/table.jsx';
import DataTableHeader from '../components/essence-data-table/src/header.jsx';
import DataTableBody from '../components/essence-data-table/src/body.jsx';
import DataTableRow from '../components/essence-data-table/src/row.jsx';
import DataTableColumn from '../components/essence-data-table/src/column.jsx';

import Dialog from '../components/essence-dialog/src/dialog.jsx';
import DialogHeader from '../components/essence-dialog/src/header.jsx';
import DialogContent from '../components/essence-dialog/src/content.jsx';
import DialogFooter from '../components/essence-dialog/src/footer.jsx';

import TouchPad from '../components/essence-touchpad/src/touchpad.jsx';
import Tooltip from '../components/essence-tooltip/src/tooltip.jsx';

import Chip from '../components/essence-chip/src/chip.jsx';
import List from '../components/essence-list/src/list.jsx';
import ListItem from '../components/essence-list/src/item.jsx';

import Image from '../components/essence-image/src/image.jsx';
import Toast from '../components/essence-toast/src/toast.jsx';
import SnackBar from '../components/essence-snackbar/src/snackbar.jsx';

class TouchPadTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	visible: false,
        	position: {
    			start: { top: 0, left: 0},
    			end: { top: 0, left: 0},
    			touchpad: { top: 0, left: 0}
        	},
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    getPosition(event) {
    	var position = this.state.position,
    		mousePosition = this.mousePosition(event);

    	position.start = {left: mousePosition.left, top: mousePosition.top };
    	position.touchpad = { 
    		top: position.start.top, 
    		left: position.start.left
    	};

    	this.setState({
    		position: position
    	});
    }

    mousePosition(event) {
    	var e = event || window.event,
    		pageX = e.pageX,
			pageY = e.pageY;

		if (pageX === undefined) { // IE 8
			pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		return { left: pageX, top: pageY };
    }

    selectedText(event) {
    	var selectedText = window.getSelection().toString();

    	this.getPosition(event);
    	this.setState({
    		visible: selectedText.length > 0 ? true : false
    	});
    }

    render() {
        return (
            <Block>
				<Text 
					className={'e-position-relative'} 
					onMouseUp={this.selectedText.bind(this)} 
				>
					<Text type={'p'}>
						Lorem ipsum dolor sit amet, duo ex malis putent possit, ea dicta vitae intellegat vel, et tamquam integre mei. Debet invidunt ius ei, ex omnesque efficiendi vis, eu elit paulo ullamcorper eam. Probatus explicari ius an, ei diceret noluisse nam, eam modo mandamus no. Vis in iudico percipitur efficiantur, sea ne maiestatis neglegentur. Assum nonumes ei pro. Sit hinc audiam meliore id, tale justo solet vim ex, quodsi molestie cu his.
						Usu eripuit principes voluptatum id, ea sint nostro vis, vel lobortis mnesarchum ex. Ne vix vide dicam delicatissimi, delenit abhorreant usu ut. Vel ne ubique mediocrem adolescens, vis sint possim omnesque id, soleat suscipiantur in eam. Paulo dolor periculis ius no, eum nisl doming corrumpit eu. Modus inermis fastidii vel ad, ei duo vocibus propriae senserit.
						Pri ut labitur debitis consequuntur, no facer lobortis mea. Democritum vituperatoribus eam ei. Ei his adipisci salutandi accommodare. Ex alia possim nam, pro ubique graeco ea. Duo molestie oporteat constituam ad, fabulas postulant corrumpit et eam.
					</Text>
					<Text type={'p'}>
						Eam sonet nihil singulis ex. Eum debet explicari voluptatum te. Vim sumo tritani ea, id agam brute vitae sed, eu labitur vituperatoribus has. Ad erant efficiendi mediocritatem cum, qui porro mucius ea, eu reque facer nec. Molestiae moderatius sit at, et qui veri apeirian. Ne per brute persecuti, ne alterum molestie sadipscing cum. Eu periculis omittantur qui, ei usu fabellas perfecto qualisque.
						Duo ei tale delectus theophrastus, urbanitas mnesarchum has et. Illum quando ex sed, posse perpetua elaboraret et ius. Atqui debet usu ea, no novum alterum eam, at sea dicant urbanitas. Duo nostrum accusata no.
					</Text>
				</Text>
				<TouchPad 
					classes={'e-text-green-500'}
					visible={this.state.visible}
					position={this.state.position.touchpad}
					>
					<Btn type={'touchpad'} label={'copy'} icon={'content-content-copy'} className={'copy'} />
					<Btn type={'touchpad'} label={'paste'} icon={'content-content-paste'} className={'paste'} />
					<Btn type={'touchpad'} label={'redo'} icon={'content-redo'} className={'redo'} />
					<Btn type={'touchpad'} label={'bold'} icon={'editor-format-bold'} className={'bold'} />
					<Btn type={'touchpad'} label={'more'} icon={'navigation-more-vert'} className={'more'} />
					<Btn type={'touchpad'} label={'italic'} icon={'editor-format-italic'} className={'italic'} />
					<Btn type={'touchpad'} label={'undo'} icon={'content-undo'} className={'undo'} />
					<Btn type={'touchpad'} label={'cut'} icon={'content-content-cut'} className={'cut'} />
				</TouchPad>

			</Block>
        );
    }
}

var tableData = {
	'header': [ 
	    {
	    	'name': 'Desert (100g serving)', 
	    	'tooltip': 'Caption for the column Desert (100g serving)',
	    	'onSorting': (function() { console.log('sort by Desert (100g serving)'); })
	    },
	    {
	    	'name': 'Calories', 
	    	'tooltip': 'Caption for the column Calories',
	    	'onSorting': (function() { console.log('sort by Calories'); })
	    },
	    {
	    	'name': 'Fat (g)', 
	    	'tooltip': 'Caption for the column Fat (g)',
	    	'onSorting': (function() { console.log('sort by Fat (g)'); })
	    },
	    {
	    	'name': 'Carbs (g)', 
	    	'tooltip': 'Caption for the column Carbs (g)',
	    	'onSorting': (function() { console.log('sort by Carbs (g)'); })
	    },
	    {
	    	'name': 'Protein (g)', 
	    	'tooltip': 'Caption for the column Protein (g)',
	    	'onSorting': (function() { console.log('sort by Protein (g)'); })
	    },
	    {
	    	'name': 'Sodium (mg)', 
	    	'tooltip': 'Caption for the column Sodium (mg)',
	    	'onSorting': (function() { console.log('sort by Sodium (mg)'); })
	    },
	    {
	    	'name': 'Calcium (%)', 
	    	'tooltip': 'Caption for the column Calcium (%)',
	    	'onSorting': (function() { console.log('sort by Calcium (%)'); })
	    },
	    {
	    	'name': 'Iron (%)', 
	    	'tooltip': 'Caption for the column Iron (%)',
	    	'onSorting': (function() { console.log('sort by Iron (%)'); })
	    },
	],
	'rows': [
		['Frozen yogurt', '159', '6.0', '24', '4.0', '87', '14%', '1%'],
		['Ice cream sandwich', '237', '9.0', '37', '4.3', '129', '8%', '1%'],
		['Eclair', '262', '16.0', '24', '6.0', '337', '6%', '7%'],
		['Cupcake', '305', '16.0', '24', '6.0', '413', '3%', '6%'],
		['Gingerbread', '356', '3.7', '67', '4.3', '413', '3%', '8%'],
		['Jelly bean', '356', '16.0', '94', '4.3', '129', '8%', '16%'],
		['Lollipop', '392', '0.2', '97', '0.0', '50', '0%', '2%'],
		['Honeycomb', '408', '3.2', '87', '0.0', '129', '4%', (
			<Menu type={'cover'}>
				<Input name='input' placeholder='Carja input' counter={true} />
			</Menu>
		)],
		['Donut', '452', '25.0', '51', '4.9', '326', '0%', ([<Text className={'e-left'} key={1}>Item</Text>, <Icon key={2} className={'e-right'} name='communication-contacts' />])],
		['KitKat', '518', '26.0', '65', '7.0', '54', '8%', (<Menu type={'cover'}><Text type={'a'} href='http://www.google.com/' target={'_target'}>Google</Text><Text>Item</Text><Icon name='communication-contacts' /></Menu>)],
		['Input', '518', '26.0', '65', '7.0', '54', '8%', (<Input name='input' placeholder='Carja input' classes={'has-success'} />)]
	],
	'footer': {
		'limit': 5, 
		'total': 100,
		'pagination': {
			'start': 1,
			'end': 10,
			'callback': (function() { console.log('footer change page'); })
		},
		'next': {
			'context': (<Icon name='hardware-keyboard-arrow-right' />),
			'callback': (function() { console.log('footer next page'); })
		}, 
		'prev': {
			'context': (<Icon name='hardware-keyboard-arrow-left' />),
			'callback': (function() { console.log('footer previous page'); })
		}, 
	}
};

class DataTableTest extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	visible: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return(
        	<DataTable data={tableData} />
        );
    }
};

class ButtonTest extends React.Component {
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
        return(
        	<Btn
				{...this.props}
				label={this.props.label || 'Default button'}
				type={this.props.type || 'default'}/>
        );
    }
};

var redbullChip = {
  name: 'redbullChip',
  text: [<strong>Redbull</strong>, <span> (interest)</span>],
  icon: 'R',
  deletable: true,
  onClose: ( function () { console.log('redbullChip chip'); } )
}

var goproChip = {
  name: 'goproChip',
  text: [<strong>GoPRO</strong>, <span> (interest)</span>],
  icon: 'G',
  deletable: true,
  onClose: ( function () { console.log('goproChip chip'); } )
}

class ChipTest extends React.Component {
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
        return(
			<Chip {...this.props} />
		);
    }
};

class ListTest extends React.Component {
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
        return(
			<Block classes={'e-row'}>
				<Block classes={'brick brick-4'}>
					<Text type={'h2'} classes={'e-text-center'}>One line List</Text>
					<List type={'navigation'} classes={"e-background-grey-300"}>
						<ListItem>
							<Text type={'a'} href={'#johnny'}>							

								<Switch type='checkbox' classes = 'e-left' name='radioButton'/>
								<Block classes={'content e-left'}>
									List Controls
								</Block>	
								<Switch type='checkbox' classes = {'e-right'} name='radioButton'/>															
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#bear'}>
								<Switch type='switches' classes = 'e-left' name='switch'/>
								<Block classes={'content e-left'}>
									List Controls
								</Block>
								<Switch type='switches' classes = 'e-right' name='switch'/>								
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#ninja'}>
								<Icon name={'action-stars'} classes={'e-left'} />
								<Block classes={'content e-left'}>
									Mutant Ninja	
								</Block>								
								<Image src='http://i.imgur.com/a7okZb.jpg' alt={'Star Wars'} classes={'e-avatar e-right'}/>
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#pokemon'}>
								<Icon name={'action-stars'} classes={'e-left'} />
								<Block classes={'content e-left'}>
									Pokemon	
								</Block>								
								<Image src='http://i.imgur.com/l0NKIJl.jpg' alt={'Star Wars'} classes={'e-avatar e-right'}/>
							</Text>
						</ListItem>
					</List>
				</Block>
				<Block classes={'brick brick-4'}>
					<Text type={'h2'} classes={'e-text-center'}>Two line List</Text>
					<List type={'navigation'} classes={"e-background-grey-300 e-twolinelist"}>
						<ListItem>
							<Text type={'a'} href={'#johnny'}>
								<Image src='http://i.imgur.com/Ix585.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Johnny Bravo</Text>
									<Text classes={'secondary'}>Jan 9, 2016</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#bear'}>
								<Image src='http://i.imgur.com/xrDnt12.png' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Uncle Bear</Text>
									<Text classes={'secondary'}>Jan 10, 2016</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>							
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#ninja'}>
								<Image src='http://i.imgur.com/a7okZb.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Mutant Ninja</Text>
									<Text classes={'secondary'}>Jan 11, 2016</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>									
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#pokemon'}>
								<Image src='http://i.imgur.com/l0NKIJl.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Pokemon</Text>
									<Text classes={'secondary'}>Jan 11, 2016</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>	
						</ListItem>
					</List>
				</Block>
				<Block classes={'brick brick-4'}>
					<Text type={'h2'} classes={'e-text-center'}>Three line List</Text>
					<List type={'navigation'} classes={"e-background-grey-300 e-threelinelist"}>
						<ListItem>
							<Text type={'a'} href={'#johnny'}>
								<Image src='http://i.imgur.com/Ix585.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Johnny Bravo</Text>
									<Text classes={'secondary'}>Jan 9, 2016</Text>
									<Text classes={'tertiary'}>21:44</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#bear'}>
								<Image src='http://i.imgur.com/xrDnt12.png' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Uncle Bear</Text>
									<Text classes={'secondary'}>Jan 10, 2016</Text>
									<Text classes={'tertiary'}>08:21</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>							
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#ninja'}>
								<Image src='http://i.imgur.com/a7okZb.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Mutant Ninja</Text>
									<Text classes={'secondary'}>Jan 11, 2016</Text>
									<Text classes={'tertiary'}>20:14</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>									
						</ListItem>
						<ListItem>
							<Text type={'a'} href={'#pokemon'}>
								<Image src='http://i.imgur.com/l0NKIJl.jpg' alt={'Star Wars'} classes={'e-avatar e-left'}/>		
								<Block classes={'content e-left'}>
									<Text classes={'primary'}>Pokemon</Text>
									<Text classes={'secondary'}>Jan 11, 2016</Text>
									<Text classes={'tertiary'}>22:58</Text>
								</Block>	
								<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
							</Text>	
						</ListItem>
					</List>
					
				</Block>
			</Block>
        );
    }
};

class AppBarTest extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	search: false,
        	toast: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    renderSearch() {
    	if (this.state.search) {
    		return (
    			<Input
    				type={'search'}
					name='search-input'
					placeholder='Search...'
					classes={'e-no-margin e-text-white e-left'}/>
			);
    	}

    	return '';
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
    	var searchStatus = !this.state.search;

    	this.setState({
    		search: searchStatus
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

				<ButtonTest className={'flat e-background-cyan-400 e-text-white e-left'} type={'primary'} icon={'navigation-menu'}/>

				<Text className={'e-text-white'}>Essence - test</Text>

				<Menu type={'cover'} icon={'navigation-more-vert'} classes={'e-right e-text-white e-background-cyan-400'}>
					<Text classes={'e-text-black'}>Profile</Text>
					<Text classes={'e-text-black'}>Settings</Text>
					<Text classes={'e-text-black'}>Logout</Text>
				</Menu>
				
				<Block className={'e-right'}>
					{this.renderToast()}
					<ButtonTest onClick={this.toggleToast.bind(this)} className={'flat e-background-cyan-400 e-text-white e-right'} type={'primary'} icon={'action-favorite'}/>
				</Block>
				
				<Block className={'e-right'}>
					{this.renderSearch()}
					<ButtonTest onClick={this.toggleSearch.bind(this)} className={'flat e-background-cyan-400 e-text-white e-right'} type={'primary'} icon={'action-search'}/>
				</Block>
				
			</AppBar>
        );
    }
};

class TextfieldTest extends React.Component {
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
        return(
			<Input
				name='input'
				placeholder='Disabled input'
				classes={'has-success'}
			/>
        );
    }
};


ReactDOM.render(
	<Block classes={'brick brick-12'}>
		<AppBarTest />

		<TouchPadTest />

		<TextfieldTest />

		<ButtonTest className={'raised e-background-yellow-500 e-text-red-500'} label={'buton'} type={'primary'} />
		<ButtonTest 
			className={'raised e-text-red-500'} 
			tooltip={'This is a default tooltip button'} 
			label={['buton tooltip', <Tooltip key={'tooltip-1'} text={'Default tooltip'} visible={true} />]} 
			type={'primary'} />
		<Block>
			<ChipTest data={redbullChip}/>
			<ChipTest data={goproChip} />
		</Block>

		<ListTest />	
		<DataTableTest />
	</Block>
	,
	document.querySelector('.app')
);