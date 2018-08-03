  probeLongestPath(head){
    if(head === null)
      return 0;
    
    let left = this.probeLongestPath(head.left);
    let right = this.probeLongestPath(head.right);
    
    if(left > right){
      return 1+ this.probeLongestPath(head.left);
    }else{
      return 1+ this.probeLongestPath(head.right);
    }
      
  }
  
  longestPath(head, stack){
    if(head === null)
      return 0;
    
    let left = this.probeLongestPath(head.left);
    let right = this.probeLongestPath(head.right);
    
    if(left > right){
      stack.push(head.value);
      return 1+ this.longestPath(head.left, stack);
    }else{
      stack.push(head.value);
      return 1+ this.longestPath(head.right, stack);
    }
      
  }
  
  treelongestPath(){
    let lStack = [];
    let rStack = [];
    let lLeng = this.longestPath(this.left, lStack);
    let rLeng = this.longestPath(this.right, rStack);
    
    console.log(lLeng + ' ' + rLeng)
    console.log(lStack);
    console.log(rStack);
  }
