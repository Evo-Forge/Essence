import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '../components/essence-appbar/src/appbar.jsx';
import Text from '../components/essence-core/src/text/text.jsx';
import Block from '../components/essence-core/src/block/block.jsx';
import Icon from '../components/essence-icon/src/icon.jsx';
import Switch from '../components/essence-switch/src/switch.jsx';
import Input from '../components/essence-input/src/input.jsx';

import DataTable from '../components/essence-data-table/src/table.jsx';
import DataTableHeader from '../components/essence-data-table/src/header.jsx';
import DataTableBody from '../components/essence-data-table/src/body.jsx';
import DataTableRow from '../components/essence-data-table/src/row.jsx';
import DataTableColumn from '../components/essence-data-table/src/column.jsx';

var tableData = {
	'header': [ 
	    {'name': 'Desert (100g serving)', 'tooltip': 'Caption for the column Desert (100g serving)'},
	    {'name': 'Calories', 'tooltip': 'Caption for the column Calories'},
	    {'name': 'Fat (g)', 'tooltip': 'Caption for the column Fat (g)'},
	    {'name': 'Carbs (g)', 'tooltip': 'Caption for the column Carbs (g)'},
	    {'name': 'Protein (g)', 'tooltip': 'Caption for the column Protein (g)'},
	    {'name': 'Sodium (mg)', 'tooltip': 'Caption for the column Sodium (mg)'},
	    {'name': 'Calcium (%)', 'tooltip': 'Caption for the column Calcium (%)'},
	    {'name': 'Iron (%)', 'tooltip': 'Caption for the column Iron (%)'},
	],
	'rows': [
		['Frozen yogurt', '159', '6.0', '24', '4.0', '87', '14%', '1%'],
		['Ice cream sandwich', '237', '9.0', '37', '4.3', '129', '8%', '1%'],
		['Eclair', '262', '16.0', '24', '6.0', '337', '6%', '7%'],
		['Cupcake', '305', '16.0', '24', '6.0', '413', '3%', '6%'],
		['Gingerbread', '356', '3.7', '67', '4.3', '413', '3%', '8%'],
		['Jelly bean', '356', '16.0', '94', '4.3', '129', '8%', '16%'],
		['Lollipop', '392', '0.2', '97', '0.0', '50', '0%', '2%'],
		['Honeycomb', '408', '3.2', '87', '0.0', '129', '4%', '45%'],
		['Donut', '452', '25.0', '51', '4.9', '326', '0%', '22%'],
		['KitKat', '518', '26.0', '65', '7.0', '54', '8%', '6%'],
		['Input', '518', '26.0', '65', '7.0', '54', '8%', (<Input name='input' placeholder='Carja input' classes={'has-success'} />)]
	]
};

ReactDOM.render(
	<Block classes={'brick brick-12'}>
		<DataTable data={tableData} />
		{/*
		<DataTable>
			<DataTableHeader classes={'e-text-grey-400'}>
				<DataTableRow>
					<DataTableColumn>
						<Switch
							type='checkbox'
							name='column'
							defaultValue='radio-value'
						/>
					</DataTableColumn>
					<DataTableColumn>
						Column 1
					</DataTableColumn>
					<DataTableColumn>
						Column 2
					</DataTableColumn>
					<DataTableColumn>
						Column 3
					</DataTableColumn>
				</DataTableRow>
			</DataTableHeader>

			<DataTableBody classes={'e-text-grey-700'}>
				<DataTableRow>
					<DataTableColumn>
						<Switch
							type='checkbox'
							name='column'
							defaultValue='radio-value'
						/>
					</DataTableColumn>
					<DataTableColumn>Row 1 Column 1</DataTableColumn>
					<DataTableColumn>Row 1 Column 2</DataTableColumn>
					<DataTableColumn>Row 1 Column 3</DataTableColumn>
				</DataTableRow>
				<DataTableRow>
					<DataTableColumn>
						<Switch
							type='checkbox'
							name='column'
							defaultValue='radio-value'
						/>
					</DataTableColumn>
					<DataTableColumn>Row 2 Column 1</DataTableColumn>
					<DataTableColumn>Row 2 Column 2</DataTableColumn>
					<DataTableColumn>Row 2 Column 3</DataTableColumn>
				</DataTableRow>
				<DataTableRow>
					<DataTableColumn>
						<Switch
							type='checkbox'
							name='column'
							defaultValue='radio-value'
						/>
					</DataTableColumn>
					<DataTableColumn>Row 3 Column 1</DataTableColumn>
					<DataTableColumn>Row 3 Column 2</DataTableColumn>
					<DataTableColumn>Row 3 Column 3</DataTableColumn>
				</DataTableRow>
			</DataTableBody>
		</DataTable>
		*/}
	</Block>

	,
	document.querySelector('.app')
);