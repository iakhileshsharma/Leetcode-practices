// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

function findDuplicates(nums){
    let finalArr = [];
    let obj = {};
    let n = nums.length;

    for(let el in nums){
       if(!obj[el]){
        obj[el] += 1;
       }
    }
    for(let i = 0; i< n; i++){

    }
}
console.log(findDuplicates([4,3,2,7,8,2,3,1]));
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([1]));