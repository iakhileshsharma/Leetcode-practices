// Creating a function thirdMax() and returning the third distinct maximum number in an array(nums[]).
// input = [2,2,3,1]
// ouput = 1

function thirdMax(nums){
  nums.sort(function (a, b) {
    return a-b;
  }).reverse();   // Using sort() method for nums[], with a compare function(so it does not work as string)

  let newArr = [...new Set(nums)]; // Initilizing new array and applying Set method to remove duplicates.

    if(newArr.length < 3){ // If else statement for different conditions 
        return newArr[0];   // Returning [0]th element if length of an array is lesser than 3
    }else{
        return newArr[2];    // Returning [2]th element as the third distinct number.
    }
    
    
}
console.log(thirdMax([2,2,3,1]));
