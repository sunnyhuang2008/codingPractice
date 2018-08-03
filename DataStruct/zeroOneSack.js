let value = [60, 100, 120];
let weight = [10, 20, 30];

function sack(constraint, index){
  if(constraint === 0 || index === value.length -1){
    return 0;
  }
  
  if(constraint < weight[index+1]){
    return sack(constraint, index+1);
  }
  
  return Math.max(value[index+1]+ sack(constraint - 
weight[index+1],index+1), sack(constraint, index+1));
}


console.log(sack(1, -1))
