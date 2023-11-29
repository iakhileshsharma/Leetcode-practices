function majorityElement(nums){
 let obj = {};
 let key = Object.keys(obj);
    
    for(let i = 0; i<nums.length; i++){
        if(obj.nums[i] != nums[i]){
            obj.nums[i] = 1;
        }else{
            obj.nums[i] += 1;
        }
    }
}
//console.log(majorityElement([3,2,3]));
majorityElement([3,2,3]);



