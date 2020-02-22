## Writing a custom promisify function

> Before writing our own custom promisify function, a couple of points on why we need to convert callbacks to promises.

1. In Callbacks, if we want to do something specific, we need to attach `err` argument to each callback which is redundant, whereas in promises or async/await, we can add a `.catch` block which will catch all the errors in the promise chain
2. In Callbacks, we have no control over how many times it is being called, which can lead to memory leaks, when its called and under what context.
3. Using Promises, we can control these factors, especially error handling, and the code is more readable and maintainable.

### How to make a callback based function return a promise
> There are 2 ways to do this:
1. Wrap the function into another function which returns a promise and resolves or rejects based on the arguments.
2. Promisification - we create or use a utility helper function `promisify` which will transform all error first callback APIs

#### Callback based function
```js
const getSumAsync = (num1, num2, callback) => {
    if (!num1 || !num2) {
        return callback(new Error("Missing arguments"), null);
    }

    return callback(null, num1 + num2);
}

// Function call with callback
getSumAsync(2, 3, (err, result) => {
    if (err) {
        doSomethingWithError(err);
    } else {
        console.log(result);
    }
});
```

#### Wrap into a promise
```js
const getSumPromise = (num1, num2) => {
    return new Promise((resolve, reject) => {
        getSumAsync(num1, num2, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Function call with Promisified function
getSumPromise(2, 3)
    .then(result => console.log(result))
    .catch(err => doSomethingWithError(err));
```

#### Promisify
> Node.js has a util `promisify` function which converts a function that accepts a callback into a function returning a promise.

```js
const { promisify } = require('util');
const getSumPromise = promisify(getSumAsync);
getSumPromise(2, 3)
    .then(result => console.log(result))
    .catch(err => doSomethingWithError(err));
```

### Writing our own promisify function

* Step 1
> Our custom promise function takes the function to promisified as an argument

```js
// Function should be called like below:
const getSumPromise = customPromisify(getSumAsync);

// So our custom promise function takes the function to promisified as an argument
const customPromisify = (functionToBePromisified) => {};
```

* Step 2
> The custom promisify function returns a function back, which gets assigned to getSumPromise, which is eventually called with the same arguments of the original callback based function

```js
const customPromisify = (functionToBePromisified) => {
    return (...args) => {

    }
};
```

* Step 3
> When we call the getSumPromise function, the above returned function gets called. And in the implementation above, it returns a promise which we can use with getSumPromise

```js
const customPromisify = (functionToBePromisified) => {
    return (...args) => {
        return new Promise((resolve, reject) => {

        });
    }
};
```

* Step 4
> The decision on when to resolve or reject the promise, will be made by the original callback based `getSumAsync` function and we just need to define the callback. Based on `err` and `result`, we will reject and resolve the promise.

```js
const customPromisify = (functionToBePromisified) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            function customCallback(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
        })
    }
}
```

* Step 5
> Our `args` consists of only the arguments `(num1, num2)` as passed to getSumPromise function. It needs the callback function as the third argument which getSumAsync will call when it has processed the result.

> Finally we will call our function with `.call` (explicit binding) in order to call the `getSumAsync` function in the same context, and then our promisify function will resolve or reject accordingly.

```js
const customPromisify = (functionToBePromisified) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            function customCallback(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
            args.push(customCallback);
            functionToBePromisified.call(this, ...args);
        });
    }
};
```

> In case we have a function with callback which has multiple arguments (or results), we can modify our custom promise function as below:

```js
const customPromisify = (functionToBePromisified) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            function customCallback(err, ...results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(results.length === 1 ? results[0] : results);
                }
            }
            args.push(customCallback);
            functionToBePromisified.call(this, ...args);
        });
    }
};

// Example usage:
const getSumAsync = (num1, num2, callback) => {
    if (!num1 || !num2) {
        callback(new Error("Missing arguments"), null);
    }

    const sum = num1 + num2;
    const msg = `The sum is ${sum}`;

    return callback(null, sum, msg);
}

const getSumPromise = customPromisify(getSumAsync);
getSumPromise(2, 3).then(arrOfResults).catch(err) // arrOfResults is [5, "The sum is 5"]
```

