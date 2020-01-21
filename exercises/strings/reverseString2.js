/**
 * Given an input string , reverse the string word by word. 

Example:

Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
Note: 

A word is defined as a sequence of non-space characters.
The input string does not contain leading or trailing spaces.
The words are always separated by a single space.
 */


// All of them must be a single instance of s (like s is a property of the class)
const reverse = (str, left, right) => {
    while (left < right) {
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--;
    }
}

const reverseEachWord = str => {
    let start = 0, end = 0;
    let n = str.length;

    while (start < n) {
        while(end < n && str[end] !== ' ') {
            end++;
        }
        reverse(str, start, end);
        start = end + 1;
        end++;
    }
}

const reverseWords = s => {
    // reverse the string
    s = reverse(s, 0, s.length - 1);
    // reverse each word
    reverseEachWord(s);
}