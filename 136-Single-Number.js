// Input: nums = [2,2,1]
// Output: 1

function singleNumber(nums){
   let obj = {};
   let i = 0;

   for(i ; i < nums.length; i++){
       if(!obj[nums[i]]){
        obj[nums[i]] = 0;
       }
       obj[nums[i]]++;
    }
   
}


console.log(singleNumber([4,1,2,1,2]))