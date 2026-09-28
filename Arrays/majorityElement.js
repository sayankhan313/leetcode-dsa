function majorityElement(nums) {
    const freq={}
    let maxcount=0
    let answer= null 
    
    for (i=0;i<nums.length;i++){
        if(freq[nums[i]]){
            freq[nums[i]]++
        }
        else{
            freq[nums[i]]=1
        }
    
    }
for (i=0;i<nums.length;i++){
    if(maxcount<freq[nums[i]]){
        maxcount=freq[nums[i]]
         answer = nums[i];
    }
}
return answer

}