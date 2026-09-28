function singleNumber(nums) {
let freq={}

for (let i=0;i<nums.length;i++){
    if(freq[nums[i]]){
       freq[nums[i]]++
    }else {
         freq[nums[i]] = 1;
    }
}
for (let i=0;i<nums.length;i++){
    if(freq[nums[i]]===1){
        return nums[i]
    }
}

}