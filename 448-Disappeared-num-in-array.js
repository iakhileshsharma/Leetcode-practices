// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

function disappearedNum(nums){
    let finalArr = [];
    let n = nums.length;

    nums.sort((a, b) => a-b); 

        for(let j = 0; j<nums.length; j++){
            let i=j+1;
            if(i != nums[j]){
                finalArr.push(i);
            }
        }
     return finalArr;
    
    
}
console.log(disappearedNum([4,3,2,7,8,2,3,1]));
//console.log(disappearedNum([1,1]));
//disappearedNum([4,3,2,7,8,2,3,1]);