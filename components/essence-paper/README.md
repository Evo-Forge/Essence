# Essence Paper - Paper component

#### Option:
- type: `paper type` from Paper list (`sharp` or `circle`), as default there is no `type`

### How to use
```js
import Paper from 'essence-paper';

/* Simple Paper */
<Paper className={'e-text-blue-400 e-background-white'}>
 <Text type={'small'}>Paper</Text>
</Paper>

/* Paper Sharp */
<Paper type={'sharp'} className={'e-text-yellow-600 e-background-white'}>
 <Text type={'small'}>Sharp</Text>
</Paper>

/* Paper Circle */
<Paper type={'circle'} className={'e-text-red-400 e-background-white'}>
 <Text type={'small'}>Circle</Text>
</Paper>
```