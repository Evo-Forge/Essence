# Essence Navigation - Navigation component

**Options**:
- visible: boolean value with `true` for visible and `false` for hidden
- onOpen: callback function when Navigation component has **visible** toggled to `true`
- onClose: callback function when Navigation component has **visible** toggled to `false`
- dismissible: `true` or `false` to toggle the **visible** prop when clicked on the overlay

### How to use
```js
import Navigation from 'essence-navigation';

<Navigation visible={true} dismissible={false} onOpen={this.onOpenCallback.bind(this)} onClose={this.onCloseCallback.bind(this)}>
 <Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
  <Block type={'header'} classes={'e-nav-header'}>
   <Text>Navigation header</Text>
  </Block>
  <List type={'navigation'}>
   <ListItem>
    <Text type={'a'} href={'#item 1'}>
     List item 1
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 2'}>
     List item 2
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 3'}>
     List item 3
    </Text>
   </ListItem>
  </List>
  <Block type={'footer'} classes={'e-nav-footer'}>
   Navigation footer
  </Block>
 </Block>
</Navigation>
```