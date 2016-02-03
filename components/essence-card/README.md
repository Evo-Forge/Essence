# Essence Card - Card component

### How to use
```js
import Card from 'essence-card/src/card.jsx';
import CardHeader from 'essence-card/src/header.jsx';
import CardContent from 'essence-card/src/content.jsx';
import CardFooter from 'essence-card/src/footer.jsx';

<Card>
	<CardHeader>
		Card header
	</CardHeader>
	<CardContent classes={'card-supporting-text e-text-blue-grey-400'}>
		Card content
	</CardContent>
	<CardFooter>
		Card footer with action buttons
	</CardFooter>
</Card>
```