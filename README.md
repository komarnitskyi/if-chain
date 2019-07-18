# Chain
Write conditions in functional style 👍

Examples: 
```javascript

const chain = require('if-chain');

const data = [1, 2, 3, 4, 5, 6];

chain(data)
    .if(true, (data) => data.filter(el => el % 2))

``` 
