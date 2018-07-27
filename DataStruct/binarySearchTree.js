class node {
  constructor(){
    this.value = null;
    this.left = null;
    this.right = null;
  }
  
  addNode(value){
    let self = this;
    if(self.left === null && value < self.value){
      self.left = new node();
      self.left.value = value;
      return;
    }

    if(self.right === null && value > self.value){
      self.right = new node();
      self.right.value = value;
      return;
    }
    
    if(value < self.value){
      self = self.left;
      self.addNode(value);
    }else{
      self = self.right;
      self.addNode(value);
    }
    return;
  }
  
  printIn(head){
    if(head === null){
      return;
    }
    
    this.printIn(head.left);
    console.log(head.value);
    this.printIn(head.right);
    return; 
  }
  
  printLevel(head, level){
    if(head === null){
     // console.log('No such level');
      return;
    }
    
    if(level === 1){
      console.log(head.value);
      return; 
    }
    
    this.printLevel(head.left, level -1);
    this.printLevel(head.right, level -1);
    return;
  }
  
  getHeight(head){
    if(head === null){
      return 0;
    }
    
    let left = this.getHeight(head.left);
    let right = this.getHeight(head.right);
    
    if(left > right){
      return left +1;
    }else{
      return right +1;
    }
  }
  
  getSuccessor(head){
    if(head.left === null){
     return head; 
    }
    
    return this.getSuccessor(head.left);
  }
  
  deleteNode(head, value){
    if(head.value === value){
      if(head.left === null && head.right === null){
        return null;
      }else
      if(head.left === null){
        return head.right;
      }else
      if(head.right === null){
        return head.left;  
      }else{
        let successor = this.getSuccessor(head.right); //found an heir 
        successor.right = this.deleteNode(head.right, successor.value); //get the right branch without the heir
        successor.left = head.left; // give the heir the left branch as well
        return successor //replace the original node
      }
    }
    
    if(value < head.value){
      head.left = this.deleteNode(head.left, value);
    }else{
      head.right = this.deleteNode(head.right, value);
    }
    
    return head;
  }
}



let head = new node();
head.value = 1;
head.addNode(2);
head.addNode(-1);
head.addNode(3);
head.addNode(2.5);
head.addNode(1.5)
head.printIn(head);
console.log('________')
head = head.deleteNode(head, 2);
head.printIn(head);

//console.log(head.getHeight(head));