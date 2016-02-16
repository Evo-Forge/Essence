# Essence BottomSheet - BottomSheet component

Options:
- visible: `true` - show the bottom sheet & `false` (**default**) - hide the bottom sheet
- onStart: callback function when the BottomSheet has toggled **visible** to `true`
- onEnd: callback function when the BottomSheet has toggled **visible** to `false`

### How to use

**Bottom sheets simple**
```js
import BottomSheets from 'essence-bottomsheet';

<BottomSheets className={'e-background-white'} visible={true}>
 <Block >
  <List type={'navigation'}>
   <ListItem>
    <Text type={'a'} href={'#item 1'}>
     <Icon name={'social-share'} />
     Share
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 2'}>
     <Icon name={'file-file-upload'} />
     Upload
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 3'}>
     <Icon name={'content-content-copy'} />
     Copy
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 4'}>
     <Icon name={'action-print'} />
     Print this page
    </Text>
   </ListItem>
  </List>
 </Block>
</BottomSheets>
```

**Bottom sheets big icons**
```js
import BottomSheets from 'essence-bottomsheet';

<BottomSheets classes={'e-background-white big-icons'} visible={true}>
 <Block>
  <List type={'navigation'}>
   <ListItem>
    <Text type={'a'} href={'#item 1'}>
     <Icon name={'social-share'} />
     Share
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 2'}>
     <Icon name={'file-file-upload'} />
     Upload
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 3'}>
     <Icon name={'content-content-copy'} />
     Copy
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 4'}>
     <Icon name={'action-print'} />
     Print 
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 5'}>
     <Icon name={'communication-email'} />
     Mail
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 6'}>
     <Icon name={'communication-message'} />
     Message
    </Text>
   </ListItem>
   <ListItem>
    <Text type={'a'} href={'#item 7'}>
     <Icon name={'av-loop'} />
     Loop 
    </Text>
   </ListItem>
  </List>
 </Block>
</BottomSheets>
```
