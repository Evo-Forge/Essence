# Essence Progress - Progress component

#### Options:
- **color** - string from Colors list for the indicator color
- **small** - `true` or `false` with type: circle will render a small circle visualization 
- **type**:
1. `slider`: appends "slider" to the class name `e-progress-slider`
2. `circle`: appends "circle" to the class name `e-progress-circle`
3. `dots`: appends "dots" to the class name `e-progress-dots`
4. `fix`: appends "fix" to the class name `e-progress-fix`
5. `dynamic`: appends "dynamic" to the class name `e-progress-dynamic`

### How to use
```js
import Progress from 'essence-progress';

<Progress type={'circle'} />
<Progress type={'circle'} small={true> />
<Progress type={'dots'} />
<Progress type={'slider'} />
<Progress type={'fix'} />
<Progress type={'dynamic'} />
```