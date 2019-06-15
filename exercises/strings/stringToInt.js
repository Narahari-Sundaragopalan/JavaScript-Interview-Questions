/*
Implement atoi which converts a string to an integer.
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
If no valid conversion could be performed, a zero value is returned.
*/

const myAtoi = function(str) {
    let base = 10;
    let parsedNumber = 0;
    let sign = 1;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = Math.pow(-2, 31);

    // clean the string
    let cleanedString = str.trim().split('');

    // check if first char is sign for positive or negative number
    if (cleanedString[0] === '-' || cleanedString[0] === '+') {
        if (cleanedString[0] === '-') {
            sign = -1;
        }
        cleanedString.shift();
    } else if (Number.isNaN(parseInt(cleanedString[0]))) {
        return 0;
    }

    for (let char of cleanedString) {
        let num = parseInt(char);

        if (!isNaN(num)) {
            parsedNumber *= base;
            parsedNumber += num;

            if (parsedNumber * sign > INT_MAX) {
                return INT_MAX;
            } else if (parsedNumber * sign < INT_MIN) {
                return INT_MIN;
            }
        } else {
            break;
        }
    }

    return parsedNumber * sign;
}