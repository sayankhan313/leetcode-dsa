
function keepEvenNumbers(nums) {
  let reader = 0;
  let writer = 0;

  while (reader < nums.length) {
    if (nums[reader] % 2 === 0) {
      nums[writer] = nums[reader];
      writer++;
    }

    reader++;
  }

  return writer;
}
