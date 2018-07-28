let a = [1,3,5,7,9, 0,0,0,0, 0];

let b = [1,4,6,10,100];

function merge(a, b){
  for(let i = a.length - b.length-1; i >=0 ; i-- ){
    a[i + b.length] =  a[i];
    a[i] = 0;
  }
  
  let apos = b.length;
  let bpos = 0;

  while(bpos != b.length){
    if(b[bpos] < a[apos]){
      a[apos - b.length +bpos] = b[bpos];
      bpos ++;
      console.log(b[bpos])
    }else{
      a[apos - b.length +bpos] = a[apos];
      a[apos] = 0;
      if(apos < a.length-1){
        apos++;
      }else{
        a[a.length -1] = b[bpos];
        bpos++;
      }
    }
  }
  console.log(a);
}

merge(a, b);
