// All the given cases in problem
// Input: nums = [7,1,5,4]
// Output: 4
// Input: nums = [1,5,2,10]
// Output: 9
// Input: nums = [9,4,3,2]
// Output: -1

function maximumDifference(nums) {
    let i = 0;
    let max = 0;
    let result = 0;

    while(i < nums.length){
       for(let j = i+1; j<nums.length; j++){
        if(nums[i] < nums[j]){
            max = nums[j] - nums[i];
            result = Math.max(result, max);
        }
       }
    i++;
    }
    if(result >= 1){
        return result;
    }else {
        return -1;
    }
}
console.log(maximumDifference([7,1,5,4]));
console.log(maximumDifference([9,4,3,2]));
console.log(maximumDifference([1,2]));