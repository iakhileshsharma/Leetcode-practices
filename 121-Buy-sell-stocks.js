//Creating a function stocks() and calculating the maximum profit from this transaction.

function stocks(prices){
  let i = 0; // Initializing the value of i
  let j = 1; // Initializing the value of j 
  let PerDayPrices = 0;
  let MaxProfit = 0;
      
    while(i<prices.length){ // we will the value of i less than length of given prices[]
        
        if(prices[i] < prices[j]){  // code will run next two lines only if the condition is true
            PerDayPrices = prices[j]-prices[i];
            MaxProfit = Math.max(MaxProfit, PerDayPrices); // checking the maximum value using Math.max()
        }else{
            i = j; // else i will be equal to j's value
        }
    
        j++; // here we increamenting j as well

    } 
    return MaxProfit; // returning the maximum value in maxProfit
}      
console.log(stocks([7,1,5,3,6,4])); // calling the function stocks()
