/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
[6,7,0,1,2,4,5]
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
 * @param {array} nums 
 * @param {int} target 
 */
const search = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let midPoint = Math.floor((start + end) / 2);
        if (nums[midPoint] === target) {
            return midPoint;
        } else if (nums[midPoint] > target) {
            if (target <= nums[end] && nums[end] < nums[midPoint]) {
                start = midPoint + 1;
            } else {
                end = midPoint - 1;
            }
        } else if (nums[midPoint] < target) {
            if (target >= nums[start] && nums[start] > nums[midPoint]) {
                end = midPoint - 1;
            } else {
                start = midPoint + 1;
            }
        }
    }

    return -1;
}