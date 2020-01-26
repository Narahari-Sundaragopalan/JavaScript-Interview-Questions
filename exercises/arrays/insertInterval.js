/**
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

const insertInterval = (intervals, newInterval) => {
    // first add all intervals before new interval to output
    const output = [];
    let newStart = newInterval[0];
    let newEnd = newInterval[1];
    let index = 0;
    let n = intervals.length;

    while (index < n && intervals[index][0] < newStart) {
        output.push(intervals[index]);
        index++;
    }

    if (output.length === 0 || output[output.length - 1][1] < newStart) {
        // new Interval is not overlapping with any prev intervals, so just add it
        output.push(newInterval);
    } else {
        // merge the overlapping intervals
        let interval = output.pop();
        interval[1] = Math.max(interval[1], newEnd);
        output.push(interval);
    }

    // push all other intervals after new interval
    while (index < n) {
        let interval = intervals[index];
        let start = interval[0];
        let end = interval[1];

        if (output[output.length - 1][1] < start) {
            output.push(interval);
        } else {
            interval = output.pop();
            interval[1] = Math.max(interval[1], end);
            output.push(interval);
        }
        index++;
    }

    return output;
}