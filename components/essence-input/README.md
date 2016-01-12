# Essence Input - Input component.

Options:
- `id`: optional to set the id attribute for the InputItem tag
- `type`: `text` (**default**), other type: `textarea`, `email`, `search`, `number`
- `name`: required to set the Input name attribute
- `label`: optional to set the Input placeholder attribute
- `placeholder`: optional to set the Input placeholder attribute
- `disabled`: if set to true it uses the "disabled" input attribute
- `counter`: if set to an integer value will set the maximum limit of characters
- `hint`: a text explaining what this input is about
- use the examples from above to structure your own Text field

### How to use
```jsx
<Input
    name='input'
    disabled={true}
    placeholder='Disabled input'
    classes={'has-success'}
/>
```