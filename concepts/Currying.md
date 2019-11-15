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