// Given an array of integers,
// return an output array such that
// output[i] is equal to the product of all the elements in the array other than itself.
// (Solve this in O(n) without division)


function productExceptSelf(arr) {
  let product = 1;
  let outputArr = [];

  // Find the product of the elements to the left of each element
  // and store in array
  for (let i = 0; i <= arr.length - 1; i++) {
    outputArr.push(product);
    product = product * arr[i];
  }

  // Find the product of elements to the right of each element
  // and update the output array
  product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    outputArr[i] = outputArr[i] * product;
    product = product * arr[i]
  }

  return outputArr;
}
