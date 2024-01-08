// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3),
//  profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4),
//  profit = 4-1 = 3.

function maxProfit(nums){
    let i = 0;                 
    let TotalProfit = 0;       
    let profit = 0;

      while(i<prices.length){                   
        let j = i+1;                            
            if(prices[i] < prices[j]){
              profit = prices[j] - prices[i];
              TotalProfit = TotalProfit + prof
            
}
      }
    }

console.log(maxProfit([3,3,5,0,0,3,1,4]));
console.log(maxProfit([3,3,5,0,0,3,1,4]));
console.log(maxProfit([3,3,5,0,0,3,1,4]));