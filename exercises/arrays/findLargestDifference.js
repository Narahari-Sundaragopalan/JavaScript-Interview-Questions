// Given an array of integers,
// find the largest difference between two elements
// such that the element of lesser value must come before the greater element

function findLargestDifference(arr) {
  if (arr.length <= 1) {
    return -1;
  }

  let currentMin = arr[0];
  let currentMaxDifference = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentMin && (arr[i] - currentMin > currentMaxDifference)) {
      currentMaxDifference = arr[i] - currentMin;
    } else if (arr[i] <= currentMin) {
      currentMin = arr[i];
    }
  }

  return currentMaxDifference <= 0 ? -1 : currentMaxDifference;
}
