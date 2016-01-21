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

ReactDOM.render(
	<Block classes={'brick brick-12'}>
		<TouchPadTest />
		<ButtonTest className={'raised e-background-yellow-500 e-text-red-500'} label={'buton'} type={'primary'} />
		<DataTableTest />
	</Block>
	,
	document.querySelector('.app')
);