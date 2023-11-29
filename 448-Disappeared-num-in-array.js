// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

function disappearedNum(nums){
    let finalArr = [];
    let n = nums.length;
    let i = 1;


    // nums.sort((a, b) => a-b); 
    // let newArr = [...new Set(nums)];

     
    //     for(let j = 0; j<newArr.length; j++){
    //         i = j+1
    //        if(newArr.length == 1)
    //        {
    //         finalArr.push(newArr[j] +1)
    //        }
    //        else if(i != newArr[j])
    //        {   
    //         finalArr.push(i);
    //        }
        
    // }
    // return finalArr;

}
console.log(disappearedNum([4,3,2,7,8,2,3,1]));
console.log(disappearedNum([1,1]));
console.log(disappearedNum([2,2]));
//disappearedNum([4,3,2,7,8,2,3,1]);