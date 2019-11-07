/**
 * Given a string s and an int k, return an int representing the number of substrings 
 * (not unique) of s with exactly k distinct characters. 
 * If the given string doesn't have k distinct characters, return 0.
 * 
 * Eg:
 * Input: s = "pqpqs", k = 2
Output: 7
Explanation: ["pq", "pqp", "pqpq", "qp", "qpq", "pq", "qs"]

Input: s = "aabab", k = 3
Output: 0

Constraints:
The input string consists of only lowercase English letters [a-z]
0 ≤ k ≤ 26
 */

const findKDistinct = (A, K) => {
    const atMost = k => {
        let left = 0;
        let result = 0;
        const count = {};

        for (let right = 0; right < A.length; right++) {
            if (count[A[right]] == null) {
                count[A[right]] = 0;
            }

            if (count[A[right]] === 0) {
                k--;
            }
            count[A[right]]++

            while (k < 0) {
                count[A[left]]--;
                if (count[A[left]] === 0) {
                    k++;
                }
                left++;
            }
            result += right - left + 1;
        }

        return result;
    }

    return atMost(K) - atMost(K - 1);
}