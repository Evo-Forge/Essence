# Essence Tooltip - Tooltip component

Options:
- target: `string` - target ID or element class name or element tag
- visible: `true` - show the tooltip
- visible: `false` (**default**) - hide the tooltip

### How to use
```js
import Tooltip from 'essence-tooltip';

<Tooltip target={'#tooltipButton'} visible={true}>
	Button tooltip
</Tooltip>

<Tooltip target={'.buttonTooltip'} visible={true}>
	Button tooltip
</Tooltip>

<Tooltip target={'button'} visible={true}>
	Button tooltip
</Tooltip>

```