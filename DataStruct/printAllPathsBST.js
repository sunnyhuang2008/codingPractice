printAllPaths(){
    this.getAllNodes([])
  }
  
  getAllNodes(previousNodes){
    if(this.left === null && this.right === null)
      console.log(previousNodes);
    
    previousNodes.push(this.value);
    if(this.left!= null)
      this.left.getAllNodes(previousNodes);
    
    if(this.right!= null)
      this.right.getAllNodes(previousNodes);
  }
