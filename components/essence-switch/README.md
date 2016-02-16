# Essence Switch - Switch component

#### Options:
- type: `switches`, `radio`, `checkbox` (**default**)
- text: `string` for checkbox label
- beforeText: `string` for switches position on left side
- afterText: `string` for switches position on right side
- onChange: callback function on Switch value change

**NOTE**: all props will be transferred from Switch to component input

### How to use
```js
import Switch from 'essence-switch';

<Switch type={'checkbox'} text={'Default checkbox'} name={'switch-uncheckbox'} />
<Switch type={'radio'} text={'1st option'} name={'switch-radio'} />
<Switch type={'radio'} text={'2nd option'} name={'switch-radio'} />
<Switch type={'switches'} afterText={'ON'} beforeText={'OFF'} name={'switch-switches'} />
```