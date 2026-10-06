var removeDuplicates = function(nums) {
  let reader = 1;
  let writer = 1;

  while (reader < nums.length) {
    if (nums[reader] !== nums[writer - 1]) {
      nums[writer] = nums[reader];
      writer++;
    }

    reader++;
  }

  return writer;
};