# Essence Button - Button component.

Options:
- icon: name of icon
- label: the text of the button
- tooltipText: data-tooltip text
- tooltipPosition: data-position of the tooltip text
- submit: `false` (**default**) or `true` - set type to `submit` or `button`

Ripple effect:
- ripple: `true` (**default**) - enable ripple effect
- ripple: `false` - disable ripple effect

### How to use
```jsx
<Btn
	classes={'flat e-text-indigo-400'}
	label='Indigo button'
	type='default'
/>
```