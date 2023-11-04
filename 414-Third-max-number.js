// Creating a function thirdMax() and returning the third distinct maximum number in an array(nums[]).
// input = [2,2,3,1]
// ouput = 1

function thirdMax(nums){
  nums.sort(function (a, b) {
    return a-b;
  }).reverse();   // Using sort() method for nums[], with a compare function(so it does not work as string)

  let newArr = [...new Set(nums)]; // Initilizing new array and applying Set method to remove duplicates.

    if(newArr.length < 3){
        return newArr[0];
    }else{
        return newArr[2];
    }
    
    
}
console.log(thirdMax([2,2,3,1]));
