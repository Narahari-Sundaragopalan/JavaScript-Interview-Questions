// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  //Check if both objects have same number of keys
  if(Object.keys(charMapA).length === Object.keys(charMapB).length) {
    return false;
  }

  // Loop through each of the char maps and check for values
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;

}

function buildCharMap(str) {
  const charMap = {};
  for (let char in str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap = charMap[char] + 1 || 1;
  }

  return charMap;
}


//-------------------------//
// Using sort() function

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
}
