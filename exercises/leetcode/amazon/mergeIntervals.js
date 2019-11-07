/**
 * Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

const mergeIntervals = intervals => {
    let n = intervals.length;

    if (n <= 1) {
        return intervals;
    }

    intervals.sort(([a, b], [c, d]) => a - c || b - d);

    let i = 1;
    let start = intervals[0][0];
    let end = intervals[0][1];
    const result = [];

    while (i < n) {
        if (intervals[i][0] <= end) {
            start = Math.min(start, intervals[i][0]);
            end = Math.max(end, intervals[i][1]);
        } else {
            result.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
        i++;
    }

    result.push([start, end]);
    return result;
}
