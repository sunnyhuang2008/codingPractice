class node{
  constructor(){
    this.value = null;
    this.next = null; 
  }
  
  addNode(value){
    let self = this;
    if(self.next === null){
      let newNode = new node();
      newNode.value = value; 
      self.next = newNode;
      return
    }
    self = self.next;
    self.addNode(value);
    return;
  }
  
  print(){
    let self = this;
    console.log(this.value + ' => ');
    if(this.next === null){
      console.log('null');
      return;
    };
    self = self.next;
    self.print();
  }
  
  length(){
    let self = this;
    if(self.next=== null){
      return 1;
    }
    self = self.next;
    return 1+ self.length();
  }
  
  delete(value){
    let self = this;
    if(value === self.next.value){
      self.next = self.next.next;
      return;
    }
    
    if(self.next === null){
      console.log('No value found');
      return;
    }
    
    if(self.value === value){
      self.value = value; 
      return; 
    };
    
    self = self.next;
    self.delete(value);
  }
  
}


let head = new node();
head.value = 2;
head.addNode(3);
head.addNode(4);
head.addNode(5);

head.print();
head.delete(5);
head.print();
console.log(head.length())

