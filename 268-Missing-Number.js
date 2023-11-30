// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers 
// are in the range [0,3]. 2 is the missing number in the 
// range since it does not appear in nums.


function missingNumber(nums){
   let obj = {};
   let n = nums.length;
   nums.sort((a,b)=> a-b);

   for(let el of nums){
    if(!obj[el]){
        obj[el] =1;
    }
   }
   for(let i = 0; i<=n; i++){
    if(!obj[i]){
        return i;
    }
   }
}

console.log(missingNumber([3,0,1]));