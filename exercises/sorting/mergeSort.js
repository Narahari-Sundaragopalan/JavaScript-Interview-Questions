// --- Directions
// Implement merge sort


function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.splice(0, center);
  const right = arr.splice(center);

  return merge(mergeSort(left), mergeSort(right));
}

// Merge function takes 2 sorted arrays and returns the merged sorted array
function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // Using the spread operator to push any remaining elements in left or right array
  return [...results, ...left, ...right];
}
