// Input: arr = [1,2,2,1,1,3]
// Output: true

function uniqueOccurrences(nums){
    let obj = {};                     //Initilizing obj to use hash map.
    for(let elem of arr){              // using for each loop
        if(!obj[elem]) obj[elem] = 0
        ++obj[elem]
    }
    let occurences = Object.values(obj); //Initilizing occurences equals to values of obj

    let set = new Set();
    for(let elem of occurences){
        if(set.has(elem)) return false

        set.add(elem)
    }

    return true;
}

console.log(uniqueOccurrences([1,2,2,1,1,3]));
console.log(uniqueOccurrences([1,2]));
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]));
