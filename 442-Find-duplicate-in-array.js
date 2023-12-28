// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Input: nums = [1,1,2]
// Output: [1]

function findDuplicates(nums){
let finalArr = [];              // Initilizing finalArr as empty array to store final result.
let obj = {};             
let n = nums.length;            // Initilizing n variable equals to length of the nums as given in a problem nums are in the range of [1,n]

    for(let el of nums){     
        if(!obj[el]){
            obj[el] = 1;                
        }else{
            obj[el] += 1;
        }
    }
    for(let i = 1; i<= n; i++){
        if(obj[i] > 1){
            finalArr.push(i);
        }   
    }
    return finalArr;
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([2,2]));









