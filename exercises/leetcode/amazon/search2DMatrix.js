/**
 * 
 * Write an efficient algorithm that searches for a value in an m x n matrix. 
 * This matrix has the following properties:
 * 
 * Integers in each row are sorted in ascending from left to right.
 * 
 * Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
 */

const searchMatrix = (matrix, target) => {
    const binarySearch = (row, target) => {
        let start = 0;
        let end = row.length - 1;

        while (start <= end) {
            let midPoint = Math.floor((start + end) / 2);

            if (target === row[midPoint]) {
                return true;
            } else if (target <= row[midPoint]) {
                end = midPoint - 1;
            } else {
                start = midPoint + 1;
            }
        }

        return false;
    }

    for (let row of matrix) {
        if (binarySearch(matrix[row], target)) {
            return true;
        }
    }

    return false;
}