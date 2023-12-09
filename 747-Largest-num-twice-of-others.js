// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

function dominantIndex(nums){
  let arr=[...nums];   //creates a new array by using spread syntax to copy elements from an existing elements.
  arr.sort((a,b)=>a-b);
 if( arr[arr.length-1]>=arr[arr.length-2]*2){
     return nums.indexOf(arr[arr.length-1]);
 }else{
     return -1
 } 

}
console.log(dominantIndex([3,6,1,0])); //consoling
//dominantIndex([3,6,1,0]);