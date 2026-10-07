var removeDuplicates = function(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let reader = 2;
  let writer = 2;

  while (reader < nums.length) {
    if (nums[reader] !== nums[writer - 2]) {
      nums[writer] = nums[reader];
      writer++;
    }

    reader++;
  }

  return writer;
};