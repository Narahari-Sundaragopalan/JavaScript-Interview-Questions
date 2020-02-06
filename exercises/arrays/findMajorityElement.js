// Write a program to find the majority element in the array.
// A majority element in an array A[] of size n is an element that appears more than n/2 times
// (and hence there is at most one such element).
// If input array doesn't contain a majority element, then output "NO Majority Element"

function findMajorityElement(n, arr) {
  const majorityCount = n / 2;
  const arrayMap = {};

  for (let element of arr) {
    arrayMap[element] = arrayMap[element] + 1 || 1;
  }

  for (let element in arrayMap) {
    if (arrayMap[element] > majorityCount) {
      return element;
    }
  }

  return "No majority element";
}
