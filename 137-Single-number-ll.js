// Given an integer array nums where every element appears three times 
// except for one, which appears exactly once. 
// Find the single element and return it.
// Input: nums = [2,2,3,2]
// Output: 3

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
console.log(singleNumber([2,2,3,2]));

