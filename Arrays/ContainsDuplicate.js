function duplicate(arr){
    let freq={}
    for( let i=0;i<arr.length;i++){
    if((freq[arr[i]])){
        freq[arr[i]]++
    }
    else 
    {
freq[arr[i]] =1 
    }
if (freq[arr[i]]>1){
   return  true
}
    }
     return false 
}

console.log(duplicate([1,2,3,3,4,4]));



// set map

function duplicate(arr){
    const seen = new Set();
    for (let i=0;i<arr.length;i++){
        if(seen.has(arr[i])){
            return true 
        }
        else{
            seen.add(arr[i])
        }
    }
return false 
}


//


function duplicate(nums,target){
    for (let i=0;i<nums.length;i++){
        for (let j=i+1; j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return[ i,j ]
            }
    

        }
    }
}