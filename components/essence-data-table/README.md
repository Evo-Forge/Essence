# Essence Data Table - Data Table component.

Options:
- sort: `true` - sortable datatable
- sort: `false` (**default**) - hide the sortable datatable

### How to use
```jsx
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
```