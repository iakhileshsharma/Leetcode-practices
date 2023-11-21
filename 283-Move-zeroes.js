// Creating function moveZeroes() to move all the zeroes in array towards the end of array. 
// Input = [0,1,0,3,12]
// Output = [1,3,12,0,0];


function moveZeroes(nums){

    let i = 0;  // Initilizing i and j variable as 0(You can give any name to this).
    let j = 0;


    while(i<nums.length){
        if(nums[i]!=0){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
        i++;
    }
    return nums;
}
console.log(moveZeroes([0,1,0,3,12]));