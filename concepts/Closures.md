# CLOSURES

### Example 1

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

```js
function after(count, func) {
  let counter = 0;
  function innerCalled() {
    counter++;
    if (counter === 3) {
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


```js
function delay(func, wait) {
  function callAfterDelay() {
    this.setTimeout(func, wait);
  }
}
```
