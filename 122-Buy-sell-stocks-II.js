// Creating a function stocks and calculating the maximum profit.(Meduim level)

function stocks(prices){
    let i = 0;                 // Initializing the value of i
    let TotalProfit = 0;       // initializing variable to calculate final profit.
    let profit = 0;

      while(i<prices.length){                    // i must be lesser than the length of prices[]
        let j = i+1;                             // Initializing j here because we want to increament both i and j at the same time.
            if(prices[i] < prices[j]){
              profit = prices[j] - prices[i];
              TotalProfit = TotalProfit + profit; //if the condition is true it will calculate this and keep the total value.
            }
        i++;                                      // Increamenting i here (code will go back on line 8 from here until the value of i is less than length of prices)
      }
       
    return TotalProfit;                           // Returning the final totalprofit.
}

console.log(stocks([7,1,5,3,6,4]));              // consoling and Calling the function with given nums in problem. 
