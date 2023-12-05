// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.
// Input: nums = [2,2,1]
// Output: 1

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

console.log(singleNumber([4,1,2,1,2]));   // consoling and calling the function.
console.log(singleNumber([2,2,1]));
console.log(singleNumber([1]));