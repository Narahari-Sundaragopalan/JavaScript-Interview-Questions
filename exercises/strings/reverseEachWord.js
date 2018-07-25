// Given a string, reverse each word in the sentence
// "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG"

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

// To test
//
// let string = "Welcome to JavaScript";
//
// // Output becomes tpircsavaJ siht ot emocleW
// let reverseSentence = reverseBySeparator(string, "");
//
// // Output becomes emocleW ot siht tpircsavaJ
// let reverseWord = reverseBySeparator(reverseBySentence, " ");
