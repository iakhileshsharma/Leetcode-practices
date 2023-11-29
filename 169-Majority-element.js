
// Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Input: nums = [3,2,3]
// Output: 3

function majorityElement(nums){
  let obj = {};                  // Initializing empty obj to add key/values to it.
  let lengthTosearch = nums.length /2;  // As given in the problem element should appear more than n/2.

  for(let i = 0; i<nums.length; i++){ // Looping through nums[] to iterate every element.
    if(!obj[nums[i]]){
      obj[nums[i]] = 0;
    }

    obj[nums[i]]++;

    if(obj[nums[i]] >= lengthTosearch){
      return nums[i];
    }
  }
  return null;
   
}
console.log(majorityElement([3,2,3]));




