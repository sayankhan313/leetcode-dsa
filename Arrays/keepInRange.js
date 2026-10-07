function keepInRange(nums, low, high) {
  let reader = 0;
  let writer = 0;

  while (reader < nums.length) {
    if (nums[reader] >= low && nums[reader] <= high) {
      nums[writer] = nums[reader];
      writer++;
    }

    reader++;
  }

  return writer;
}