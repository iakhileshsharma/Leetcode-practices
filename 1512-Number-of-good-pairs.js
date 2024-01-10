// Input: nums = [1,2,3,1,1,3]
// Output: 4


function numIdenticalPairs(nums){
let len = nums.length;            // Initilizing len variable equals to length of the nums[].
let finalPair = 0;                // Initilzing finalpair variable to store final value.

  for(let i = 0; i < len ; i ++){      // Using for loop upto len with i variable.
      for(let j= i+1 ; j < len; j++){
           if(nums[i]===nums[j]) 
           finalPair++;                // Increamenting finalpair by plusone.
      }
  }
  return finalPair;                  // returning finalpair
}

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));
console.log(numIdenticalPairs([1,2,3]));