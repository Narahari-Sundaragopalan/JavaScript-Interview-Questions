/**
 * Given a list of positive integers nums and an int target, return indices of the two numbers such that they add up to a target - 30.

Conditions:

You will pick exactly 2 numbers.
You cannot pick the same element twice.
If you have muliple pairs, select the pair with the largest number.

Input: nums = [1, 10, 25, 35, 60], target = 90
Output: [2, 3]
Explanation:
nums[2] + nums[3] = 25 + 35 = 60 = 90 - 30
 */

const findTwoPairSum = (nums, target) => {
    let left = 0; let right = nums.length - 1;
    target = target - 30;
    let output = [];

    while (right > left) {
        if (nums[left] + nums[right] === target) {
            if (output.length) {
                if (nums[left] === Math.max(nums[left], output[0], output[1]) ||
                        nums[right] === Math.max(nums[right], output[0], output[1])) {
                            output = [left, right];
                        }
            } else {
                output = [left, right];
            }
        }

        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            left++;
        }
    }

    return output;
}