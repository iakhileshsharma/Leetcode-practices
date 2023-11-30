// Removing elements from an array which will be equal to the val.
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]



function removeElement(nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;// returning the value of count
}