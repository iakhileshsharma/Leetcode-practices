// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".

function findRestaurant(list1, list2){
 let i= 0;
 let indexSum = 0;
 let maxIndex = 0;
    while(i<list1.length){
        for(let j = 0; j,list2.length; j++){
            if(list1[i] == list2[j]){
               indexSum = i + j;
            }
        }
    i++;
    }
}

console.log(findRestaurant());