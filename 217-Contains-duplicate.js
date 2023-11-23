// creating a function containsduplicate() with nums array to check if there is any duplicate element in array or not.
// Input = [1,2,3,1]
// Output = true
// if there is an duplicate element in array return tru or false

function containsDuplicate(nums){
    nums.sort((a,b) => a-b);                  // Firstly using sort() method to sort an array in asc order. 
    for(let i = 0; i <= nums.length-1; i++){  //Looping through the array(nums[]) with variable i and upto nums.length-1.
        if(nums[i] === nums[i+1]){            // if statement in for loop to check the condition. 
            return true
        }
    }
    return false
}
console.log(containsDuplicate([1,2,3,1])); // Consoling and calling function containsDuplicate