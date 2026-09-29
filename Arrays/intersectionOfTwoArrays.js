function intersection(nums1, nums2) {
const set1= new Set(nums1)
const result=[]
for (i=0;i<nums2.length;i++){
    if(set1.has(nums2[i])){
        result.add(nums2[i])

    }
}
return [...result]
}