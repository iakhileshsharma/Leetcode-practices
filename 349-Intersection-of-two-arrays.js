// Creating a function with parameters nums1 and nums2 
// Calculating the intersection of both the elements 
// input : nums1 =[4,9,5], nums2 =[9,4,9,8,4]

function intersect(nums1, nums2){
    let i = 0;         // Initializing i=0, so we can use this anywhere in a code.
    let Arr = [];  // Initializng an empty array to store values
    let newArr = [];
    while(i<nums1.length){ // Using a while loop for one array(nums1)
        
        for(let j = 0; j<nums2.length; j++){ // looping through the nums2 array by initializing j as a variable.
            if(nums1[i] == nums2[j]){
                Arr.push(nums1[i]); // Using push() method to add new values in new array(newArr)
                newArr = [...new Set(Arr)]; // Using set() to avoid duplicates.
            }
        }
        i++; // Increamenting the value of i
    }
    return newArr;   // Returning the final array
}

console.log(intersect([4,9,5],[9,4,9,8,4]));


