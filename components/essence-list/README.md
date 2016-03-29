# Essence List - List component

#### Option:
- type: string from the list `navigation` or `big-icon`

### How to use
```js
import {List, ListItem} from 'essence-list';

<List type={'navigation'}>
 <ListItem>
  <Text type={'a'} href={'#list-1'}>
   <Block classes={'content e-left'}>List 1</Block>
  </Text>
 </ListItem>
 <ListItem>
  <Text type={'a'} href={'#list-2'}>
   <Block classes={'content e-left'}>List 2</Block>
  </Text>
 </ListItem>
 <ListItem>
  <Text type={'a'} href={'#list-3'}>
   <Block classes={'content e-left'}>List 3</Block>
  </Text>
 </ListItem>
</List>
```