var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            const finalnum = nums[i] + nums[j];
            if(finalnum === target)return [i,j];
        }
    }
};

