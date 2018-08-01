let prent = "(()())";

function balancePrent(prent){
  prent = prent.split('');
  let first = [];
  let second =[];
  
  for(let i = 0; i < prent.length; i++){
    let prt = prent[i];
    
    if(prt === ')' && first.length === 0){
      return false;
    }
    
    if(prt === ')'){
      second.push(')');
    }
    
    if(prt === '('){
      first.push('(');
    }
    
    if(first[first.length -1] === '(' && second[second.length-1] === 
')'){
      first.pop();
      second.pop()
    }
    
    //console.log(first)
    
  };
  
  return true;
}

console.log(balancePrent(prent))
