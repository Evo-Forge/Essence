# Essence Dialog - Dialog component

**Options**:
- visible: boolean value with `true` for visible and `false` for hidden
- onOpen: callback function when Dialog component has **visible** toggled to `true`
- onClose: callback function when Dialog component has **visible** toggled to `false`
- dismissible: `true` or `false` to toggle the **visible** prop when clicked on the overlay

### How to use
```js
import Btn from 'essence-button';
import {Dialog, DialogHeader, DialogContent, DialogFooter} from 'essence-dialog';

showDialog() {
 this.setState({ open: true });
}

hideDialog() {
 this.setState({ open: false });
}

dialogClosed() {
 console.log('dialogClosed');
}

dialogOpened() {
 console.log('dialogOpened');
}

<Dialog visible={true} dismissible={false} onOpen={this.dialogOpened.bind(this)} onClose={this.dialogClosed.bind(this)}>
 <DialogHeader className={'e-text-right'}>
  <Btn icon={'navigation-close'} onClick={this.hideDialog.bind(this)} className={'flat e-background-white'} />
 </DialogHeader>

 <DialogContent>
  This is the Dialog content
 </DialogContent>

 <DialogFooter>
  <Btn type={'succes'} label={'OK'} className={'flat'} />
  <Btn type={'info'} label={'Cancel'} onClick={this.hideDialog.bind(this)} className={'flat'} />
 </DialogFooter>
</Dialog>
```