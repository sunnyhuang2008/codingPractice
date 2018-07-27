let prices = [100, 80, 60, 70, 60, 75, 85, 100];


function getDates(prices){
  let stack = [];
  let date = [];
  
  prices.forEach((price,index) =>{
    if(index === 0){
      stack.push(index);
      date.push(1);
    }else{
      
      if(price < prices[stack[stack.length -1]]){
        stack.push(index);
        date.push(1);
      }else{
        while(price >= prices[stack[stack.length -1]]){
          stack.pop();
        }
        
        date.push(stack.length == 0? index: index - stack[stack.length -1]);
        stack.push(index)
      }
    
    }
  });
  console.log(date); 
}

getDates(prices);
