// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become
// a2blc5a3. If the "compressed" string would not become smaller than the original
// string, your method should return the original string.

function compressString(str) {
  let compressedStr = str[0];
  let previousChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (previousChar === str.charAt(i)) {
      count++;
    } else {
      compressedStr += count + str[i];
      previousChar = str[i];
      count = 1;
    }
  }

  return compressedStr + count;
}
