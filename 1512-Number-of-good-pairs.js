// Input: nums = [1,2,3,1,1,3]
// Output: 4


function numIdenticalPairs(nums){
let len = nums.length;
let finalPair = 0;

  for(let i = 0; i < len ; i ++){
      for(let j= i+1 ; j < len; j++){
           if(nums[i]===nums[j]) 
           finalPair++;
      }
  }
  return finalPair;
}

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));
console.log(numIdenticalPairs([1,2,3]));