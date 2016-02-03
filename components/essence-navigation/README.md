# Essence Navigation - Navigation component

Options:
- visible: `true` - show the bottom sheet
- visible: `false` (**default**) - hide the bottom sheet

### How to use
```js
import Navigation from 'essence-navigation/src/navigation.jsx';

<Navigation visible={true}>
	<Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
		<Block type={'header'} classes={'e-nav-header'}>
			<Text>Navigation header</Text>
		</Block>
		<List type={'navigation'}>
			<ListItem>
				<Text type={'a'} href={'#item 1'}>
					List item 1
				</Text>
			</ListItem>
			<ListItem>
				<Text type={'a'} href={'#item 2'}>
					List item 2
				</Text>
			</ListItem>
			<ListItem>
				<Text type={'a'} href={'#item 3'}>
					List item 3
				</Text>
			</ListItem>
		</List>
		<Block type={'footer'} classes={'e-nav-footer'}>
			Navigation footer
		</Block>
	</Block>
</Navigation>
```