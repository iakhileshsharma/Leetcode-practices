// Creating function findConsecutiveOnes(nums) to find number of consecutive ones in an given array.
// Input = [1,1,0,1,1,1]
// Output = 3

function findConsecutiveOnes(nums){
    let max = 0;
    let current = 0;

     for(let i = 0; i< nums.length; i++){
        if(nums[i] == 1){
            current += 1;
        } else{
            current = 0;
        }
        if(current>max){
           max = current;
        }
     }
     return max;
}

console.log(findConsecutiveOnes([1,1,0,1,1,1]));

