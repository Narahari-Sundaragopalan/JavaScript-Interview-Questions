//Given an array A[] of n numbers and another number x,
//determine whether or not there exist two elements in A whose sum is exactly x.

function keyPair(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}
