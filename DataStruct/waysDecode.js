let input = ['12','1234', '2712', '', '2'];

function getWays(input){
  console.log(input)
  if(input.substring(0,1) == 0)
    return 0; 
  
  if(input.length === 1 || input === '')
    return 1;
  
  if(Number(input.substring(0,2)) > 26 || Number(input.substring(0,2)) 
<10)
    return 1 + getWays(input.substring(1));
  
  return getWays(input.substring(0,2)) + getWays(input.substring(2));
}

console.log(getWays(input[0]))
