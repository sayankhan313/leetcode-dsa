// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//     let x=0;
//     for ( let i=0;i<nums.length;i++){
//         if( nums[i]>nums[x]){
//             x=x+1;
//             nums[x]=nums[i]
//         }

//     }
//     return (x+1)
// };


var removeElement = function(nums, val) {
  let reader = 0;
  let writer = 0;

  while (reader < nums.length) {
    if (nums[reader] !== val) {
      nums[writer] = nums[reader];
      writer++;
    }

    reader++;
  }

  return writer;
};