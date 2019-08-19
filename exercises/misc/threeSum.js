/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.
*/

var threeSum = function(nums) {
    const results = [];
    nums.sort();
    
    for (let i = 0; i < nums.length-2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        
        if (nums[i] === nums[i-1]) {
            continue;
        }
        
        while(j < k) {
            if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                results.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j-1]) {
                    j++
                }
                while (j < k && nums[k] === nums[k+1]) {
                    k--;
                }
            }
        }
    }
    return results;
};