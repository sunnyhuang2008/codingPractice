let coins = [1,2,3];

function change(coins, amount, index){
  if(amount === 0){
    return 1;
  }
  
  if(amount < coins[index]){
    return change(coins, amount, index +1)
  }
  
  if(amount >= 0 && index >= coins.length){
    return 0; 
  }
  
  return change(coins, amount - coins[index], index) + change(coins, 
amount, index+1)
}

console.log(change(coins, 5, 0))
