// All the given cases in problem
// Input: nums = [7,1,5,4]
// Output: 4
// Input: nums = [9,4,3,2]
// Output: -1

function maximumDifference(nums) {
    let i = 0;
    let max = 0;                     // Initiilizing max variable for further calculation in line 15.
    let result = 0;                  

    while(i < nums.length){         // While loop to iterate through nums upto the length.
       for(let j = i+1; j<nums.length; j++){       // for loop inside the while with j variable to check condition between two elements of array.
        if(nums[i] < nums[j]){
            max = nums[j] - nums[i];               // In this line we store the difference of element in max.
            result = Math.max(result, max);        // result will contain maximum of max and result, by using Math.max function
        }
       }
    i++;                                            // increamenting i by plus one after the if condition.
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