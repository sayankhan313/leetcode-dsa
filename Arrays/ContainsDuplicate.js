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
