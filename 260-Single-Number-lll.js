// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

function singleNumber(nums){
    let obj = {}; 
    let finalArr = [];            // Empty array for the result, as given in the problem we have to print each element which appear only once in nums. 
  
    for(let i of nums){           // for each loop to iterate through nums
      if(!obj[i]){              
          obj[i] = 1;             // if the given condition in line 10 is true, then equals obj[i] to 1.
      }else{
          obj[i] += 1;          
      }
    }
    
    for(let j = 0; j<nums.length; j++){   // Another for loop with variable j t iterate through nums[] upto the length of nums.
      if(obj[nums[j]] == 1){              // If any of the element in obj is equals to 1, then return that element.
          finalArr.push(nums[j]);          // pushing that element in finalArr with all the elements which appear single time.
      }
    }
    return finalArr;                      // returning the finalArr.
  }

  console.log(singleNumber([1,2,1,3,2,5])); //consoling and calling the function