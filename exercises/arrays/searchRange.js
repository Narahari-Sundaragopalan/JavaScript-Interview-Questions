/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
 */

const findExtremeIndex = (nums, target, findLeft) => {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (target < nums[mid] || (findLeft && target === nums[mid])) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

const searchRange = (nums, target) => {
    let result = [-1, -1];

    const leftExtremeIndex = findExtremeIndex(nums, target, true);

    if (leftExtremeIndex === nums.length || nums[leftExtremeIndex] !== target) {
        return result;
    }

    result[0] = leftExtremeIndex;
    result[1] = findExtremeIndex(nums, target, false) - 1;

    return result;
}