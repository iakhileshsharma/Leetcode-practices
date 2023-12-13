// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.
// Input: nums = [2,2,1]
// Output: 1

function singleNumber(nums){
  let obj = {};

  for(let i of nums){
    if(!obj[i]){
        obj[i] = 1;
    }else{
        obj[i] += 1;
    }
  }
  for(let j = 0; j<nums.length; j++){
    if(obj[nums[j]] == 1){
        return nums[j];
    }
  }
}

console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([2,2,1]));
console.log(singleNumber([1]));