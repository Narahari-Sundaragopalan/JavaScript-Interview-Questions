// Check if a given string is a isomorphic
// For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
// to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
// string A to every char of string B.
//
// `paper` and `title` would return true.
// `egg` and `sad` would return false.
// `dgg` and `add` would return true.
//
// isIsomorphic("egg", 'add'); // true
// isIsomorphic("paper", 'title'); // true
// isIsomorphic("kick", 'side'); // false

function isIsomorphic(stringA, stringB) {

  if(stringA.length !== stringB.length) {
    return false;
  }

  const charMap = {};
  let charA = '';
  let charB = '';
  // If a charMap does not exist, create a charMap with charA as key and charB as value
  for (let i = 0; i < stringA.length; i++) {
    charA = stringA[i];
    charB = stringB[i];

    if (!charMap[charA]) {
      // Else if charA already exists in the map, but it does not map to
      // charB, that means that charA is mapping to more than one letter.
      charMap[charA] = charB;
    } else if (charMap[charA] !== charB) {
      return false;
    }
  }

  return true;
}
