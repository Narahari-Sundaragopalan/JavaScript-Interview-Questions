### LIST
* A list is a representation of an ordered sequence of elements, where the same element may appear many times

```js
class List {
    constructor() {
        this.memory = [];
        this.length = 0;
    }

    get(address) {
        return this.memory[address];
    }

    push(value) {
        this.memory[this.length] = value;
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            console.log("No elements in list");
            return;
        }

        let lastAddress = this.length - 1;
        const value = this.memory[lastAddress];

        delete this.memory[lastAddress];
        this.length--;

        return value;
    }

    unshift(value) {
        // Insert an element at the beginning of the list
        let previous = value;

        for (let address = 0; address < this.length; address++) {
            let current = this.memory[address];
            this.memory[address] = previous;
            previous = current;
        }

        this.memory[this.length] = previous;
        this.length++;
    }

    shift() {
        // Remove an item at the beginning of the list
        if (this.length === 0) {
            console.log("No elements in list");
            return;
        }
        let value = this.memory[0];

        for (let address = 0; address < this.length - 1; address++) {
            this.memory[address] = this.memory[address + 1];
        }

        delete this.memory[this.length - 1];
        this.length--;

        return value;
    }
}
```