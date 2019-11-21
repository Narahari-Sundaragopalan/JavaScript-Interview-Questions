# CLOSURES

### Example 1

> Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
  
```js
function createFunction() {
  function hello() {
    console.log("hello");
  }
  
  return hello;

}

var function1 = createFunction();
function1();
```

### Example 2

> Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

```js
function createFunctionPrinter(input) {
  function printWord() {
    console.log(input);
  }
  
  return printWord;

}

// UNCOMMENT THESE TO TEST YOUR WORK!
var printSample = createFunctionPrinter('sample');
printSample();
var printHello = createFunctionPrinter('hello');
printHello();
```

### Example 3

>Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope. Uncomment those lines of code. Try to deduce the output before executing.

```js
function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Before your execute, guess what will be logged from each function call.

willCounter();  // 1
willCounter();  // 2
willCounter();  // 3

jasCounter();   // 1
willCounter();  // 4
```

### Example 4

> Now we are going to create a function addByX that returns a function that will add an input by x.

```js
function addByX(x) {
  function innerFunc(input) {
    return input + x;
  }

  return innerFunc;
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));  // returns 3

// now call addByTwo with an input of 2
console.log(addByTwo(2));  // returns 4
```

### Example 5

> Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

```js
//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  let result = 0;
  let counter = 0;
  function returnFunc(input) {
    counter++;
    if (counter > 1) {
      return result;
    } else {
      result = func(input);
    	return result;
    }
  }
  
  return returnFunc;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6
```

### Example 6

> Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

```js
function after(count, func) {
  let counter = 0;
  function innerCalled() {
    counter++;
    if (counter === count) {
      func();
    }
  }
  
  return innerCalled;
}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed
```

### EXAMPLE 7

> Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked.

```js
function delay(func, wait) {
  function callAfterDelay() {
    this.setTimeout(func, wait);
  }

  return callAfterDelay;
}
```

### EXAMPLE 8

> Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

```js
function rollCall(names) {
    let index = 0;

    return function() {
        if (index < names.length) {
            console.log(names[index]);
            index++;
        } else {
            console.log("Everyone accounted for");
        }
    }
}

const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // -> Should log 'Victoria'
rollCaller() // -> Should log 'Juan'
rollCaller() // -> Should log 'Ruth'
rollCaller() // -> Should log 'Everyone accounted for'
```
