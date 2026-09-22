function frequrenyCount(arr){
    const freq={};
    for (i=0;i<arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]]++
        }
        else{
            freq[arr[i]] = 1
        }

    }
    return freq
}console.log(frequrenyCount([1,2,2,3,3,4,4,4,5,4]));
