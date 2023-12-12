// Given an array nums of n integers where nums[i] is in 
// the range [1, n], return an array of all the integers in the 
// range [1, n] that do not appear in nums.
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

function disappearedNumbers(nums){
    // let finalArr = [];
    // let n = nums.length;
  
    //   nums.sort((a, b) => a-b); 
    //   //let newArr = [...new Set(nums)];
  
  
    //     for(let j = 0; j<nums.length; j++){
    //       let i=j+1;
    //         if(nums.length == 1)
    //         {
    //           finalArr.push(nums[j] +1)
    //         }
    //         else if(i != nums[j])  
    //         {
    //           finalArr.push(i);
    //         }
    //     }
    //    return finalArr;

    let n = nums.length;
    let finalArr=[];
    let obj ={};
     for(let el of nums){
if(!obj[el]){
    obj[el]=1;
}
    }
   
    for(let i=1;i<=n;i++){
if(!obj[i]){
    finalArr.push(i);
}
    }
    return finalArr;
}
console.log(disappearedNumbers([4,3,2,7,8,2,3,1]));