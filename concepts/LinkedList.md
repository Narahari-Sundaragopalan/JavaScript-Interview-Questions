## LINKED LIST

Linked lists are a common data structure used to implment 
other data structures. They allow data to be inserted at
the start, middle or end.

A good way to implement linked list is `1 -> 2 -> 3 -> 4 -> 5`

Visualize them as a JSON like structure

```
{
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: { ... }
        }
    }
}
```

```js
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    get(position) {
        if (position >= this.length) {
            throw new Error('Position cannot be greater than linked list size');
        }

        let current = this.head;

        for (let index = 0; index < position; index++) {
            current = current.next;
        }

        return current;
    }

    add(position, value) {
        let node = {
            value,
            next: null
        };

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let previous = this.get(position - 1);
            let current = previous.next;

            node.next = current;
            previous.next = node;
        }

        this.length++;
    }

    remove(position) {
        if (!this.head) {
            throw new Error('Linked List is empty');
        }

            // If we're removing the first node we simply need to set the head to the next node in the chain
        if (position === 0) {
            this.head = this.head.next;
        } else {
            // For any other position, we need to look up the previous node and set it to the node after the current position.
            let previous = this.get(position - 1);
            previous.next = previous.next.next;
        }

        this.length--;
    }
}
```
