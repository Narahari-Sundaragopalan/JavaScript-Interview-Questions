/**
 * Given a string s and an int k, return all unique substrings of s of size k with k 
 * distinct characters.
 * 
 * Example 1:

Input: s = "abcabc", k = 3
Output: ["abc", "bca", "cab"]
Example 2:

Input: s = "abacab", k = 3
Output: ["bac", "cab"]
Example 3:

Input: s = "awaglknagawunagwkwagl", k = 4
Output: ["wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag"]
Explanation: 
Substrings in order are: "wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag", "wagl" 
"wagl" is repeated twice, but is included in the output once.
 */


const findKDistinctOfSizeK = (str, k) => {
    const set = new Set();
    const map = {};

    let left = 0;

    for (let right = 0; right < str.length; right++) {
        if (map[str[right]] === null) {
            map[str[right]] = 0;
        }
        map[str[right]]++;
        while (map[str[right]] > 1) {
            map[str[left]]--;
            left++;
        }
        if (right - left + 1 === k) {
            set.add(str.slice(left, right + 1));
            map[str[left]]--;
            left++;
        }
    }

    return Array.from(set);
}