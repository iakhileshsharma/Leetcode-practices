function intersect(nums1, nums2){
    let i = 0;
    let newArr = [];

    while(i<nums1.length){
        
        for(let j = 0; j<nums2.length; j++){
            if(nums1[i] == nums2[j]){
                newArr.push(nums1[i]);
            }
        }
        i++;
    }
    return newArr;   
}

console.log(intersect([4,9,5], [9,4,9,8,4]));


