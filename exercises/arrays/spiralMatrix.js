/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * @param {*} matrix 
 */
const spiralMatrix = matrix => {
	const result = [];

	if (matrix.length === 0) {
		return [];
	}

	let startRow = 0;
	let endRow = matrix.length - 1;
	let startColumn = 0;
	let endColumn = matrix[0].length - 1;
	
	
	while (startRow <= endRow && startColumn <= endColumn) {
		for (let i = startColumn; i <= endColumn; i++) {
			result.push(matrix[startRow][i]);
		}

		for (let i = startRow + 1; i <= endRow; i++) {
			result.push(matrix[i][endColumn]);
		}

		if (startRow < endRow &&  startColumn < endColumn) {
			for (let i = endColumn - 1; i > startColumn; i--) {
				result.push(matrix[endRow][i]);
			}

			for (let i = endRow; i > startRow; i--) {
				result.push(matrix[i][startColumn])
			}
		}
		startRow++;
		endRow--;
		startColumn++;
		endColumn--;
	}

	return result;
}

/**
 * startRow = 0 
 * endColumn = 3 
 * endRow = 2 
 * startColumn = 0 
 */

 /**
  * [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
  * [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
startRow = 0 => 1 => 2
endRow = 2 => 1 => 0
startColumn = 0 => 1 
endColumn = 2 => 1
  */