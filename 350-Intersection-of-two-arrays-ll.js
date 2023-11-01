// Creating a function to check the intersection between two arrays and return exact it shows in array.
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]


function intersect(nums1, nums2){
let newArr = [];    // Initilizing new empty array to store final value.

    for(let i = 0; i<nums1.length; i++){     // Looping through nums1[] with i variable upto nums1.length.
        
        for(let j = 0; j<nums2.length; j++){  // Adding another loop inside the loop with variable j upto nums2.length.
            if(nums1[i] == nums2[j]){         // if statement to check the elements of both the arrays.
                newArr.push(nums1[i]);        // pushing values into newArr(intilized on line 7)
                nums2.splice(j, 1);           // if the condition on line 12 is true we will splice the element from nums2.
                break;
            }
        }
    }
    return newArr;  // returning newArr 
}
console.log(intersect([4,9,5], [9,4,9,8,4]));