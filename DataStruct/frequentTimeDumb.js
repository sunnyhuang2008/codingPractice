let intervals = ['[6','7)', '[6','9)', '(4','10)','[10','10]','[10','10]','[10','10]'];

function frequent(interval){
  let arr = [];
  let i = 0;
  let max = {
    value: 0,
    points: []
  };
  while(i < interval.length){
    let start = interval[i].split('')[0] === '(' ? Number(interval[i].replace('(', ''))+1 : Number(interval[i].replace('[', ''));
    let end = interval[i+1].split('')[interval[i+1].split('').length-1] === ')' ? Number(interval[i+1].replace(')', ''))-1 : Number(interval[i+1].replace(']', ''));
    
   // console.log(start+' '+end)
    for(let j = start; j <= end; j++){
      //console.log(j)
      if(!arr[j])
        arr[j] = 1;
      else
        arr[j]++
      
      if(max.value < arr[j]){
        max.value = arr[j];
        max.points = [j];
      }else
      if(max.value === arr[j]){
        max.points.push(j);
      }
    }
    
    i = i+2;
  }
  return max;
}

console.log(frequent(intervals))
