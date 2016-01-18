import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '../components/essence-appbar/src/appbar.jsx';
import Text from '../components/essence-core/src/text/text.jsx';
import Block from '../components/essence-core/src/block/block.jsx';
import Icon from '../components/essence-icon/src/icon.jsx';
import Switch from '../components/essence-switch/src/switch.jsx';

import DataTable from '../components/essence-data-table/src/table.jsx';
import DataTableHeader from '../components/essence-data-table/src/header.jsx';
import DataTableBody from '../components/essence-data-table/src/body.jsx';
import DataTableRow from '../components/essence-data-table/src/row.jsx';
import DataTableColumn from '../components/essence-data-table/src/column.jsx';

ReactDOM.render(
	<Block>
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
	</Block>

	,
	document.querySelector('.app')
);