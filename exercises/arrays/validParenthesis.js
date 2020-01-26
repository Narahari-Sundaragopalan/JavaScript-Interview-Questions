/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
 */

const validParenthesis = str => {
	const bracketMap = new Map();

	bracketMap.set(')', '(');
	bracketMap.set('}', '{');
	bracketMap.set(']', '[');

	const strStack = [];

	for (let ch of str.split('')) {
		// check if the char is a closing bracket
		if (bracketMap.has(ch)) {
			// find the top element from the stack
			let top = strStack.length === 0 ? '#' : strStack.pop();

			// if top element is not an opening bracket, expression is invalid
			if (top !== bracketMap.get(ch)) {
				return false;
			}
		} else {
			// its an opening bracket, push it to the stack
			strStack.push(ch);
		}
	}

	return strStack.length === 0;
}
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */