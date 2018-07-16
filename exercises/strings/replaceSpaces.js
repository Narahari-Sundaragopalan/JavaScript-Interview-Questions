// Write a method to replace all spaces in a string with'%20'. You may assume that
// the string has sufficient space at the end of the string to hold the additional
// characters, and that you are given the "true" length of the string.

function replaceSpaces(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ') {
      newStr += '%20';
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}
