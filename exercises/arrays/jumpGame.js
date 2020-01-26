/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.
 */

const minJump = nums => {
	const jumpsArray = [0];

	for (let i = 1; i < nums.length; i++) {
		jumpsArray[i] = Number.MAX_SAFE_INTEGER;
	}
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (i <= j + nums[j]) {
				jumpsArray[i] = Math.min(jumpsArray[i], jumpsArray[j] + 1);
			}
		}
	}

	return jumpsArray[jumpsArray.length - 1];
}

// Optimal Solution

const jump = nums => {
	if (nums.length < 2) {
		return 0;
	}

	let i = 0;
	let jumps = 0;

	while (i + nums[i] < nums.length - 1) {
		let maxVal = 0;
		let maxValIndex = 0;

		for (let j = 1; j <= nums[i]; j++) {
			if (nums [i + j] + j > maxVal) {
				maxVal = nums[i + j] + j;
				maxValIndex = i + j;
			}
		}
		i = maxValIndex;
		jumps++;
	}

	return jumps + 1;
}