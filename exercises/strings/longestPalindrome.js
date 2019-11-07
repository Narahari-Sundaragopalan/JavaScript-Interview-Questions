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

const longestPalindrome = s => {
    if (!s || s.length < 1) {
        return '';
    }

    const expandAroundCenter = (s, L, R) => {
        while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
            L--;
            R++;
        }
        return R - L - 1;
    }

    let start = 0;
    let end = 0;
    
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);

        if (len > (end - start)) {
            start = Math.ceil(i - (len - 1) / 2);
            end = Math.floor(i + len / 2);
        }
    }

    return s.substring(start, end + 1);
}
