# CALLBACKS

### MAP

```js
function map(array, callback) {
    const output = [];
    for (let element of array) {
        output.push(callback(element));
    }
    return output;
}
```

### FOR EACH

```js
function forEach(array, callback) {
    for (let element of array) {
        callback(element);
    }
}
```

### REDUCE

```js
function reduce(array, callback, initialValue) {
    array.forEach(element => initialValue += callback(element));

    return initialValue;
}
```

### INTERSECTION

```js
function intersection(arrays) {
    return arrays.reduce(intersectionReducer);
}

function intersectionReducer(accumulator, currentValue) {
    return accumulator.filter(element => currentValue.includes(element));
}
```

### UNION

```js
function union(arrays) {
    return arrays.reduce(unionReducer);
}

function unionReducer(accumulator, currentValue) {
    return [...new Set([...accumulator, ...currentValue])];
}
```

```js
// What happens when we call "new" keyword behind the scenes

var obj = new Foo();

// translates to

var obj = new Object();
obj.[[Prototype]] = Foo.prototype;
Foo.call(o);
```
