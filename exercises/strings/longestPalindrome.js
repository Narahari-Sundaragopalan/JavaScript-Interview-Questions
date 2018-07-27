// Given a string s, find the longest palindromic substring in s.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

function longestPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
        return str;
    }
  let longest = str[0];
  for (let i = 0; i < str.length; i++) {

    let currentCharacter = str[i];
    let firstMatch = '';
    for (let j = i + 1; j < arr.length; j++) {

      if (currentCharacter === str[j]) {
        firstMatch = j;
        const substring = str.slice(i, firstMatch + 1);

        if (substring.length > longest.length &&
          substring.toLowerCase() === substring.split('').reverse().join('').toLowerCase()) {
            longest = substring;
        }
      }
    }
  }

  return longest;
}
