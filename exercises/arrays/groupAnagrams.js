/**
 * Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */


const groupAnagrams = strs => {
	// create a map with key as sorted char and value as the array of anagram word sets
	const anagramMap = new Map();

	for (let s of strs) {
		let sortedChar = s.split('').sort().join('');

		if (!anagramMap.has(sortedChar)) {
			anagramMap.set(sortedChar, []);
		}

		anagramMap.get(sortedChar).push(s);
	}

	return Array.from(anagramMap.values());
}

/**
 * Time Complexity: O(NKlogK) - Outer Loop : O(N) and string sort O(KlogK) where K is max length
 * of a string in strs
 * Space Complexity: O(NK) (N elements with string of size K stored ?)
 */