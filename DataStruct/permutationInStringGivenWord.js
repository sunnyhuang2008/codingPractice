let wordBank = 'abcxyaxbcayxycababccba';

let word = 'abc';

let wordmap = new Map();

word.split('').forEach(letter =>{
  if(wordmap.has(letter)){
    let temp = wordmap.get(letter);
    temp = temp +1; 
    wordmap.set(letter, temp)
  }else{
    wordmap.set(letter,1);
  }
  
});

wordBank = wordBank.split('');

let tempPerm = [];
let beforeHas = 0;
let tempDic = new Map(wordmap);


for(let i = 0; i < wordBank.length; i ++){
  
  if(beforeHas === 0 && wordmap.has(wordBank[i])){
    
    beforeHas = 1;
    let temp = tempDic.get(wordBank[i]);
    
    tempPerm.push(wordBank[i]);
    if(temp == 1){
      tempDic.delete(wordBank[i]);
    }else{
      temp = temp -1;
      tempDic.set(wordBank[i], temp);
    }
  }else
  if(beforeHas === 1 && tempDic.has(wordBank[i])){
    
    tempPerm.push(wordBank[i]);
    
    let temp = tempDic.get(wordBank[i]);
    if(temp == 1){
      tempDic.delete(wordBank[i]);
    }else{
      temp = temp -1;
      tempDic.set(wordBank[i], temp);
    }
  }else{
    beforeHas = 0;
    tempPerm = [];
    tempDic = new Map(wordmap);
  }
  
  if(tempPerm.length === word.length){
    console.log(tempPerm.join(''));
  }
  
  if(tempDic.size === 0){
    beforeHas = 0;
    tempPerm = [];
    tempDic = new Map(wordmap);
  }
   
}
