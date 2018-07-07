// Given an array of size n-1 and given that there are numbers from 1 to n with one missing,
// the missing number is to be found.

function findMissingElement(n, arr) {
  const sum = n * (n + 1) / 2;
  const arraySum = arr.reduce((accumulator, element) => accumulator + element, 0);

  if (sum - arraySum) {
    return sum - arraySum;
  } else {
    return "No missing element";
  }
}
