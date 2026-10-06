/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let x= 0
    // for ( let i=0;i<nums.length;i++){
    //     if(nums[i] !== 0){
    //         nums[x]=nums[i]
    //         x++
    //     }
    // }
    // for (let i=x; i < nums.length; i++){
    //     nums[i]=0
    // }
let reader = 0;
  let writer = 0;

  while (reader < nums.length) {
    if (nums[reader] !== 0) {
      nums[writer] = nums[reader];
      writer++;
    }

    reader++;
  }

  while (writer < nums.length) {
    nums[writer] = 0;
    writer++;
  }
};