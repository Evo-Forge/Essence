# Essence Input - Input component

Options:
- placeholder: `string` for a placeholder text
- label: `string` for a label text which will float above the input when text is typed
- hint: `string` for a hint text which will show below the input as an informative text
- counter: `integer` for limit the input value length, also it will show the current / maximum value length
- disabled: prop for disabling the input 

**NOTE**: all props will be transferred from `Input` component

### How to use
```js
import Input from 'essence-input';

<Input name={'input'} placeholder='Standard input' classes={'has-success'}/>
<Input name={'input'} placeholder='Counter input' classes={'has-error'} counter={50}/>
<Input name={'input'} label='This label will float' classes={'has-success'}/>
<Input name={'input'} disabled={true} placeholder='Disabled input' classes={'has-success'}/>
<Input name={'textarea'} placeholder='Textarea' classes={'has-success'}/>
```