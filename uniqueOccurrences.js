// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.



// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

/*
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let tracker = {};
  let results = [];
  let unique = true;
  arr.forEach((el) => {
    if (tracker[el] === undefined) {
        tracker[el] = 1;
    } else {
        tracker[el]++;
    }
  });
  for (var key in tracker) {
      results.push(tracker[key]);
  };
  results.sort((a, b) => {
      return a - b;
  })
  results.forEach((result, i) => {
      if (result === results[i+1]) {
          unique = false;
      }
  })
  return unique;
};