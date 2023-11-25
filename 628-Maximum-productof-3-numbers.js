// Creating the function maximumProduct() to calculate the maximum product of any three number.
// Input: nums = [1,2,3,4]
// Output: 24
// Explanation : If we multiple 2*3*4 = 24 (which is maximum product of three number in an array).

function maximumProduct(nums){
    nums.sort(function (a, b) {  // using sort() method to sort the given array in asc order.
        return a-b;
    });
      
    let n = nums.length;        // initilizing n variable equals to length of an array
      return Math.max(nums[n-1] * nums[n-2] * nums[n-3], nums[0]* nums[1]*nums[n-1]);  // Math.max() method to compare between two cases here.
}
console.log(maximumProduct([-100,-98,-1,2,3,4])); // consoling and calling the function 