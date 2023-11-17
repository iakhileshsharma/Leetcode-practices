// Creating a function with parameters nums1 and nums2 
// Calculating the intersection of both the elements 


function intersect(nums1, nums2){
    let i = 0;         // Initializing i=0, so we can use this anywhere in a code.
    let newArr = [];  // Initializng an empty array to store values

    while(i<nums1.length){ // Using a while loop for one array(nums1)
        
        for(let j = 0; j<nums2.length; j++){ // looping through the nums2 array by initializing j as a variable.
            if(nums1[i] == nums2[j]){
                newArr.push(nums1[i]); // using push() method to add new values in new array(newArr)
            }
        }
        i++; // Increamenting the value of i
    }
    return newArr;   
}

console.log(intersect([4,9,5], [9,4,9,8,4]));


