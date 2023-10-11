function PlusOne(digits){
    // Using BigInt for Big numbers, so we can join it
    let num = BigInt(digits.join(""));
    let sum = num + BigInt(1);
    // Converting the whole sum of number into string and splliting it
    let result = sum.toString().split("");
    
    // Using (for loop) to iterate on every index(result[i]) to make it int
    for(let i=0; i<result.length; i++){
        result[i] = parseInt(result[i]);
    }
        
 
    console.log(result);


}
PlusOne([1,2,3]); // Calling the function Plusone()

