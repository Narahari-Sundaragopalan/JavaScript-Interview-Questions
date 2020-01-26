/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
 */

 // O(n2) : Time Complexity
 // O(n) : Space Complexity
const INDEX = {
    'G': 'GOOD',
    'B': 'BAD',
    'U': 'UNKNOWN'
}
const canJump = nums => {
    const map = [];

    for (let i = 0; i < nums; i++) {
        map[i] = INDEX.U;
    }
    map[map.length - 1] = INDEX.G

    for (let pos = nums.length - 2; pos >= 0; pos--) {
        let furthestJump = Math.min(pos + nums[pos], nums.length - 1);
        for (let j = pos + 1; j <= furthestJump; j++) {
            if (map[j] == INDEX.G) {
                map[pos] = INDEX.G;
                break;
            }
        }
    }

    return map[0] == INDEX.G;
}

// Greedy Approach

const canJump = nums => {
	let lastPos = nums.length - 1;

	for (let i = nums.length - 1; i >= 0; i--) {
		if (i + nums[i] >= lastPos) {
			lastPos = i;
		}
	}

	return lastPos == 0;
}