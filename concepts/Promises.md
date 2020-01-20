### PROMISES

> Using setTimeout, print the string 'Hello!' after 1000ms.

```js
function sayHello() {
    setTimeout(function() {
        console.log('Hello')
    }, 1000)
}
```

> Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then

```js
var promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve('Resolved!');
    }, 1000);
});

promise.then(function(value) {
    console.log(value)
});
```

> Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch

```js
const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('Rejected!');
    }, 1000);
})

promise.catch(function(value) {
    console.log(value);
});
```

> Promises are asynchronous and we're now going to prove that they indeed are! Create a promise and have it resolve with the value of "Promise has been resolved!" Then uncomment the code at bottom of Challenge 4. What order do we expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?

```js
const promise = new Promise(function(resolve, reject) {
    resolve('Promise has been resolved!');
});

promise.then((value) => console.log(value));
console.log('I am not the promise');
```

> Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms

```js
const delay = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('Hello');
        }, 1000)
    });
}

const sayHello = (value) => {
    console.log('Hello');
}

delay().then(sayHello);
```

> This challenge we'll chain promises together using ".then" Create two variables: firstPromise and secondPromise Set secondPromise to be a promise that resolves to "Second!" Set firstPromise to be a promise that resolves to secondPromise Call the firstPromise with a ".then", which will return the secondPromise> promise. Then print the contents of the promise after it has been resolved by passing console.log to .then

```js
const secondPromise = new Promise((resolve, reject) => {
    resolve('Second!');
});

const firstPromise = new Promise((resolve, reject) => {
    resolve(secondPromise);
})

firstPromise
    .then(promise => promise)
    .then(value => console.log(value));
```

> We have a API that gets data from a database, it takes an index parameter and returns a promise Your challenge is to use Promise.all to make 3 API calls and return all the data when the calls are complete

```js
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
    const returnTime = Math.floor(Math.random * 1000);
    return new Promise((resolve, reject) => {
        if (i >= 0 && i < fakePeople.length) {
            setTimeout(() => resolve(fakePeople[i], returnTime));
        } else {
            reject({message: "Index is out of range"});
        }
    });
};

const getAllData = () => {
    Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]).then(values => {
        console.log(values);
    });
}

getAllData();
```
