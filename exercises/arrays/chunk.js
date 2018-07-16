// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
  // Declare an array to hold the chunked array
  const chunked = [];

  // Iterate over each element of the unchunked array
  for (let element of array) {

    // Find the last element of the chunked array
    const lastElement = chunked[chunked.length - 1];

    // if lastElement does not exist or its size is equal to chunk size, push a new chunk and the element to chunked array
    if (!lastElement || lastElement.length === size) {
      chunked.push([element]);
    } else {
      // Else push the element to the current chunk
      lastElement.push(element);
    }
  }

  return chunked;
}


// Using the slice method in subarray

function chunk(array. size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}
