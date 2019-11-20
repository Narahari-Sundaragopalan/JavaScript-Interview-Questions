// Given a string, reverse each word in the sentence
// "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG"

function reverseBySeparator(string, separator) {
  return string.split(separator)
                .map(word => word.split('').reverse().join(''))
                .join(separator);
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

// Without using split and reverse functions

const reverseEachWord = str => {
	let words = split(str);
	let result = '';

	for (let word of words) {
		result = result + reverse(word) + ' ';
	}

	return result.trim();
}

const split = str => {
	const words = [];
	let word = '';

	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === ' ') {
			words.push(word);
			word = '';
		} else {
			word += str.charAt(i);
		}
	}
	words.push(word);
	return words;
}

const reverse = word => {
	let result = '';

	for (let i = word.length - 1; i >= 0; i--) {
		result += word[i];
	}

	return result;
}
