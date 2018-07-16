//Given a string, of characters with multiple occurrences, find the character 
// which is unique and occurs only once

function uniqueChar(str) {
  const charMap = {};
  let uniqueChar = '';
  
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  
  for (let char in charMap) {
    if(charMap[char] === 1) {
      uniqueChar = char;
    }
  }
  return uniqueChar;
}
