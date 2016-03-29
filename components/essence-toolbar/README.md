# Essence ToolBar - ToolBar component

**Options**:
- **floating**: boolean - default `false`
- **bottom**: boolean - default `false`
- **noShadow**: boolean - default `false`

### How to use
```js
import ToolBar from 'essence-toolbar';

class ToolBarTest extends React.Component {
  render() {
    return(
      <div>
        <ToolBar>This is a simple toolbar</ToolBar>
        <ToolBar floating={true}>This is a floating toolbar</ToolBar>
        <ToolBar bottom={true}>This is a bottom fixed toolbar</ToolBar>
        <ToolBar noShadow={true}>This is a toolbar without shadow</ToolBar>
      </div>
    );
  }
};
```