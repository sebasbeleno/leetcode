/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];

    result.push([intervals[0][0], intervals[0][1]])

    let lastAddedInterval, currentStart, currentEnd, prevEnd

    for (let i = 0; i < intervals.length; i++) {
      lastAddedInterval = result[result.length - 1]

      currentStart = intervals[i][0]
      currentEnd = intervals[i][1]
      prevEnd = lastAddedInterval[1]
      prevStart = lastAddedInterval[0]

      if (prevEnd >= currentStart) {
        result[result.length - 1][1] = Math.max(prevEnd, currentEnd)
      } else {
        result.push([currentStart, currentEnd])
      }

    }

    return result
};