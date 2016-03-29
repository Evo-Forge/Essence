# Essence Tab - Tab component

#### Options:
- data: an object list with keys: `header`, `rows`, `footer`
- header: an object list with keys: `context` & `callback` callback function
- rows: an array list with the same number of columns as from header
- indicator: the class color for tab header indicator


### How to use
```js
import Tab from 'essence-tab';

var tabData = {
  'header': [
    {
      'context': (<Text>Tab 1</Text>)
    },
    {
      'context': (<Text>Tab 2</Text>)
    },
    {
      'context': (<Text>Tab with callback alert</Text>),
      'callback': ( function() { alert('Hey you'); } )
    },
    {
      'context': (<Text>Tab with callback with link</Text>),
      'callback': ( function() { window.open('http://www.google.com/', '_blank'); })
    }
  ],
  'rows': [
    (<Text>This is the context for Tab 1</Text>),
    (<Text>This is the context for Tab 2</Text>),
    (<Text>This is the context for Tab with callback alert</Text>),
    (<Text>This is the context for Tab with callback link</Text>)
  ]
};

class TabTest extends React.Component {
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
      <Tab
        data={tabData}
        classes={'e-background-cyan-500 e-text-grey-50'}
        indicator={'e-background-red-500'}/>
    );
  }
};
```