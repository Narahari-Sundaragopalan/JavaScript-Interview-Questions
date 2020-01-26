/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

const findMedianSortedArrays = (nums1, nums2) => {
    let a = 0;
    let b = 0;
    const totalLength = nums1.length + nums2.length;
    const result = [];

    for (let i = 0; i < totalLength; i++) {
        if (a < nums1.length && b < nums2.length) {
            if (nums1[a] < nums2[b]) {
                result[i] = nums1[a];
                a++;
            } else {
                result[i] = nums2[b];
                b++;
            }
        } else {
            if (a < nums1.length) {
                result[i] = nums1[a];
                a++;
            } else {
                result[i] = nums2[b];
                b++;
            }
        }
    }

    let medIdx = Math.floor(result.length / 2);

    if (result.length % 2 === 0) {
        return (result[medIdx] + result[medIdx - 1]) / 2;
    }

    return result[medIdx];
}