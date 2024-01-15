// Input: nums = [1,2,3,1,1,3]
// Output: 4


function numIdenticalPairs(nums){
    let size=nums.length;
    let  goodpair=0;
  for(let i =0  ;i < size ;i ++){
      for(let j=i+1 ; j <size;j++){
           if(nums[i]===nums[j]) 
           goodpair++;
      }
  }
  return goodpair;
}

console.log(numIdenticalPairs([1,2,3,1,1,3]));
