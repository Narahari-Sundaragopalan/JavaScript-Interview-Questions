/**
 * Given a sorted integer array nums, where the range of elements are in the inclusive range 
 * [lower, upper], return its missing ranges.

Example:

Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
 */

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const missingRanges = (nums, lower, upper) => {
	nums = [lower - 1, ...nums, upper + 1];

	const results = [];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1] && nums[i] - 1 !== nums[i -1]) {
			let num1 = nums[i - 1] + 1;
			let num2 = nums[i] - 1;
			results.push(
				num1 + (num2 === num1 ? "" : "->" + num2)
			);
		}
	}

	return results;
}