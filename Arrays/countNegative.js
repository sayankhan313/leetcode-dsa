function countNegatives(nums) {
let negativeCount=0
for(let i=0;i<nums.length;i++){
    if(nums[i]<0){
        negativeCount++
    }
}
return negativeCount
}