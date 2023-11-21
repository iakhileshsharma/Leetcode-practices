function moveZeroes(nums){

    let i = 0;
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