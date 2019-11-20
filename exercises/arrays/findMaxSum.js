// Given an array containing both negative and positive integers.
// Find the contiguous sub-array with maximum sum.

function findMaxSum(arr) {
  let globalMaxSum = arr[0];
  let currentMaxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentMaxSum = Math.max(arr[i], currentMaxSum + arr[i]);
    globalMaxSum = Math.max(globalMaxSum, currentMaxSum);
  }

  return globalMaxSum;
}
