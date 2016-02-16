# Essence Data Table - Data Table component

Options:
- data: an object list with keys: `header`, `rows`, `footer`
- header: an object list with keys: `name`, `tooltip`, `onSorting` callback
- rows: an array list with the same number of columns as from header
- footer: an object list with keys: `limit`, `total`, `pagination` with callback, `next` with context (icon) & callback, `prev` with context (icon) & callback

### How to use
```js
import DataTable from 'essence-data-table';

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
```