// Given an array nums of n integers where nums[i] is in 
// the range [1, n], return an array of all the integers in the 
// range [1, n] that do not appear in nums.
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

function disappearedNumbers(nums){
    let n = nums.length;   // As given in the problem length of nums[] will be equal to n. So initilizing n globally.
    let finalArr=[];       // Initilizing epty array as finalArr to store the result.
    let obj ={};           // initilizing empty object to to add elements of nums into this object.  
     for(let el of nums){   // Looping through nums with el
        if(!obj[el]){
          obj[el]=1;        // if the condition is true put obj[el] =1.
        }
    }
   
    for(let i=1;i<=n;i++){   // another for loop tp iterate upto n
        if(!obj[i]){
          finalArr.push(i);  // if it does not matches the element of object push in the final Arr
        }
    }
    return finalArr;         // Return finallArr
}
console.log(disappearedNumbers([4,3,2,7,8,2,3,1]));  // consoling and calling the function
console.log(disappearedNumbers([1,1]));  // consoling and calling the function