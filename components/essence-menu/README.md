# Essence Menu - Menu component

#### Options:
- type: `string` from selected list: `fab` or `cover`
- placeholder: `string` for initial menu text
- icon: `icon name` from the Icons list

### How to use
```js
import Menu from 'essence-menu';

<Menu type={'cover'} icon={'navigation-more-vert'} classes={'e-right e-text-white e-background-cyan-400'}>
  <Text classes={'e-text-black'}>Profile</Text>
  <Text classes={'e-text-black'}>Settings</Text>
  <Text classes={'e-text-black'}>Logout</Text>
</Menu>
```