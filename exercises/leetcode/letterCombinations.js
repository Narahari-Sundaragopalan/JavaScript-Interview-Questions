/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

let output = [];
const phoneNumberMap = new Map();
phoneNumberMap.set("2", "abc");
phoneNumberMap.set("3", "def");
phoneNumberMap.set("4", "ghi");
phoneNumberMap.set("5", "jkl");
phoneNumberMap.set("6", "mno");
phoneNumberMap.set("7", "pqrs");
phoneNumberMap.set("8", "tuv");
phoneNumberMap.set("9", "wxyz");

const backtrack = (combination, nextDigits) => {
	if (nextDigits.length === 0) {
		output.push(combination);
	} else {
		let digit = nextDigits.substring(0, 1);
		let letters = phoneNumberMap.get(digit);

		for (let i = 0; i < letters.length; i++) {
			let letter = phoneNumberMap.get(digit).substring(i, i+1);
			backtrack(combination + letter, nextDigits.substring(1));
		}
	}
}

const letterCombinations = digits => {
	output = [];
	if (digits.length !== 0) {
		backtrack("", digits);
	}

	return output;
}

/**
 * Time Complexity: 3 ^ N x 4 ^ M
 * Space Complexity: 3 ^ N x 4 ^ M
 */