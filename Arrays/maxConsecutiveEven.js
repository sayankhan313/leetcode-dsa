function maxConsecutiveEven(nums) {
let count=0
let maxCount=0
for (let i=0;i<nums.length;i++){
    if (nums[i]%2===0){
        count++

    }else {
        count=0
    }
    if(count>maxCount){
    maxCount=count
}
}

return maxCount
}