# Essence Chip - Chip component

### How to use

Options:
- **data**: object with properties:
- **name**: string for input name, default: chip
- **text**: string or html or component
- **icon**: string or image url
- **deletable**: boolean ( **true** or **false** ) - default: **false**
- **onClose**: callback for on closing chip component
- **iconColor**: string from the Colors list

**NOTE**: use the example below to customize your own chips

```js
import Chip from 'essence-chip';

var redbullChip = {
  name: 'redbullChip',
  text: [<strong>Redbull</strong>, <span> (interest)</span>],
  icon: 'R',
  deletable: true,
  onClose: ( function () { console.log('redbullChip chip'); } )
}

var goproChip = {
  name: 'goproChip',
  text: [<strong>GoPRO</strong>, <span> (interest)</span>],
  icon: 'G',
  deletable: true,
  onClose: ( function () { console.log('goproChip chip'); } )
}

class ChipTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ClassNames(
        this.props.classes,
        this.props.className
      )
    };
  }

  render() {
    return (
      <Chip {...this.props} />
    );
  }
};

<Block>
  <ChipTest data={redbullChip} iconColor='e-background-indigo-400' />
  <ChipTest data={goproChip} />
</Block>
```