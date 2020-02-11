> Given a string return a reduced string such that , the reduced string has the characters re-arranged

* in order of characters having highest frequencey
* followed by character which appears just once in the same order as in the original string
* and no duplicate characters

```
Input: "hello world"
Output: "lohe wrd"
Explaination: 'l' appears thrice, 'o' appears twice, 'h','e', ' '(space) ,'w','r','d' all appear once 
'h','e',' ','w','r','d' should be appended in the same order as they appear in the original string  hello world
```

```js
const reducedString = str => {
    const charMap = new Map();

    for (let char of str.split('')) {
        charMap.has(char) ? charMap.set(char, charMap.get(char) + 1) : charMap.set(char, 1);
    }

    return (
            [...charMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .map(s => s[0])
            ).join('');
}
```
