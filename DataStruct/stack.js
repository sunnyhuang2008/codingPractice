class stack{
  constructor(){
    this.top = 0; 
    this.dataStore = [];
  }
  
  push(value){
    return this.dataStore[this.top++] = value;
  }
  
  pop(){
    return this.dataStore[--this.top];
  }
  
  length(){
    return this.top;
  }
  
  isEmpty(){
    if(this.top === 0)
      return 'Yes';
    return 'No';
  }
}

let pile = new stack();

pile.push(1);
pile.push(2);
console.log(pile.pop());
console.log(pile.length())

Evaluate parentacies: 

var exp = "(())())(";
exp = exp.split('');

class stack{
  constructor(){
    this.top = 0;
    this.dataStore = [];
  }
  
  push(value){
    return this.dataStore[this.top ++]= value;
  }
  
  pop(){
    return this.dataStore[--this.top];
  }
  
  isEmpty(){
    return this.top === 0? true: false;
  }
  
  peek(){
    return this.dataStore[this.top-1];
  }
}

function check(exp){
  let first = new stack();
  let second = new stack();
  
  for(let i = 0; i < exp.length; i ++){
    
    if(exp[i] === '(')
      first.push('(')
    else
      second.push(')')
    
    if(first.isEmpty() && !second.isEmpty())
      return 'No';
    
    if(first.peek() === '(' && second.peek() === ')'){
      first.pop();
      second.pop();
    }
  }
 // console.log(second.dataStore);
  //console.log(first.dataStore);
  
  if(first.isEmpty() && second.isEmpty())
    return 'Yes';
  return 'No';
}

console.log(check(exp));

