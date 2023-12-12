function disappearedNumbers(nums){
    let finalArr = [];
    let n = nums.length;
  
      nums.sort((a, b) => a-b); 
      let newArr = [...new Set(nums)];
  
  
        for(let j = 0; j<newArr.length; j++){
          let i=j+1;
            if(newArr.length == 1)
            {
              finalArr.push(newArr[j] +1)
            }
            else if(i != newArr[j])  
            {
              finalArr.push(i);
            }
        }
       return finalArr;
}
console.log(disappearedNumbers([4,3,2,7,8,2,3,1]));