## JSON PATH

> Given an object and a string path, write a method getValue to get the value at given path.

```
Example:

const obj = { 'x': [{ 'y': { 'z': 100 } }] };

getValue(obj, 'x[0].y.z'); // 100
```

```js
const obj = { 'x': [{ 'y': { 'z': 100 } }] };

const getCurrentLevelValue = (obj, level) => {
    const regex = /[\[\]]/g;

    if (regex.test(level)) {
        const arrayKeyStr = level.substring(level.indexOf('['));
        const arrayKey = arrayKeyStr.split('').filter(char => char !== '[' && char !== ']');
        const objKey = level[0]; // first char of string would be object key
        return obj[objKey][arrayKey];
    } else {
        return obj[level];
    }
}

const getValue = (obj, path) => {
    const pathArray = path.split('.');
    let result = obj;

    for (let level of pathArray) {
        result = getCurrentLevelValue(result, level)
        if (!result) {
            break;
        }
    }

    return result;
}

console.log(getValue(obj, 'x[0].y.z')); // 100
```
