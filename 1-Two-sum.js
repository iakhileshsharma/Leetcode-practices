// Creating a function to check the sum of two elements in an array equals to the given target.
// For example we can assume nums = [2,7,11,15], target = 9
 

function twoSum(nums, target) {
    // looping through the nums with i and j(where j will be always +1 than i)
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            const finalnum = nums[i] + nums[j];//adding the value of nums and storing it in finalnum variable.
            
            if(finalnum === target) //Giving a condition for checking if the finalnum is equal to the given tagret or not
            
            return [i,j]; // Returnng the value of i and j (indexes only)
        }
    }
}

console.log(twoSum([2,7,11,15], 9)); 
console.log(twoSum([3,2,4], 6)); //consoling and calling the function with nums[] with random numbers and specific target value.
console.log(twoSum([3,3], 6));