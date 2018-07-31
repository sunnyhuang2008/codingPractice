let arr = [1,1,1,2,2,2,2,2,2,2,8,8,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1];

class freqNode{
  constructor(){
    this.value = null; 
    this.freq = 0;
  }
}

class node {
  constructor(){
    this.dataStore = [];
    this.eleMap = new Map();
  };
  
  addNode(value){
    if(this.eleMap.has(value)){
      this.dataStore[this.eleMap.get(value)].freq ++;
      this.heapify(this.eleMap.get(value));
    }else{
      let newNode = new freqNode();
      newNode.value = value;
      newNode.freq = 1;
      this.dataStore.push(newNode);
      this.eleMap.set(value, this.dataStore.length-1)
    }
   // console.log(heap.eleMap)
    
  }
  
  heapify(index){
   // console.log(index)
    let son = this.dataStore[index*2+1];
    let parent = this.dataStore[Math.floor((index-1)/2)]
    let curr = this.dataStore[index];
    
    //console.log(curr);
    if(this.validate(index*2+1) && this.validate(index)){
      if(curr.freq < son.freq){
        this.swap(index, index*2+1);
        this.heapify(index*2+1);
      }
    }
    
    if(this.validate(index) && this.validate(Math.floor((index-1)/2))){
      if(parent.freq < curr.freq){
        this.swap(index, Math.floor((index-1)/2));
        this.heapify(Math.floor((index-1)/2));
      }
    }
    
    return; 
  }
  
  validate(num){
    if(num >= this.dataStore.length || num < 0)
      return false;
    
    return true;
  }
  
  swap(indexA, indexB){
    let temp = this.dataStore[indexA];
    this.dataStore[indexA] = this.dataStore[indexB];
    this.eleMap.set(this.dataStore[indexA].value, indexA);
    this.dataStore[indexB] = temp;  
    this.eleMap.set(this.dataStore[indexB].value, indexB);
  }
  
  pop(){
    let result = this.dataStore[0].value;
    this.dataStore.splice(0,1);
  //  console.log(this.dataStore)
    this.heapify(0);
    return result;
  }
  
  getKth(k){
    for(let i = 0; i < k; i ++){
      console.log(this.pop())
    }
  }
  
}

var heap = new node();

arr.forEach(num => {
  heap.addNode(num);
});

heap.getKth(4);
