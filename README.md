#[Essence](http://essence.pearlhq.com/) - The Essential Material Design Framework

### About Essence
Essence is a CSS framework that implements the guidelines from [Google Material Design Specification](https://www.google.com/design/spec/material-design/introduction.html) using Facebook's [react.js library](https://facebook.github.io/react/). Use it to easily build super-fast and great looking web & mobile interfaces.

See [here](http://essence.pearlhq.com/) what you can build with Essence and how to do it. We've got several examples that will help you get started.

### Installation
```bash
npm install react-essence@latest
```

### Usage example:
```javascript
import { Btn, BtnItem, Icon, Block, Text } from 'react-essence';
```

```jsx
<Block type='div' classes={'brick brick-6'}>

	<Text type='h2' classes={"e-display-1 e-text-blue-700"}>Some title</Text>
	<Block type='div' classes={'e-text-grey-400 e-caption'}>
		<Text>Some text</Text>
	</Block>

	<Block type='div' classes={'brick brick-6 e-text-right e-padding-top-15'}>
		<BtnItem
			classes={'raised e-background-pink-A200'}
			onClick={this.yourActionOnClick}
			label='Button 1'/>

		<BtnItem
			classes={'raised e-background-pink-A200'}
			onClick={this.yourActionOnClick}
			label='Button 2'/>
	</Block>
</Block>
```

### About Us
We are a team of front end developers with extensive experience in building highly desirable products for both large companies and startups alike here at [Pearl HQ](http://www.pearlhq.com/).

We're very fond of our UI/UX craft and we're constantly creating tools that allow us to work smarter and faster. Essence is one of those tools and we're happy to release it as open-source.

### License
Essence is [MIT licensed](./LICENSE).

Essence documentation is [Creative Commons licensed](./LICENSE-docs).

### TO DO - Tasks
- [x] Essence Native NPM Package
- [x] Essence NPM Package
- [ ] Essence Bower Package
- [ ] Essence Native Bower Package
- [ ] Essence test suite
- [ ] style inline option for Essence components
