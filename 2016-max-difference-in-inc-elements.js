// Input: nums = [7,1,5,4]
// Output: 4

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
    return result;

    

    
    
}
console.log(maximumDifference([7,1,5,4]));
//console.log(maximumDifference([9,4,3,2]));
console.log(maximumDifference([1,5,2,10]));