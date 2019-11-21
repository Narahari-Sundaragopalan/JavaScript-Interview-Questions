### ITERATORS

> Create a for loop that iterates through an array and returns the sum of the elements of the array.

```js
function sumFunc(arr) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }

    return sum;
}

const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10
```

> Create a functional iterator for an array that returns each value of the array when called, one element at a time.

```js
const returnIterator = (arr) => {
    let i = 0;
    const next = () => {
        const element = arr[i];
        i++;

        return element;
    }

    return next;
}

const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);

console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'
```

3. Write code to iterate through an entire array using your nextIterator and sum the values.

```js
function nextIterator(arr) {
    let i = 0;

    const inner = {
        const next = () => {
            const element = arr[i];
            i++;

            return element;
        }
    }

    return inner;
}

const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);

console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3
```

4. Create an iterator with a next method that returns each value of a set when .next is called

```js
function setIterator(mySet) {
    const arrayFromSet = Array.from(mySet);
    let i =0;

    const inner = {
        next: () => {
            const element = arrayFromSet[i];
            i++;

            return element;
        }
    }

    return inner;
}

const mySet = new Set('hey');
const iterateSet = setIterator(mySet);

console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'
```

5. Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.



```js
const indexIterator = (array) => {
    let index = 0;

    const inner = {
        next: () => {
            const result = [index, array[index]]
            index++;

            return result;
        }
    }

    return inner;
}

const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);

console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']
```

6. Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!


```js
function Words(string) {
    this.str = string;
}

Words.prototype[Symbol.Iterator] = function() {
    this.str = this.str.trim().split(' ');
    const end = this.str.length;
    let i = 0;

    const inner = {
        next: () => {
            if (i < end) {
                const result = {
                    value: this.str[i],
                    done: false
                }
                i++;
                return result;
            } else {
                return {
                    value: this.str[i];
                    done: true
                };
            }
        }
    }

    return inner;
}

const helloWorld = new Words('Hello World');
for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'
```

7. Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
Note: if it is the first element it should say that it is the first

```js
const valueAndPrevIndex = (arr) => {
    let i = 0;

    const inner = {
        sentence: () => {
            const string = i === 0 ? ' is the first element' : ' was found after index ';

            const element = arr[i];

            const result = i === 0 ? ${element}${string} : ${element}${string}${i}

            i++;

            return result;
        }
    }

    return inner;
}


const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
```

8. Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'.
Do not use any type of loop constructor and only make the call to createConversation once.

```js
function* createConversation(str) {
    if (str === 'english') {
        yield setInterval(() => console.log('hello there'), 3000);
    } else {
        yield setInterval(() => console.log('gibberish'), 3000);
    }
}

console.log(createConversation('english').next());
```

> Use async/await to console.log a sentence comprised of a noun and verb in which the non async function takes in a noun, concatenates it with a hard coded verb and returns it to the async function to be console.logged after a duration of 3 seconds. Call the async function only once, feeding it a noun to make this happen.

```js
const waitForVerb = (noun) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(noun + ' barks')
        }, 3000)
    });
}

async function f(noun) {
    const sentence = await waitForVerb(noun);
    console.log(sentence);
}

f("dog");
```