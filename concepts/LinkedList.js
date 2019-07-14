/*
Linked lists are a common data structure used to implment 
other data structures. They allow data to be inserted at
the start, middle or end.

A good way to implmenet linked list is 1 -> 2 -> 3 -> 4 -> 5

Visualize them as a JSON like structure

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
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    get(position) {
        // Check if its a valid position
        if (position >= this.length) {
            throw new Error("Invalid position, greater than length of linked list")
        }

        // Else loop through the nodes, till we get to the position
        let current = this.head;

        for (let index = 0; index < position; index++) {
            current = current.next;
        }

        return current;
    }

    add(position, value) {
        // create a new node with value and next set to null
        let node = {
            value,
            next: null
        };

        // if position is first, set node's next to point to head
        if (position === 0) {
            node.next = this.head;
        } else {
            // find the prev and current nodes
            let prev = this.get(position - 1);
            let current = prev.next;

            // Set the previous node's next to the new one and
            // set the new node's next to the current
            prev.next = node;
            node.next = current;
        }

        this.length++;
    }

    remove(position) {
        // Check if list is empty and throw error
        if(!this.head) {
            throw new Error("Cannot remove from an empty list");
        }

        // if position is 0 we need to remove the head, 
        if (position === 0) {
            this.head = this.head.next;
        } else {
            // find the previous node to the position
            let prev = this.get(position - 1);
            prev.next = prev.next.next;
        }

        // Decrement the length of the list
        this.length--;
    }
}