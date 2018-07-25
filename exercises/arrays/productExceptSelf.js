// Given an array of integers,
// return an output array such that
// output[i] is equal to the product of all the elements in the array other than itself.
// (Solve this in O(n) without division)

function productExceptSelf(arr) {
  let product = 1;
  let output = [];

  // Get the product of the elements to the left side of the index
  // and push them to an output array
  for (let i = 0; i <= arr.length - 1; i++) {
    output.push(product);
    product = product * arr[i];
  }

  product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    output[i] = output[i] * product;
    product = product * arr[i];
  }

  return output;
}
