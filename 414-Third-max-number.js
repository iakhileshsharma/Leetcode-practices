// Creating a function thirdMax() and returning the third distinct maximum number in an array(nums[]).
// input = [2,2,3,1]
// 

function thirdMax(nums){
  nums.sort(function (a, b) {
    return a-b;
  }).reverse();

  let newArr = [...new Set(nums)];

    if(newArr.length < 3){
        return newArr[0];
    }else{
        return newArr[2];
    }
    
    
}
console.log(thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]));
