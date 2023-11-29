
// Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Input: nums = [3,2,3]
// Output: 3

function majorityElement(nums){
  let obj = {};                  // Initializing empty obj to add key/values to it.
  let lengthTosearch = nums.length /2;  // As given in the problem element should appear more than n/2.

  for(let i = 0; i<nums.length; i++){ // Looping through nums[] to iterate every element.
    if(!obj[nums[i]]){                // If obj[nums[i]] is not in the obj euals it with zero.
      obj[nums[i]] = 0;              
    }

    obj[nums[i]]++;                   // if it appears more than one time than increament it by 1.

    if(obj[nums[i]] >= lengthTosearch){  // if particular key in obj is more than nums.length / 2
      return nums[i];                    // return that key.
    }
  }
  return null;
   
}
console.log(majorityElement([3,2,3])); // consoling and calling the function




