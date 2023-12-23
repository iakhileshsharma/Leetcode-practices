// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. 
// The maximum count among them is 3.

function maximumCount(nums){
    let negCount = 0;
    let posCount = 0;
    let result = 0;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] < 0){
            negCount += 1;
        } else if(nums[i] > 0){
            posCount += 1;
        }
    }
    result = Math.max(negCount, posCount);
    return result;
}
console.log(maximumCount([-2,-1,-1,1,2,3]));
console.log(maximumCount([-3,-2,-1,0,0,1,2]));
console.log(maximumCount([5,20,66,1314]));