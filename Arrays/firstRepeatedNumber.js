function firstRepeatedNumber(nums) {
    const freq={}

    for (i=0;i<nums.length;i++){
        if(freq[nums[i]]){
            freq[nums[i]]++

        }else{
            freq[nums[i]]=1
        }
    if(freq[nums[i]]===2){
        return nums[i]
    }
    
    }
 return -1;
}

