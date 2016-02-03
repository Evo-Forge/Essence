# Essence Dialog - Dialog component

Options:
- visible: boolean value with `true` for visible and `false` for hidden

### How to use
```js
import Dialog from 'essence-dialog/src/dialog.jsx';
import DialogHeader from 'essence-dialog/src/header.jsx';
import DialogContent from 'essence-dialog/src/content.jsx';
import DialogFooter from 'essence-dialog/src/footer.jsx';

<Dialog visible={true}>
	<DialogHeader>
		Dialog header
	</DialogHeader>
	<DialogContent>
		Dialog content
	</DialogContent>
	<DialogFooter>
		Dialog footer
	</DialogFooter>
</Dialog>
```