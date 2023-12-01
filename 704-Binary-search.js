// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// creating function called search( with parameters nums and target)


function search(nums, target){          

    for(let i = 0;i<nums.length; i++){ // Looping through nums[] to iterate over every element in array.
        if(nums[i] == target){         // Using if statment to check whether the target is in array or not.
            return i;                  // If given statement is true that return the index it self.
        }
    }
    return -1;                         // if the condition is not true than we return -1 outside the loop.
}
console.log(search([-1,0,3,5,9,12], 9)); // consoling and calling the function