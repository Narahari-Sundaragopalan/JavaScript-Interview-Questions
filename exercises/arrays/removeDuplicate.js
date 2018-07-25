// Removing duplicates of an array
// and returning an array of only unique elements

function removeDuplicates(arr) {
  const elementMap = {};
  const uniqueArr = [];

  for (let element of arr) {
    if (!elementMap[element]) {
      elementMap[element] = 1;
      uniqueArr.push(element);
    }
  }

  return uniqueArr;
}
