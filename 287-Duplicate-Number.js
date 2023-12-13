function findDuplicate(nums){
    let obj = {};
    let n = nums.length -1;

    for(let i of nums){
        if(!obj[i]){
            obj[i] = 1;
        }else{
            obj[i] += 1;
        }
    }
    for(let j = 1; j <= n; j++){
        if(obj[j] == 2){
            return j;
        }
    }
}
//console.log(findDuplicate([1,3,4,2,2]));
//console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([1,1]));