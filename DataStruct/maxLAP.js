let a = [1,3,5,7,14];

function findLAP(a){
  let count = 0;
  let past = null;
  let res = [];
  
  for(let i = 0; i < a.length; i++){
    for(let j = i+1; j < a.length; j++){
      let slide = a[j] - a[i];
      let past = a[j];
      for(let k = j+1; k < a.length; k++){
        if(a[k] === past+slide){
          count ++;
          past = a[k];
        }
      }
      res.push(count+2);
      count =0;
    }
  }
  
  res.sort((a,b)=>{return b-a});
  console.log(res[0])
}

findLAP(a)
