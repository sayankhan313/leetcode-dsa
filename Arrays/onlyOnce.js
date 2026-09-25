 function onlyOnce(arr){
const freq={};
for(let i=0;i<arr.length;i++){
    if(freq[arr[i]]){
        freq[arr[i]]++

    }
    else freq[arr[i]]=1

    for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === 1) {
      return arr[i];
    }


    }


}












}