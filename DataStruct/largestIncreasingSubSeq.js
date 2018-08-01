let arr =  [0, 4, 5, 0, 1, 2, -1,3,4,5,6,3,4,5];

function incSub(arr){
  let max = [];
  
  let temp =[];
  
  //temp.push(arr[0]);
  
  for(let i = 1; i < arr.length; i ++){
    if(arr[i] >= arr[i-1]){
      
     // console.log(arr[i])
      
      if(temp.length === 0)
        temp.push(arr[i-1]);
      
      temp.push(arr[i]);
      
    }else{
      
      if(temp.length > max.length){
        max = temp;
      }
      temp = [];
      
    }
  }
  
  if(temp.length > max.length){
      max = temp;
  }
  
  console.log(max);
}

incSub(arr);
