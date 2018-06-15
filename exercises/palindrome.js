// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// Using array reverse function
function palindrome(str) {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}


// Using array every() function
// not fully efficient as we do multiple comparisons
function palindrome(str) {
  str.split('').every((char, index) => {
    return char === str[str.length - index - 1];
  });
}
