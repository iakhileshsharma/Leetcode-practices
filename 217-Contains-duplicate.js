// creating a function containsduplicate() with nums array to check if there is any duplicate element in array or not.
// Input = [1,2,3,1]
// Output = true

function containsDuplicate(nums){
    nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
}
console.log(containsDuplicate([1,2,3,1]));