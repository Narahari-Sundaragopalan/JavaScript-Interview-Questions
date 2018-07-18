// Given an array containing both negative and positive integers.
// Find the contiguous sub-array with maximum sum.

function findMaxSum(arr) {
  let globalMaxSum = arr[0];
  let currentMaxSum = 0;

  for (let element of arr) {
    currentMaxSum = currentMaxSum + element;

    if (currentMaxSum > globalMaxSum) {
      globalMaxSum = currentMaxSum;
    }
  }

  return globalMaxSum;
}
