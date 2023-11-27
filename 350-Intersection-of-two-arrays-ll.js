// Creating a function to check the intersection between two arrays and return exact it shows in array.
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]


function intersect(nums1, nums2){
let newArr = [];

    for(let i = 0; i<nums1.length; i++){
        
        for(let j = 0; j<nums2.length; j++){
            if(nums1[i] == nums2[j]){
                newArr.push(nums1[i]);
                nums2.splice(j, 1);
                break;
            }
        }
    }
    return newArr;
}
console.log(intersect([4,9,5], [9,4,9,8,4]));