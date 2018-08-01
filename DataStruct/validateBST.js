class node {
  constructor(){
    this.value = null,
    this.left = null;
    this.right = null;
  }
  
  validate(){
    if(this === null)
      return true; 
    
    if(this.left === null && this.right === null)
      return true; 
    
    if(this.left != null && this.left.value > this.value)
      return false;
    
    if(this.right != null && this.right.value < this.value)
      return false;
    
    return this.left.validate() && this.right.validate()
  }
}

let head = new node();
head.value = 0;
head.left = new node();
head.right = new node();

head.right.value = 100;
head.left.value = -1;

head.right.right = new node();
head.right.right.value = 1;

console.log(head.validate());
