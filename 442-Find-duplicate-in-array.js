// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Input: nums = [1,1,2]
// Output: [1]

function findDuplicates(nums){
let finalArr = [];        
let obj = {};             
let n = nums.length;      

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









