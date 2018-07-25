//Given an array of integers,
// find the largest product yielded from three of the integers

function findLargestProduct(arr) {
  const sortedArr = arr.sort(sortArray);
  let product1 = 1;
  let product2 = 1;
  let lastElementIndex = sortedArr.length - 1;

  for (let i = lastElementIndex; i > lastElementIndex - 3; i--) {
    product1 *= sortedArr[i];
  }

  product2 = sortedArr[0] * sortedArr[1] * sortedArr[lastElementIndex];

  if (product1 > product2) {
    return product1;
  }

  return product2;
}

function sortArray(a, b) {
  return a - b;
}
