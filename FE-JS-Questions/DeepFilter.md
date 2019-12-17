## Deep Filter

> Given an object and a filter function, write a function that will go through and filter the object, then return a filtered object

```
Example 1
Input Object

{
  a: 1,
  b: {
   c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  }
Input Function
const filter = (n) => n >= 0

Output

{ a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
```

```js
const filter = (n) => n >= 0;
let inputObj = {
	'a': 1,
	'b': {
		'c': 2,
		'd': -3,
		'e': {
			'f': {
				'g': -4,
			},
		},
		'h': {
			'i': 5,
			'j': 6,
		},
	}
}

const deepFilter = (inputObject, callbackFilterFn) => {

	for (let key in inputObject) {
		if (typeof inputObject[key] === 'object') {
			deepFilter(inputObject[key], callbackFilterFn);
			if (Object.keys(inputObject[key]).length === 0) {
				delete inputObject[key];
			}
		} else {
			if (!callbackFilterFn(inputObject[key])) {
				delete inputObject[key];
			}
		}
	}

	return inputObject;
}

deepFilter(inputObj, filter);
```