//Given an array of integers nums containing n + 1 integers where each integer 
// is in the range [1, n] inclusive.
// Input: nums = [1,3,4,2,2]  Output: 2

function findDuplicate(nums){
    let obj = {};
    let n = nums.length - 1;           // Initilizing n equals to nums.length -1.
    
    for(let i of nums){                // for each loop to iterate through nums
        if(!obj[i]){
            obj[i] = 1;                //  if the given condition in line 10 is true, then equals obj[i] to 1.
        }else{
            obj[i] += 1;
        }
    }
    for(let j = 1; j <= n; j++){        // Another for loop with variable j t iterate through nums[] upto the length of nums.
        if(obj[j] > 1){                  // if obj[j] is greater than , then return the value of j.
            return j; 
        }
    }

}

console.log(findDuplicate([1,3,4,2,2]));   // consoling and calling the function.
console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([1,1]));