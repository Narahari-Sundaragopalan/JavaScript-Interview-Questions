/*
    Roman numerals are usually written largest to smallest from left to right. 
    However, the numeral for four is not IIII. 
    Instead, the number four is written as IV. 
    Because the one is before the five we subtract it making four. 
    The same principle applies to the number nine, which is written as IX. 
    There are six instances where subtraction is used:
        I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
    Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/
const romanToInt = function(str) {
    const mappingRomanNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let romanNumeralArray = str.split('');
    let intNum = 0;
    let index = 0;
    while (index < romanNumeralArray.length - 1) {
        let currentNum = mappingRomanNumbers[romanNumeralArray[index]];
        let nextNum = mappingRomanNumbers[romanNumeralArray[index + 1]];
        let result = 0;

        if (nextNum && currentNum < nextNum) {
            result = doSubtraction(currentNum, nextNum);
            index = index + 2;
        } else {
            result = currentNum;
            index = index + 1;
        }
        intNum += result;
    }

    return intNum;
}

function doSubtraction(smaller, larger) {
    return larger - smaller;
}