// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. 
// The maximum count among them is 3.
// Note that 0 is neither positive nor negative.

function maximumCount(nums){
    let negtiveCount = 0;          // Initilizing negtiveCount to store number of negative integer in nums.
    let postiveCount = 0;          // Initilizing postiveCount to store number of positive integers in nums.
    let result = 0;                // Initilizing result for the final check between negtiveCount And postiveCount.
  
      for(let i = 0; i<nums.length; i++){      // Looping through nums with variable i.
          if(nums[i] < 0){
            negtiveCount += 1;                     // if the conditon is true in line number 13 then add 1 into negativeCount.
          } else if(nums[i] > 0){
            postiveCount += 1;                     // else the condition in line 15 is true then plus 1 in positiveCount.
          }
      }
    result = Math.max(negtiveCount, postiveCount);
    return result;                                 // returning the result with after comapring both negativeCount and Positivecount with Math.max function. 
}
console.log(maximumCount([-2,-1,-1,1,2,3]));        
console.log(maximumCount([-3,-2,-1,0,0,1,2]));      // consoling and callling the function.
console.log(maximumCount([5,20,66,1314]));