## TRIE Data Structure
> A Trie data structure is a special tree used to store and retrieve strings efficiently. The nodes of the Trie DS store the character and strings or words can be re`trie`ved by traversing down a branch path of the tree.

> A Trie DS has a root node and one or more children nodes. If a node has no children its called a leaf. Each node has a map (of its children), with the key as a character and value as a node. Additionaly, a boolean flag (isEndOfWord) indicates if the current node is a valid end of word.

```js
class TrieNode {
	constructor() {
		this.children = new Map();
		this.isEndOfWord = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}

	insert(word) {
		let current = this.root;
		
		for (let i = 0; i < word.length; i++) {
			let ch = word.charAt(i);
			let node = current.children.get(ch);

			if (node === null) {
				node = new TrieNode();
				current.children.set(ch, node);
			}
			current = node;
		}
		current.isEndOfWord = true;
	}

	search(word) {
		let current = this.root;

		for (let i = 0; i < word.length; i++) {
			let ch = word.charAt(i);
			let node = current.children.get(ch) || null;

			if (node === null) {
				return false;
			}
			current = node;
		}
		return current.isEndOfWord;
	}

	delete(word) {
		deleteWord(this.root, word, 0);
	}

	deleteWord(current, word, index) {
		if (index === word.length) {
			if (!current.isEndOfWord) {
				return false;
			}
			current.isEndOfWord = false;
			return current.children.size === 0;
		}
		let ch = word.charAt(index);
		let node = current.children.get(ch) || null;

		if (node === null) {
			return false;
		}

		shouldDeleteCurrentNode = deleteWord(node, word, index + 1);

		if (shouldDeleteCurrentNode) {
			current.children.delete(ch);
			return current.children.size === 0;
		}

		return false;
	}

	startsWith(prefix) {
		let current = this.root;

		for (let i = 0; i < prefix.length; i++) {
			let ch = prefix.charAt(i);
			let node = current.children.get(ch) || null;

			if (node === null) {
				return false;
			}
			current = node;
		}

		return current !== null;
	}
}
```