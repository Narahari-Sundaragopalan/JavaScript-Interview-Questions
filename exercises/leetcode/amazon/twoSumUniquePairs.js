/**
 * Given an int array nums and an int target, 
 * find how many unique pairs in the array such that their sum is equal to target. 
 * Return the number of pairs.
 * 
 * Eg:
 * Input: nums = [1, 1, 2, 45, 46, 46], target = 47
    Output: 2
    Explanation:
    1 + 46 = 47
    2 + 45 = 47

    Input: nums = [1, 1], target = 2
    Output: 1
    Explanation:
    1 + 1 = 2

    Input: nums = [1, 5, 1, 5], target = 6
    Output: 1
    Explanation:
    [1, 5] and [5, 1] are considered the same.
 */

const twoSumUniquePairs = (nums, target) => {
    let left = 0; 
    let right = nums.length - 1;
    let pairCount = 0;
    const set = new Set();

    while (right > left) {
        if (nums[left] + nums[right] === target) {
            if (!set.has(nums[left]) && !set.has(nums[right])) {
                set.add(nums[left]);
                set.add(nums[right]);
                pairCount++;
            }
        }

        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            left++;
        }
    }

    return pairCount;
}