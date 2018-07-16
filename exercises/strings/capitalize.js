// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
  // Array to split the string and hold each word in the string
  const words = [];

// Split each word in the string by space
  for (let word of str.split(' ')) {
    // Capitalize the first letter of each word and join it with the remaining word usng slice
    // Push it to the words array
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  // Return the words array after joining it to form a string
  return words.join(' ');
}


//-----------------Second Solution-------------//
// Not the most efficient/effective

function capitalize(str) {
  // Capitalize the first letter of the string
  let result = str[0].toUpperCase();

  // Loop through the string from index 1 and check if the left character
  // of current index is a space, If true, capitalize the character at the current index
  // Else add the character to result string

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}
