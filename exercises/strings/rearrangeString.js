/**
 * Given a string with lowercase, uppercase and numbers, rearrange it so that uppercase letters are first, 
 * then lowercase and then numbers. It should maintain the original order.

Input- "cdBnC52c" output - "BCcdnc52"
Input - "123abA" output - "Aab123"

Rearrange it in o(n) in one pass without using extra space.
 */

const rearrangeString = str => {
	let lower = '';
	let upper = '';
	let num = '';

	let index = 0;

	while (index < str.length) {
		if (!isNaN(str[index] * 1)) {
			num = num + str[index];
		} else if (str[index] == str[index].toUpperCase()) {
			upper += str[index];
		} else if (str[index] == str[index].toLowerCase()) {
			lower += str[index];
		}

		index++;
	}

	return upper + lower + num;
}