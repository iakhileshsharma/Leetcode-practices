// Creating function moveZeroes() to move all the zeroes in array towards the end of array. 
// Input = [0,1,0,3,12]
// Output = [1,3,12,0,0];


function moveZeroes(nums){

    let i = 0;  // Initilizing i and j variable as 0(You can give any name to this).
    let j = 0;


    while(i<nums.length){  // while loop with the condition of i must be smaller than length of nums.
        if(nums[i]!=0){    // If statement for checking if the number is equal to zero or not. 
            [nums[i], nums[j]] = [nums[j], nums[i]];  // Elements will swap only if the condition is true.
            j++;           // Increamenting only the value of j
        }
        i++;     // Increamenting value of i outside the if block
    }
    return nums; // returning nums 
}
console.log(moveZeroes([0,1,0,3,12]));

