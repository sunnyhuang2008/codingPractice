class queue{
  constructor(){
    this.stack1 = [];
    this.stack2 = [];
  }
  
  enqueue(value){
   return this.stack1.push(value);
  }
  
  dequeue(){
    if(this.stack1.length === 0 && this.stack2.length === 0)
      return 'Nothing';
    
    while(this.stack1.length != 0){
      this.stack2.push(this.stack1.pop());
    }
    
    let result = this.stack2.pop();
    
    while(this.stack2.length != 0){
      this.stack1.push(this.stack2.pop());
    }
    return result;
  }
}

let ihuru = new queue();

ihuru.enqueue(2);
ihuru.enqueue(3);
ihuru.enqueue(5);
ihuru.enqueue(6);

console.log(ihuru.dequeue())
console.log(ihuru.dequeue())
