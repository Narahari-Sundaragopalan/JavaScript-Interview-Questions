// Removing duplicates of an array
// and returning an array of only unique elements

function removeDuplicates(arr) {
    const elementMap = {};
    const uniqueArr = [];

    for (let element of arr) {
        // Check if element exists in the object already
        if (!elementMap[element]) {
            // Set element count to 1
            elementMap[element] = 1;
            // Push to unique array
            uniqueArr.push(element);
        }
    }
    
    return uniqueArr;
}
