# Essence BottomSheet - BottomSheet component.

Options:
- visible: `true` - show the bottom sheet
- visible: `false` (**default**) - hide the bottom sheet

### How to use

#Bottom sheets simple

```jsx
<BottomSheets classes={'e-background-white'} visible={true}>
		<Block >
			<List type={'navigation'}>
				<ListItem>
					
					<Text type={'a'} href={'#item 1'}>
						<Icon name={'social-share'} />
						Share
					</Text>
				</ListItem>
				<ListItem>					
					<Text type={'a'} href={'#item 2'}>
						<Icon name={'file-file-upload'} />
						Upload
					</Text>
				</ListItem>
				<ListItem>					
					<Text type={'a'} href={'#item 3'}>
						<Icon name={'content-content-copy'} />
						Copy
					</Text>
				</ListItem>
				<ListItem>					
					<Text type={'a'} href={'#item 4'}>
						<Icon name={'action-print'} />
						Print this page
					</Text>
				</ListItem>
			</List>
		</Block>

	</BottomSheets>
```

#Bottom sheets big icons

```jsx
	<BottomSheets classes={'e-background-white big-icons'} visible={true}>
		<Block >
			<List type={'navigation'}>
				<ListItem>
					
					<Text type={'a'} href={'#item 1'}>
						<Icon name={'social-share'} />
						Share
					</Text>
				</ListItem>
				<ListItem>					
					<Text type={'a'} href={'#item 2'}>
						<Icon name={'file-file-upload'} />
						Upload
					</Text>
				</ListItem>
				<ListItem>					
					<Text type={'a'} href={'#item 3'}>
						<Icon name={'content-content-copy'} />
						Copy
					</Text>
				</ListItem>
				<ListItem>					
					<Text type={'a'} href={'#item 4'}>
						<Icon name={'action-print'} />
						Print 
					</Text>
				</ListItem>
				<ListItem>					
					<Text type={'a'} href={'#item 5'}>
						<Icon name={'communication-email'} />
						Mail
					</Text>
				</ListItem>
				<ListItem>					
					<Text type={'a'} href={'#item 6'}>
						<Icon name={'communication-message'} />
						Message
					</Text>
				</ListItem>
				<ListItem>					
					<Text type={'a'} href={'#item 7'}>
						<Icon name={'av-loop'} />
						Loop 
					</Text>
				</ListItem>
			</List>
		</Block>

	</BottomSheets>
```
