// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 3 Possible solutions

// Using Array reverse function
function reverse(str) {
  return str.split('').reverse().join('');
}

// Using for loop
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// Using reduce function
// The reduce function takes 2 arguments
// First argument below is a function, and second argument is an empty string

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

function reverse(str) {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
        [str[left], str[right]] = [str[right], str[left]];
        left++;
        right--;
	}
}
