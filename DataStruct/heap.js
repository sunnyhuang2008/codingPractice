class heap{
  constructor(){
    this.dataStore = [];
  }
  
  insert(number){
    this.dataStore.push(number);
    let parent = Math.floor((this.dataStore.indexOf(number)-1)/2);
    while(number > this.dataStore[parent] && parent >=0){
      this.swap(this.dataStore.indexOf(number), parent);
      parent = Math.floor((this.dataStore.indexOf(number)-1)/2)
    }
  }
  
  MaxHeapify(number, index){
    let iMax = index;
    let ileft = index*2+1;
    let iright = index*2+2;
    
    if(ileft < this.dataStore.length && number < this.dataStore[ileft]){
      iMax = ileft;
    }
    
    if(iright < this.dataStore.length && number < this.dataStore[iright]){
      iMax = iright;
    }
    
    if(iMax != index){
      this.swap(iMax, index);
      this.MaxHeapify(number, iMax);
    }
    
  }
  
  swap(iMax, index){
      let temp = this.dataStore[iMax];
      this.dataStore[iMax] = this.dataStore[index];
      this.dataStore[index] = temp;
  }
  
  getMax(){
    let max = this.dataStore[0];
    this.dataStore.shift();
    this.MaxHeapify(this.dataStore[0], 0)
    return max;
  }
}

let pile = new heap();
pile.insert(1);

pile.insert(2);

pile.insert(79);

pile.insert(-1);

pile.insert(5);

pile.insert(-100);

pile.insert(80);

console.log(pile.dataStore);

while(pile.dataStore.length !== 0){
  console.log(pile.getMax());
}
