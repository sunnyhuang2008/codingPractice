let num = [0];

function addOne(num){
  let last = num.length -1;
  let lastEle = num[last] +1;
  
  if(num.length === 1){
    return lastEle;
  }
  if(lastEle!= 10){
    num[last] = lastEle;
  }else{
    while(lastEle === 10 && last !== 0){
      num[last] = 0;
      last --;
      num[last] = num[last] +1;
      lastEle = num[last];
    }
  }
  
  return num.join('');
}


console.log(addOne(num))
