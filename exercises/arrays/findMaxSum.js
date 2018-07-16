// Given an array containing both negative and positive integers.
// Find the contiguous sub-array with maximum sum.

findMaxSum(arr) {
  let globalMaxSum = arr[0];
  let currentMaxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    currentMaxSum = Math.max(currentMaxSum, currentMaxSum + arr[i]);

    if (currentMaxSum > globalMaxSum) {
      globalMaxSum = currentMaxSum;
    }
  }

  return globalMaxSum;
}
