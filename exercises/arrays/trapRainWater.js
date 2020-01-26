/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it is able to trap after raining.
 */

const maxTrap = height => {
	let leftMax = [];
	let rightMax = [];
	let ans = 0;

	if (!height || height.length === 0) {
		return 0;
	}

	leftMax[0] = height[0];
	for (let i = 1; i < height.length - 1; i++) {
		leftMax[i] = Math.max(height[i], leftMax[i - 1]);
	}

	rightMax[height.length - 1] = height[height.length - 1];
	for (let i = height.length - 2; i >=0; i--) {
		rightMax[i] = Math.max(height[i], rightMax[i + 1]);
	}

	for (let i = 0; i < height.length - 1; i++) {
		ans += Math.min(rightMax[i], leftMax[i]) - height[i];
	}

	return ans;
}