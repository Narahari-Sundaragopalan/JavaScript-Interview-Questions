/**
 * Given 2 lists a and b. Each element is a pair of integers where the first integer represents 
 * the unique id and the second integer represents a value. 
 * Your task is to find an element from a and an element form b 
 * such that the sum of their values is less or equal to target 
 * and as close to target as possible. Return a list of ids of selected elements. 
 * If no pair is possible, return an empty list.

Example 1:
Input:
a = [[1, 2], [2, 4], [3, 6]]
b = [[1, 2]]
target = 7

Output: [[2, 1]]

Explanation:
There are only three combinations [1, 1], [2, 1], and [3, 1], which have a total sum of 4, 6 and 8, respectively.
Since 6 is the largest sum that does not exceed 7, [2, 1] is the optimal pair.

 */

const optimizeUtilization = (a, b, target) => {
    a.sort((x, y) => x[1] - y)[1];
    b.sort((x, y) => x[1] - y[1]);

    let left = 0;
    let right = b.length - 1;
    let smallestDifference = target;
    let output = [];

    while (left < a.length && right >= 0) {
        let currentDifference = target - (a[left][1] + b[right][1]);

        if (currentDifference >= 0 && currentDifference < smallestDifference) {
            output = [ [a[left][0], b[right][0]] ];
            smallestDifference = currentDifference
        } else if (currentDifference >= 0 && currentDifference === smallestDifference) {
            output.push([a[left][0], b[right][0]]);
        }

        if (a[left][1] + b[right][1] > target) {
            right--;
        } else {
            left++;
        }
    }

    return output;
}