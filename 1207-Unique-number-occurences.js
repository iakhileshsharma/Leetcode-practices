// Input: arr = [1,2,2,1,1,3]
// Output: true

function uniqueOccurrences(nums){
    let obj = {}
    for(let elem of arr){
        if(!obj[elem]) obj[elem] = 0
        ++obj[elem]
    }
    let occurences = Object.values(obj)

    let set = new Set()
}

console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences());
console.log(uniqueOccurrences());
