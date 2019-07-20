# if-chain [![Build Status][ci-img]][ci]
Write conditions in functional style 👍

Examples: 
```javascript
const chain = require('if-chain');

const data = [1, 2, 3, 4, 5, 6];

const condition = true;

const thenFn = (data) => data.filter(el => el % 2)
const elseFn = (data) => data;
// if no then or else provided, data will be returned


chain(data)
    .if(condition, thenFn, elseFn)
    .chain((data) => data.map(n => n * 2)) // chains additional transformation
    .end() // returns result

``` 

You can use _function as a condition_ as well:

```javascript
chain(data)
    .if((data) => isArray(data), thenFn, elseFn)

``` 
