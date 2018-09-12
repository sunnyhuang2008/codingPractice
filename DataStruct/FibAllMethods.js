function fib(n){
  if(n === 0 || n === 1){
   // console.log(1);
    return 1;
  }
  
  return fib(n-1) + fib(n-2);

}


//console.log(fib(0));


function fibTo(a){

  for(let i = 0; i < a; i++){
    console.log(fib(i));
  }
}

//fibTo(20);

fib2Iter(10);


function fibIter(n){
  let pp = 1;
  
  let p = 0;
  
  if(n === 0)
    console.log(pp);
  
  let ans = null;
  
  for(let i = 1; i <= n; i++){
    console.log(pp + p);
    ans = pp +p;
    pp = p;
    p = ans;
  }
}

function fib2Iter(n){
  let rec = [0, 1];
  
  if(n === 0 || n === 1)
    console.log(1);
  else{
    console.log(1);
    
    for(let i = 2; i <= n; i++){
      console.log(rec[i-1] + rec[i-2]);
      rec.push(rec[i-1] + rec[i-2]);
    }
  
  }
  
}
