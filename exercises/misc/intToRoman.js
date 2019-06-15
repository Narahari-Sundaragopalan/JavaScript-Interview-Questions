const intToRoman = function(num) {
    const romanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let str = '';

    for (let i = 0; i < numberArray.length; i++) {
        while (num >= numberArray[i]) {
            str = str.concat(romanArray[i]);
            num = num - numberArray[i];
        }
    }

    return str;
    
}