/**
 * Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const lengthOfLongestSubstring = str => {
    if (str.length === 0 || str.length === 1) {
        return str.length;
    }

    let maxLength = 0;
    let longestSubstring = '';

    for (let char of str) {
        if (longestSubstring.includes(char)) {
            let index = longestSubstring.indexOf(char);
            longestSubstring = longestSubstring.substring(index + 1);
        }

        longestSubstring += char;
        if (longestSubstring.length > maxLength) {
            maxLength = longestSubstring.length;
        }
    }

    return maxLength;
}