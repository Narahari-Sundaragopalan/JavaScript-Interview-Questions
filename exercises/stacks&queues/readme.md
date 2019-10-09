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

### QUEUES

Queues are complimentary to stacks. In this type of DS, elements are removed from the start. The oldest element is removed first.

```js
class Queue {
    constructor() {
        this.list = [];
        this.length = 0;
    }

    enqueue(value) {
        this.list.push(value);
        this.length++;
    }

    dequeue() {
        if (this.length === 0) {
            return;
        }

        this.length--;
        return this.list.shift();
    }

    peek() {
        return this.list[0];
    }
}
```