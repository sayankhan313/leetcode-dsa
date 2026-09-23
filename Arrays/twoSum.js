// brute forse 
// var twoSum = function(nums, target) {
    
//     for (i=0;i<nums.length;i++){
//         for (j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]=== target){
//                 return [i,j]
                
                
//             }
//         }
        
//     }
   
// };

//hash map


var twoSum = function(nums, target){
    const map= new Map()
    for (let i=0;i<nums.length;i++){
        let first =nums[i];
        let complement=target-first;
        if(map.has(complement)){
            return[map.get[complement],i]
        }
        map.set(nums[i],i)


    }
}