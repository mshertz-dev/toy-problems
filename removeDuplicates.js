let nums = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) {
  let output = nums;
  for (var i = 1; i < output.length; i++) {
      if (output[i] === output[i-1]) {
      output.splice(i, 1);
      i--;
      }
  }
  return output;
};