# Essence Card - Card component

#### Option:
- `classes` or `className`: css style class name

**NOTE**: CardHeader, CardContent or CardFooter can be use or ignored as a child in Card component

### How to use
```js
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

<Card>
 <CardHeader> Card header </CardHeader>
 <CardContent classes={'card-supporting-text e-text-blue-grey-400'}> Card content </CardContent>
 <CardFooter> Card footer with action buttons </CardFooter>
</Card>
```