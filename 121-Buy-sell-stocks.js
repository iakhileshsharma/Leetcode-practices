//Creating a function stocks() and calculating the maximum profit from this transaction.

function stocks(prices) {
  let i = 0; // Initializing the value of i
  let j = 1; // Initializing the value of j 
  let PerDayPrices = 0;
  let MaxProfit = 0;
      
    while(i < prices.length) { // We will the value of i less than length of given prices[]
                                 // Not using for loop because of space and time complexity.
        if(prices[i] < prices[j]){  // Code will run next two lines only if the condition is true
            PerDayPrices = prices[j]-prices[i];
            MaxProfit = Math.max(MaxProfit, PerDayPrices); // Checking the maximum value using Math.max()
        }
        else{
            i = j; // Else i will be equal to j's value.
        }
    
        j++; // Here we increamenting j as well.

    } 
    return MaxProfit; // Returning the maximum value in maxProfit
}      
console.log(stocks([7,1,5,3,6,4])); // Calling the function stocks()
