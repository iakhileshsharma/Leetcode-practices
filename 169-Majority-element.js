function majorityElement(nums){
  let obj = {};
  let lengthTosearch = nums.length /2;

  for(let i = 0; i<nums.length; i++){
    if(!obj[nums[i]]){
      obj[nums[i]] = 0;
    }

    obj[nums[i]]++;

    if(obj[nums[i]] >= lengthTosearch){
      return nums[i];
    }
  }
  return null;
   
}
console.log(majorityElement([3,2,3]));




