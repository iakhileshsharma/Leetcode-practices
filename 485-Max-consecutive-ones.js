// Creating function findConsecutiveOnes(nums) to find number of consecutive ones in an given array.
// Input = [1,1,0,1,1,1]
// Output = 3

function findConsecutiveOnes(nums){ // 
    let max = 0;  // Initilizing max and current as a variable to add values later in code.
    let current = 0;

     for(let i = 0; i< nums.length; i++){  // looping through nums[] with variable i
        if(nums[i] == 1){    // Using if else statements to check the different conditions 
            current += 1;    // value of current will increamented only if the conditon is true
        } else{
            current = 0;     // Else it will be zero
        }
        if(current>max){
           max = current;    // if the current value is greater than max then max = current. 
        }
     }
     return max;             // finally returning max after the loop ends
}

console.log(findConsecutiveOnes([1,1,0,1,1,1])); // consoling and calling the function with nums.

