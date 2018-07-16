# Coding Questions:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```

*Answer:*
```js
Output: "1020"
```

*Question: What will be the output of the code below?*
```javascript
console.log(0.1 + 0.2 == 0.3);
```

*Answer:*
```js
Output: false
```

*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Answer:*
```js
var add = function(x) {
  return function(y) {
    return x + y;
  }
}; // This will make add (2)(5) return 7, based on closures concept in JS
```

*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Answer:*
```js
Splits and reverses the string to "goh angasal a m'i"
```

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Answer:*
```js
window.foo will be equal to "bar"
```

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Answer:*
```js
Function will be immediately executed and give an alert "Hello World".
The call to the function will fail saying, variable bar is undefined
```

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Answer:*
```js
Output: 2
```

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Answer:*
```js
Output: undefined
```

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

*Answer:*
```js
Output: "one" , and then "three" and then "two" will be printed. Even though 
the timeout is 0 seconds, the setTimeout function call will push it to JS call
stack and execute it after all other statements are executed
```

*Question: What is the difference between these four promises?*
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```