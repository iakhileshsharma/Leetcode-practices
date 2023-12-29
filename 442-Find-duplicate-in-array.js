// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Input: nums = [1,1,2]
// Output: [1]

function findDuplicates(nums){
let finalArr = [];              // Initilizing finalArr as empty array to store final result.
let obj = {};             
let n = nums.length;            // Initilizing n variable equals to length of the nums as given in a problem nums are in the range of [1,n]

    for(let el of nums){        // Foreach loopwith el variable to iterate through nums.
        if(!obj[el]){
            obj[el] = 1;        // if obj[el] is not there then equals it to 1.      
        }else{
            obj[el] += 1;       // if obj[el] is already exists in the obj then adds one more to value of that key.
        }
    }
    for(let i = 1; i<= n; i++){   // for loop to iterate through upto n with i variable.
        if(obj[i] > 1){           // if the obj[i] is greater than 1 then excution will go in the next line.
            finalArr.push(i);     // if the condition is true then add the value of i into finalArr 
        }   
    }
    return finalArr;              // return finalArr outside the for loop
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]));  // consoling and caling the function with multiple edge cases given the problem.
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([2,2]));









