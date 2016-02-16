# Essence Button - Button component

#### Options:
- icon: name of icon
- label: the text of the button
- submit: `false` (**default**) or `true` - set type to `submit` or `button`
- onClick: callback function on click event

**NOTE**: all props will be transferred from Btn to component button

#### Ripple effect:
- ripple: `true` (**default**) - enable ripple effect & `false` - disable ripple effect

### How to use
```js
import Btn from 'essence-button';

{/* Flat buttons */}
<Btn classes={'flat e-background-white e-text-red-500'} label={'Custom button'} />
<Btn classes={'flat'} label={'Default button'} type={'default'} />
<Btn classes={'flat'} label={'Primary button'} type={'primary'} />
<Btn classes={'flat'} label={'Succes button'} type={'succes'} />
<Btn classes={'flat'} label={'info button'} type={'info'} />
<Btn classes={'flat'} label={'warning button'} type={'warning'} />
<Btn classes={'flat'} label={'danger button'} type={'danger'} />

{/* Fab buttons */}
<Btn classes={'fab e-text-red-400 e-background-yellow-500'} icon={'social-plus-one'} type={'default'} />
<Btn classes={'fab'} icon={'social-plus-one'} type={'default'} />
<Btn classes={'fab'} icon={'social-plus-one'} type={'primary'} />
<Btn classes={'fab'} icon={'social-plus-one'} type={'succes'} />
<Btn classes={'fab'} icon={'social-plus-one'} type={'info'} />
<Btn classes={'fab'} icon={'social-plus-one'} type={'warning'} />
<Btn classes={'fab'} icon={'social-plus-one'} type={'danger'} />

{/* Fab buttons */}
<Btn classes={'fab-mini e-text-red-400 e-background-yellow-500'} icon={'editor-mode-edit'} type={'default'} />
<Btn classes={'fab-mini'} icon={'editor-mode-edit'} type={'default'} />
<Btn classes={'fab-mini'} icon={'editor-mode-edit'} type={'primary'} />
<Btn classes={'fab-mini'} icon={'editor-mode-edit'} type={'succes'} />
<Btn classes={'fab-mini'} icon={'editor-mode-edit'} type={'info'} />
<Btn classes={'fab-mini'} icon={'editor-mode-edit'} type={'warning'} />
<Btn classes={'fab-mini'} icon={'editor-mode-edit'} type={'danger'} />

{/* Raised buttons */}
<Btn classes={'raised e-background-yellow-500 e-text-red-500'} label={'Custom button'} type={'default'} />
<Btn classes={'raised'} label={'Default button'} type={'default'} />
<Btn classes={'raised'} label={'Primary button'} type={'primary'} />
<Btn classes={'raised'} label={'Succes button'} type={'succes'} />
<Btn classes={'raised'} label={'info button'} type={'info'} />
<Btn classes={'raised'} label={'warning button'} type={'warning'} />
<Btn classes={'raised'} label={'danger button'} type={'danger'} />
```