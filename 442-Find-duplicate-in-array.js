// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Input: nums = [1,1,2]
// Output: [1]

function findDuplicates(nums){
    let finalArr = [];        //Initilizing empty array to final result
    let obj = {};             // Initilizing empty object to use hashing concept.
    let n = nums.length;

    for(let el in nums){       // ForEach loop with el variable to iterate through nums.
       if(!obj[el]){
        obj[el] += 1;          // if the condition in line 10 is true, then add +1 value to obj[el].
       }
    }
    for(let i = 0; i< n; i++){
        if(obj[i]){

        }     
    }
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]));  //consoling and calling function.
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([1])); 








