## LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

```
get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.
```

```
Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

```js
class Node {
	constructor(key, value, prev = null, next = null) {
		this.key = key;
		this.value = value;
		this.prev = prev;
		this.next = next;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = new Node(0, 0);
		this.tail = new Node(0, 0);
		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	insertHead(node) {
		node.next = this.head.next;
		node.prev = this.head;
		this.head.next.prev = node;
		this.head.next = node;
	}

	remove(node) {
		node.prev.next = node.next;
		node.next.prev = node.prev;
	}

	removeLast() {
		let node = this.tail.prev;
		let key = node.key;

		this.remove(node);

		return key;
	}
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.list = new DoublyLinkedList();
		this.cache = new Map();
	}

	get(key) {
		if (!this.cache.has(key)) {
			return -1;
		}

		let node = this.cache.get(key);
		this.list.remove(node);
		this.list.insertHead(node);

		return node.value;
	}

	put(key, value) {
		let newNode = new Node(key, value);

		if (this.cache.has(key)) {
			this.list.remove(this.cache.get(key));
		} else if (this.cache.size >= this.capacity) {
			let leastUsedKey = this.list.removeLast();
			this.cache.delete(leastUsedKey);
		}

		this.list.insertHead(newNode);
		this.cache.set(key, newNode);
	}
}
```