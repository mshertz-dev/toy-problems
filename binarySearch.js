//Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

/*
@param {number[]} nums
@param {number} target
@return {number}
 */
var search = function(nums, target) {
let start = 0;
let end = nums.length - 1;
let midpoint = Math.floor((end + start) / 2);

while (end  >= start) {
  if (nums[midpoint] === target) {
    return midpoint;
  } else if (nums[midpoint] > target) {
    end = midpoint - 1;
    midpoint = Math.floor((end + start) / 2);
  } else if (nums[midpoint] < target) {
    start = midpoint + 1;
    midpoint = Math.floor((end + start) / 2);
  }
  }
  return -1;
};