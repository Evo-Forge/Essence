# Essence Slider - Slider component.

Options
- `start`: integer value to set the initial value - values: **0** to **100**
- `fill`: return a colored track to indicate the current value position
- `discrete`: **true** it uses the "discrete" class name to render a indicator for the current value
- `disabled`: **true** it uses the "disabled" class name to render a non-editable component

### How to use
```jsx
<Slider discrete={true} step={10} />
```