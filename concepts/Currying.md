# Currying

The concept of currying happens when a function does not accept all of its arguments up front. Instead it takes the first argument and returns another function. The returned function is supposed to be called with the second argument, which in turn again returns another function. And this continues till all the arguments have been provided. And then the function at the end of the chain will be the one that returns the value that we want.

## Normal function

```js
let dragon = (name, size, element) =>
    name + 'is a ' +
    size + 'dragon that breathes ' +
    element + '!';

console.log(dragon('drogon', 'huge', 'fire'));
```

## Curried Function

```js
let dragon = 
    name =>
        size => 
            element =>
                name + 'is a ' +
                size + 'dragon that breathes ' +
                element + '!';

console.log(dragon('drogon')('huge')('fire'));

// Alternative way to call curried function
let drogon = dragon('drogon');
let hugeDragon = drogon('huge');

console.log(hugeDragon('fire'));
```

> A curried function can gradually receive the arguments it needs and will return the value when all of its arguments are received.

## Currying functions with a library

```js
import _ from 'lodash';

// Function in its normal form
let dragon = (name, size, element) =>
    name + 'is a ' +
    size + 'dragon that breathes ' +
    element + '!';

// Turned into a curried function using lodash
dragon = _.curry(dragon);

let drogon = dragon('drogon');
let hugeDragon = drogon('huge');

// Call as a curried function
console.log(hugeDragon('fire'));

```

## Example to depict benefit of currying

```js
import _ from 'lodash';

let dragons = [
    { name: 'drogon', element: 'fire' },
    { name: 'viscerion', element: 'ice' },
    { name: 'rhaegal', element: 'snow' },
    { name: 'anotherDummyDragon', element: 'snow' }
];

let hasElement = _.curry((element, obj) => obj.element === element);

// This will return a new function which expects an object to be passed to it to check if the obj's element is "snow"
// That returned function is passed a callback to the filter function directly
let snowDragons = dragons.filter(hasElement('snow'))

console.log(snowDragons);
```

## Conclusion

> A curryable function is a function that takes every argument by itself and returns a new function that expects the next dependency to the function until all dependencies are fulfilled and the final value is returned

### Question with Currying, Recursion, Closures

> sum(1)(2)(3)(4)..(n)() | Amazon UI/Frontend Javascript Interview Question

```js
const sum = function(a) {
	return function(b) {
		return function(c) {
			return function(d) {
				...
				...
				...
				return a + b + c + d + ... n;
			}
		}
	}
}

// Recursive way to solve the problem as we see a repeating pattern

const sum = function(a) {
	return function(b) {
		if (b) {
			return sum(a + b);
		} else {
			return a;
		}
	}
}

// The above recursive solution, will keep returning a function (the sum function in above case, until arguments are provided)
// While returning a function each time, the arguments are added and the sum function gets called
// The sum function returns a function with the value passed in parameter 'a' stored in lexical scope or through the closure concept
// Once there are no more arguments specified, we simply return the value of 'a' which is the added total result

// In ES6 syntax:

const sum = a => {
	return b => {
		if (b) {
			return sum(a + b);
		} else {
			return a;
		}
	}
}

// Simplified to one line
const sum = a => b => b ? sum(a + b) : a;
```
