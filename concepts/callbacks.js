function map(array, callback) {
    const output = [];
    for (let element of array) {
        output.push(callback(element));
    }
    return output;
}

function forEach(array, callback) {
    for (let element of array) {
        callback(element);
    }
}

function reduce(array, callback, initialValue) {
    array.forEach(element => initialValue += callback(element));

    return initialValue;
}

function intersection(arrays) {
    return arrays.reduce(intersectionReducer);
}

function intersectionReducer(accumulator, currentValue) {
    return accumulator.filter(element => currentValue.includes(element));
}

function union(arrays) {
    return arrays.reduce(unionReducer);
}

function unionReducer(accumulator, currentValue) {
    return [...new Set([...accumulator, ...currentValue])];
}