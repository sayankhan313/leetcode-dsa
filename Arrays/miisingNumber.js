var missingNumber = function(nums) {
    const seen=new Set(nums)
    for( let i=0;i<=nums.length;i++){
        if(!seen.has(i)){
            return i
        }
    }
};