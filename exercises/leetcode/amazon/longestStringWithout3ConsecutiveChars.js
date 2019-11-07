// total string length is a + b + c

/**
 * while length is less total length allowed
 * 
 * conseccounter, acounter, bcounter ccounter
 * 
 * for i = 0 i < A; i++ if acounter < 2 => string += 'a' else A -= acounter
 * 
 * B 
 * C
 */

const longestStringWithout3ConsecutiveChars = (A, B, C) => {
    let outputString = '';
    const totalStringLength = A + B + C;

    const addChar = (maxLimit, char) => {
        let counter = 0;
        for (let i = 0; i < maxLimit; i++) {
            if (counter < 2) {
                outputString += char;
                counter++;
            } else {
                maxLimit -= counter;
                break;
            }
        }
        return maxLimit;
    }

    const charLimits = [['a', A], ['b', B], ['c', C]]
    charLimits.sort((a, b) => b[1] - a[1]);

    while (outputString.length < totalStringLength) {
        for (let [char, limit] of charLimits) {
            limit = addChar(limit, char);
        }
    }

    return outputString;
}