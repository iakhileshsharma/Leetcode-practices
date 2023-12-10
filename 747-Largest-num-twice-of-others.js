// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

function dominantIndex(nums){
    let i = 0;
    let fact = 0;
    
    while(i<nums.length){
        
           fact = nums[i+1] * 2;
           if(nums[i] > fact){
               return i;
           }
        
        i++;
    }
    return -1;

}
console.log(dominantIndex([3,6,1,0])); //consoling
//dominantIndex([3,6,1,0]);