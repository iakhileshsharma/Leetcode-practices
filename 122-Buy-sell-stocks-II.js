// Creating a function stocks and calculating the maximum profit

function stocks(prices){
    let i = 0; //initializing the value of i
    let TotalProfit = 0;
    let profit = 0;

      while(i<prices.length){ //i must be lesser than the length of prices[]
        let j = i+1;  // initializing j here because we want to increament both i and j at the same time.
            if(prices[i] < prices[j]){
                profit = prices[j] - prices[i];
                TotalProfit = TotalProfit + profit; //if the condition is true it will calculate this and keep the total value.
            }
        i++; // increamenting i here (code will go back on line 8 from here until the value of i is less than length of prices)
      }
       
      return TotalProfit;// returning the final totalprofit
}

console.log(stocks([7,1,5,3,6,4]));// Calling the function stocks()
