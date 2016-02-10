import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Icon from 'essence-icon';
import DataTable from 'essence-data-table';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

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
		['Honeycomb', '408', '3.2', '87', '0.0', '129', '4%', '2%'],
		['Donut', '452', '25.0', '51', '4.9', '326', '0%', '1%'],
		['KitKat', '518', '26.0', '65', '7.0', '54', '8%', '4%'],
		['Input', '518', '26.0', '65', '7.0', '54', '8%', '6%']
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

class AppDataTable extends React.Component {
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
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>DATA TABLE</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
							<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
								Data tables display raw data sets. They usually appear in desktop enterprise products.
							</Text>
		        		</CardHeader>

		        		<CardContent>
			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-padding-bottom-25')}>
									<DataTable data={tableData} />
								</Block>
		        			</Block>
			        		<Divider />

		        			<Block>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										npm install <strong>essence-data-table</strong>
			        				</code>
		        				</pre>

		        				<Text classes={'e-body1 e-text-blue-grey-400'}>
		        					Use the example bellow to customize your own App.
		        				</Text>

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import Icon from 'essence-icon';
										<br />
										import DataTable from 'essence-data-table';
										<br />
										<br />
										var tableInfo = &#123;
										<br />
										&nbsp;&nbsp;'header': [ 
										<br />
										&nbsp;&nbsp;&nbsp;&#123;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;'name': 'Column 1', 
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;'tooltip': 'Caption for the column 1',
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;'onSorting': (function() &#123; console.log('sort by Column 1'); &#125;)
										<br />
										&nbsp;&nbsp;&nbsp;&#125;,
										<br />
										&nbsp;&nbsp;&nbsp;&#123;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;'name': 'Column 2', 
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;'tooltip': 'Caption for the column 2',
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;'onSorting': (function() &#123; console.log('sort by Column 2'); &#125;)
										<br />
										&nbsp;&nbsp;&nbsp;&#125;
										<br />
										&nbsp;&nbsp;],
										<br />
										&nbsp;&nbsp;'rows': [
										<br />
										&nbsp;&nbsp;&nbsp;['Row 1 Column 1', 'Row 1 Column 2'],
										<br />
										&nbsp;&nbsp;&nbsp;['Row 2 Column 1', 'Row 2 Column 2'],
										<br />
										&nbsp;&nbsp;&nbsp;['Row 3 Column 1', 'Row 3 Column 2']
										<br />
										&nbsp;&nbsp;],
										<br />
										&nbsp;&nbsp;'footer': &#123;
										<br />
										&nbsp;&nbsp;&nbsp;'limit': 5, 
										<br />
										&nbsp;&nbsp;&nbsp;'total': 100,
										<br />
										&nbsp;&nbsp;&nbsp;'pagination': &#123;
										<br />
										&nbsp;&nbsp;&nbsp;'start': 1,
										<br />
										&nbsp;&nbsp;&nbsp;'end': 10,
										<br />
										&nbsp;&nbsp;&nbsp;'callback': (function() &#123; console.log('footer page change'); &#125;)
										<br />
										&nbsp;&nbsp;&#125;,
										<br />
										&nbsp;&nbsp;'next': &#123;
										<br />
										&nbsp;&nbsp;&nbsp;'context': (&lt;Icon name='hardware-keyboard-arrow-right' /&gt;),
										<br />
										&nbsp;&nbsp;&nbsp;'callback': (function() &#123; console.log('footer next page'); &#125;)
										<br />
										&nbsp;&nbsp;&#125;, 
										<br />
										&nbsp;&nbsp;'prev': &#123;
										<br />
										&nbsp;&nbsp;&nbsp;'context': (&lt;Icon name='hardware-keyboard-arrow-left' /&gt;),
										<br />
										&nbsp;&nbsp;&nbsp;'callback': (function() &#123; console.log('footer previous page'); &#125;)
										<br />
										&nbsp;&nbsp;&nbsp;&#125;, 
										<br />
										&nbsp;&nbsp;&#125;
										<br />
										&#125;;
										<br />
										<br />
										&lt;DataTable data=&#123;tableInfo&#125;/&gt;
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

exports.AppDataTable = AppDataTable;