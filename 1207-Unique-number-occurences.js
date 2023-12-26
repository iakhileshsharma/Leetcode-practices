// Input: arr = [1,2,2,1,1,3]
// Output: true

function uniqueOccurrences(nums){
    let obj = {};
    
    for(let i of nums){           
        if(!obj[i]){              
            obj[i] = 1;             
        }else{
            obj[i] += 1;          
        }
      }
}

console.log(uniqueOccurrences([1,2,2,1,1,3]));