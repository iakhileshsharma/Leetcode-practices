// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

function merge(nums1, m, nums2, n){
    let i = m-1;                     // Initilizing i variable equals to m-1.
    let j = n-1;                     // Initilizing j variable equals to n-1.
    let k = m+n - 1;
    
    while(j >= 0){                   // using while loop with the condition.
        if(i >= 0 && nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--];       // if the condition in line 10 is true then this line will executes.
        }else {
            nums1[k--] = nums2[j--];       // else this will execute
        }
    }

}
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));