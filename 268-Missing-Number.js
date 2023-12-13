function missingNumber(nums){
   let obj = {};
   let n = nums.length;
   nums.sort((a,b)=> a-b);

   for(let el of nums){
    if(!obj[el]){
        obj[el] =1;
    }
   }
   for(let i = 0; i<=n; i++){
    if(!obj[i]){
        return i;
    }
   }
}

console.log(missingNumber([3,0,1]));