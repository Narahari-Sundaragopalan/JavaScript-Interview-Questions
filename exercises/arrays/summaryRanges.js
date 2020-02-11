/**
 * Given a unsorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
 */

const summaryRanges = nums => {
    if (nums.length === 0) {
        return [];
    }

    nums.sort((a, b) => a - b);
    const result = [];

    for (let start = 0, end = 0; end < nums.length; end++) {
        if (end + 1 < nums.length && nums[end + 1] === nums[end] + 1) {
            continue;
        }

        if (start === end) {
            result.push(nums[start] + '');
        } else {
            result.push(start + '->' + end);
        }
        start = end + 1;
    }

    return result;
}