// Creating a function with parameters nums1 and nums2 
// Calculating the intersection of both the elements 


function intersect(nums1, nums2){
    let i = 0;
    let newArr = [];  // Initializng an empty array to store values

    while(i<nums1.length){ // Using a while loop for one array(nums1)
        
        for(let j = 0; j<nums2.length; j++){
            if(nums1[i] == nums2[j]){
                newArr.push(nums1[i]);
            }
        }
        i++;
    }
    return newArr;   
}

console.log(intersect());


