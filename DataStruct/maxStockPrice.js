let prices = [7, 1, 5, 3, 6, 4, 8];

let max = 0;

function maxProfit(price, index){
  for(let i = index; i >=0; i --){
    if(price[index] - price[i] > max)
      max = price[index]-price[i];
  }
  
  if(index >= 1)
    maxProfit(price, index-1)
  return;
}


maxProfit(prices, prices.length-1)

console.log(max)
