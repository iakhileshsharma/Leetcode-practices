// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

function singleNumber(nums){
    let obj = {}; 
    let finalArr = [];            
  
    for(let i of nums){         
      if(!obj[i]){              
          obj[i] = 1;
      }else{
          obj[i] += 1;          
      }
    }
    for(let j = 0; j<nums.length; j++){  
      if(obj[nums[j]] == 1){
          finalArr.push(nums[j]);          
      }
    }
    return finalArr;
  }

  console.log(singleNumber([1,2,1,3,2,5]));