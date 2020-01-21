/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 */

const isPalindrome = s => {
	// replace all punctuations and chars other than alpha numeric to check if reversed str is a palindrome
	s = s.replace(/[^A-Z0-9+$]/gi, '').toLowerCase();
	const rev = s.split('').reverse().join('');

	return s === rev;
}

const isPalindrome = s => {
    let charArray = s.replace(/[^A-Z0-9+$]/gi, '').toLowerCase().split('');
    let start = 0, end = charArray.length - 1;

    while (start <= end) {
        if (charArray[start] !== charArray[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

/**
 * Time Complexity: O(log N)
 * Space Complexity: O(N)
 */