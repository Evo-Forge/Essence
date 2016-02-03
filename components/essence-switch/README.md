# Essence Switch - Switch component

Options:
- type: `switches`, `radio`, `checkbox` (**default**)
- text: string for checkbox label
- beforeText: string for switches position on left side
- afterText: string for switches position on right side

### How to use
```js
import Switch from 'essence-switch/src/switch.jsx';

<Switch type='checkbox' classes = {'e-left'} name='switch-checkbox'/>
<Switch type='radio' text='Checkbox Radio' name='switch-radio' checked={true} />
```