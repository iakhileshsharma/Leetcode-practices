// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers 
// are in the range [0,3]. 2 is the missing number in the 
// range since it does not appear in nums.


function missingNumber(nums){
   let obj = {};
   let n = nums.length;     // Initilizing variable n equals to length of the nums[].

   for(let el of nums){     // Appliying forEach loop to iterate through nums with el.
    if(!obj[el]){
        obj[el] =1;         // If the given condition is true, then put obj[el] = 1.
    }
   }
   for(let i = 0; i<=n; i++){   // Another foor loop outside the previous loop to iterate upto the value of n.
    if(!obj[i]){
        return i;               // Return the value of i is the given condition is true.
    } 
   }
}

console.log(missingNumber([3,0,1]));  // consoling and calling the function.