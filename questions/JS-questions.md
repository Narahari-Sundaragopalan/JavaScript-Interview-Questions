# JS Questions:

> Questions are taken from HTML5 - BoilerPlate Github Repo

[Link to Repo](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/questions/javascript-questions.md)

* #### Explain event delegation
```
JS event listeners fire not only on a single DOM element but also on all its descendents.
Inverse of it -> Event bubbling: Also known as propogation, events on an element will bubble up and fire on all parents.

Eg: Live editing of a form can use event delegation. So that in a <form> with multiple <input> tags, all the events raised by <input> can be captured by attaching a callback function to the parent <form>
```
```js
function handleChange(event) {
  console.log(event.target)
  // Do some loop/switch case on different types of events here
}

var el = document.getElementById('form');
el.addEventListener('change', handleChange);
```

* #### Explain how `this` works in JavaScript

["this" Keyword](../concepts/Keyword-this.md)

* #### Explain how prototypal inheritance works

[Prototype Function](../concepts/Prototype-Function.md)

* #### What do you think of AMD vs CommonJS?
* #### Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * #### What needs to be changed to properly make it an IIFE?

```
IIFE stands for Immediately Invoked Function Expression
Above code sample will give the error  (Google Chrome) "Uncaught SyntaxError: Unexpected token )" 

As per MDN, an expression should always resolve to a value
```
```js
function foo(){}(); // this line is read as below by JavaScript 
function foo() {

}
(); // As if written on separate lines

// To make the above code sample work, simply put the code sample in parenthesis as below:
( function foo(){ } )();
```

* #### What's the difference between a variable that is: `null`, `undefined` or undeclared?

#### Undeclared
```
When we try and use a variable which has not been declared or defined.
```
```js
const bar = foo + 1; // Here foo is undeclared
```

#### Undefined
```
Something which has been declared but does not have a value. In case 
of a function it could be when a function does not return anything.
```
```js
let foo;  // foo has been declared but is undefined
let bar = {};
let baz = ['a', 'b', 'c'];
const max = function() {
  // dont return anything
}
console.log(foo, bar.name, baz[4], max());
```
```
All the above calls inside console.log will be undefined, as they do not have a value. Undeclared is when something is wrong with your code, but it is okay to have undefined values in your code.
```
```js
const max; // This will give an error "Missing initializer in const declaration.
```
```
As a user, you are forced to assign a value to a variable declared as const

> Variable declared but no defined value (not initialized)
> object/array exists but no value at that key/index
> function exists but returns nothing
> undefined is "falsy"
```

#### Null
```js
const max = null;

console.log(max) // prints null
```
```
Difficult to explain but some useful points below:
> null has a value, and its value is null
> null is a nothing value
> It is not zero, or an empty string/object/array
> Null is a placeholder, for any future value, the variable may or may not have
> It has been intentionally assigned to, for future use
> It is "falsy"
```
  * How would you go about checking for any of these states?

  ```
  Undeclared usually throws an error if used anywhere in code, so it will be easily found. There is one exception to this, shown below:
  ```
  ```js
  foo = 5 // global scope 

  console.log(foo) // Will print 5, as it is in the global scope and attached to window object
  //However, this is not good practice, and should never be done by developers
  ```
#### To check for undefined
  ```js 
  let foo;
  console.log(typeof foo) // Returns "undefined" as a string
  console.log(typeof bar) // Returns "undefined" even though it is undeclared

  // Preferred way to check undefined
  console.log(foo === undefined) // Returns true
  ```
#### To check for null
  ```js
  const foo = null;

  console.log(typeof foo) // Returns object

  // preferred way to check for null
  console.log(foo === null);
  ```

* #### What is a closure, and how/why would you use one?
```
> A closure is a function that makes use of variables defined in outer functions
that have previously returned. 
```

```js
function outer(a) {
  return function inner(b) {
    // The inner function is making use of "a"
    // which was defined in the outer function called "outer" here
    // by the time this function is called, the "outer" function
    // has returned
    // this inner function is still able to access "a" and is called
    // a closure
    return a + b;
  }
}

outer(5)(7) // Returns 12
// We can also do
var store = outer(5);
store(7) // Returns 12
```

```
> We should return from the inner function for closure to work
> We can either call the inner function rightaway using ()(), or store
  the result of the function in a variable
> The inner function can be an anonymous function and does not need a name

> A closure exists only when the inner function is making use of variables
  defined in the outer function that has returned. If the inner function does
  not make use of any external variable, then it is simply a nested function

> Useful application of closure is to create Private variables in JavaScript
```

```js
function team() {
  var players = ['a', 'b'];

  return {
    getPlayers: function() {
      return players;
    },
    addPlayers: function(newPlayer) {
      players.push(newPlayer);
      return players;
    }
  }
}

var team1 = team();
team1.getPlayers() // ['a', 'b']
team1.addPlayers('c') //['a', 'b', 'c']

var team2 = team();
team2.getPlayers() // ['a', 'b']

// We have no access to the players variable
// which makes it private and no one can modify it and
// will always start with ['a', 'b']
```

* Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?
* What's a typical use case for anonymous functions?
* How do you organize your code? (module pattern, classical inheritance?)
* What's the difference between host objects and native objects?
* #### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
```
In the first case, `function Person() {}` is an empty constructor function, which returns nothing.

On assigning the constructor function to a variable, the variable person will be
set to undefined.

However in the third case, using the new keyword, a new object is created.
And the "this" keyword will point to the newly created object.
An implicit "return this" is added inside the constructor function and assigned
to the person variable.

```
* #### What's the difference between `.call` and `.apply`?

[Prototype Function](../concepts/Prototype-Function.md)

* #### Explain `Function.prototype.bind`.

[Prototype Function](../concepts/Prototype-Function.md)
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain Ajax in as much detail as possible.
* What are the advantages and disadvantages of using Ajax?
* Explain how JSONP works (and how it's not really Ajax).
* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
* #### Explain "hoisting".

```
Definition: All variables (declared with "var" keyword) are declared at the top of any given function scope (including function declarations).
```
```js
function hoist(track) {
  if (track === "Down with fever") {
    var action = "dance";
  } else {
    var action = 'skip';
  }

  return action;
}
// The above code block is actually converted by JS as 
function hoist(track) {
  var action;
  if (track === "Down with fever") {
    action = "dance";
  } else {
    var action = 'skip';
  }

  return action;
}
// Linters do not like this, but browsers allow it.
```
```
Above issue has been kind of addressed with "const" and "let". 
Both "const" and "let" are not hoisted, and scoped within the block in which they are declared, giving users more control
```

* #### Describe event bubbling.
```
Event bubbling: Also known as propogation, events on an element will bubble up and fire on all parents.
```

* What's the difference between an "attribute" and a "property"?
* Why is extending built-in JavaScript objects not a good idea?
* Difference between document load event and document DOMContentLoaded event?
* #### What is the difference between `==` and `===`?

```
== Checks for equality and value, where as === checks for type and value both.
```
```js
let foo; // undefined
const bar = null; // null

console.log(foo == bar) // Returns true
```
* Explain the same-origin policy with regards to JavaScript.
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Why is it called a Ternary operator, what does the word "Ternary" indicate?
* What is `"use strict";`? what are the advantages and disadvantages to using it?
* #### Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
```js
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
```
* #### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

```
Reduce collision
Maintain independence
Easier to write code and extendible for the future
```

* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
* Explain what a single page app is and how to make one SEO-friendly.
* #### What is the extent of your experience with Promises and/or their polyfills?
```
> Promise is an object that represents a task which will be completed in the
  future.
> Promise is created using the Promise constructor function. The constructor
  function takes a single callback function as a parameter. 
> The callback function has 2 parameters, resolve and reject
> If the asynchronous call we make, completes successfully, then resolve is
  called
> If the async call fails for some reason, then reject will be called.
> If the resolve is invoked inside the promise, the callback function inside
  ".then()" will be invoked. The parameter passed to resolve is recieved by
  the callback function invoked inside the "then" function.
> If reject is invoked, the callback function inside "catch" function is
  called.
```
```js
var p = new Promise(function(resolve, reject) {
  resolve([1,2,3,4]);
  // reject("Error");
});

p.then(function(arr) {
  console.log("Promise resolved with data: ", arr);
}).catch(function(data) {
  console.log("Promise was reject with ", data);
});

//Eg 2
var p1 = new Promise(function(resolve, reject) {
  var num = Math.random();
  if (num < 0.5) {
    resolve(num);
  } else {
    reject(num);
  }
});

p.then(function(num){
  console.log("Success: Resolve was called with number: ", num);
}).catch(function(num) {
  console.log("Error: Reject was called with number: ", num);
});
```
* #### What are the pros and cons of using Promises instead of callbacks?
```
> Nested callbacks make code hard to read, difficult to understand
> The code is not very modular, where there a lot of nested callbacks

> Promise chaining helps in making async calls act synchronously
```
```js
var promise = new Promise(function(resolve, reject) {
  setTimeout(function(){
    randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 500);
});

promise.then(function(data) {
  console.log("Random int passed to resolve: ", data);

  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      resolve(Math.floor(Math.random() * 10));
    }, 3000);
  });
}).then(function(data) {
  console.log("Random int passed to resolve second promise: ", data);
});
```
#### Using Promises in place of nested callback

```js
var counter = 0;
setTimeout(function(){
  counter++;
  console.log("Counter: ", counter);
  setTimeout(function(){
    counter++;
    console.log("Counter: ", counter);
    setTimeout(function(){
      counter++
      console.log("Counter: ", counter);
    }, 3000);
  }, 2000);
}, 1000);

// Using promises
var counter = 0;
function increment() {
  counter++;
  console.log("Counter: ", counter);
}

function runLater(callback, timeinMs) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function(){
      var res = callback();
      resolve(res);
    }, timeinMs);
  });

  return p;
}

runLater(incCounter, 1000).then(function() {
  return runLater(incCounter, 2000);
}).then(function() {
  return runLater(incCounter, 3000);
});
```

* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* What tools and techniques do you use debugging JavaScript code?
* What language constructions do you use for iterating over object properties and array items?
* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
  * What are the pros and cons of immutability?
  * How can you achieve immutability in your own code?
* Explain the difference between synchronous and asynchronous functions.
* #### What is event loop?
  * #### What is the difference between call stack and task queue? 

#### Event Loop
  ```
  > The event loop is a functionality in JavaScript runtime, which checks the 
  task queue when the call stack is empty.
  > If the call stack is empty, the front of the queue is placed in the stack
  > Application -> setTimeout functions
  ```
#### Stack
  ```
  > Stack is an ordered data structure that keeps track of function invocations.
  > It is part of the JS runtime. Whenever a function is invoked, the invoked
    function is pushed to the top of the stack.
  > And once the function has completed executing, the function is taken off the
    stack (popped out of the stack)
  > The stack frame contains the function that was invoked, the parameters with 
    which the function was invoked and the line number on which a function was
    invoked. The stack is simply an ordered set of stack frames
  > The most recently function is on top of the stack and first invoked function
    is at the bottom of the stack, and the stack frame is processed from top to
    bottom.
  ```
#### Queue
  ```
  > Queue is an ordered list of functions waiting to be placed on the stack
  > The functions in a queue are processed based on FIFO (First In First Out)
  ```

  ```js
  function square(n) {
    return n * n;
  }

  // Places the callback function on the task queue
  setTimeout(function(){
    console.log("Callback was placed on the task queue");
  }, 0);

  console.log(square(4));

  // The event loop waits for the function to complete executing, and output
  // 16 to the console.

  // Once this is done, the stack is empty, the event loop checks for the queue,
  // and places the callback function from the queue to the stack, and the 
  // console inside the callback is printed
  ```

  ```
  The understanding above tells us that JavaScript is Single threaded. This
  means that the code execution is linear. Code that is running cannot be
  interrupted by something else going on in the program.
  ```

* #### Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`
```
function foo() {} is called a function declaration, where as,
var foo = function() {} is a function expression. The variable 'foo' stores a
reference to the function assigned to it. The function can be invoked as
foo();
```

* What are the differences between variables created using `let`, `var` or `const`?
* What are the differences between ES6 class and ES5 function constructors?
* Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?
* What advantage is there for using the arrow syntax for a method in a constructor?
* What is the definition of a higher-order function?
* Can you give an example for destructuring an object or an array?
* ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?
* Can you give an example of a curry function and why this syntax offers an advantage?
* What are the benefits of using `spread syntax` and how is it different from `rest syntax`?
* How can you share code between files?
* Why you might want to create static class members?