/**
 * Given
colors = ["red", "blue", "green", "yellow"];
and a string
str = "Lorem ipsum dolor sit amet";
write a function that prints each letter of the string in different colors. 
ex. L is red, o is blue, r is green, e is yellow, m is red, 
after the space, i should be blue.
*/

function printLetterinColors(str, colors) {
    let colorIndex = 0;

    for (let char of str.split('')) {
        if (char !== ' ') {
            console.log('%c ' + char, 'color:' + colors[colorIndex]);
        } else {
            console.log(char);
        }
        colorIndex++;
        if (colorIndex === colors.length) {
            colorIndex = 0;
        }
    }
}