### STACKS

* Stacks are similar to lists in the fact that they have an order. Stacks are limited to pushing and popping values at the end of the list, which are very fast operations when mapping directly to memory.

```js
class Stack {
    constructor() {
        this.list = [];
        this.length = 0;
    }

    push(value) {
        this.length++;
        this.list.push(value);
    }

    pop() {
        if (this.length === 0) {
            console.log("No elements in stack to pop");
            return ;
        }
        this.length--;
        return this.list.pop();
    }

    peek() {
        return this.list[this.length - 1];
    }
}
```