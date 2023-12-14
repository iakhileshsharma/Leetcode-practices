// Given an integer array nums where every element appears three times 
// except for one, which appears exactly once. 
// Find the single element and return it.
// Input: nums = [2,2,3,2]
// Output: 3

function singleNumber(nums){
let obj = {};               // Initilizing obj as an empty object

    for(let i of nums){         // Looping through nums with i.
      if(!obj[i]){              // If the i element is not in obj, then give it a value of 1.
          obj[i] = 1;
      }else{
          obj[i] += 1;          // If it is already there, then plus one the value.
      }
    }
    for(let j = 0; j<nums.length; j++){    // Another for loop with variable j to iterate upto length of nums.
      if(obj[nums[j]] == 1){
          return nums[j];                  // if the condition is true, then return the jth value from nums.
      }
    }
}
console.log(singleNumber([2,2,3,2])); 

