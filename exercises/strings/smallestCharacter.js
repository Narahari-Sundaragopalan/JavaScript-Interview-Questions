// find the smallest character in each string 
// find frequency of smallest character in each string
// loop over strings in B and see if frequency if  i-th string is greater strings in A

const compareStrings = (A, B) => {
    const findSmallestChar = string => {
        let smallestChar = 'z';

        for (let char of string) {
            if (char < smallestChar) {
                smallestChar = char;
            }
        }

        return smallestChar;
    }

    const findFrequency = (char, string) => {
        let counter = 0;

        for (let c of string) {
            if (c === char) {
                counter++;
            }
        }

        return counter;
    }

    const result = [];
    let count = 0;

    let arrA = A.split(' ');
    let arrB = B.split(' ');
    for (let stringB of arrB) {
        let stringBMinCount = findFrequency(findSmallestChar(stringB), stringB);

        for (let stringA of arrA) {
            let stringAMinCount = findFrequency(findSmallestChar(stringA), stringA)

            if (stringAMinCount < stringBMinCount) {
                count++;
            }
        }

        result.push(count);
        count = 0;
    }

    return result;
}