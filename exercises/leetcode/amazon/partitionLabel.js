/**
 * A string S of lowercase letters is given. 
 * We want to partition this string into as many parts as possible 
 * so that each letter appears in at most one part, 
 * and return a list of integers representing the size of these parts.
 * 
 * Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 */

const partitionLabel = S => {
    const partitions = [];
    const lastIndexMap = {};

    for (let i = 0; i < S.length; i++) {
        lastIndexMap[S[i]] = i;
    }

    let startIndex = 0; let endIndex = 0;

    for (let i = 0; i < S.length; i++) {
        startIndex = Math.max(startIndex, lastIndexMap[S[i]]);

        if (startIndex === i) {
            partitions.push(i - endIndex + 1);
            lastIndex = i + 1;
        }
    }

    return partitions;
}