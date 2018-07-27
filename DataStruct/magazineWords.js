let board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

function wordSearch(board, word){
  let dictionary = new Map();
  word = word.split('');
  
  board.forEach(row =>{
    row.forEach(char =>{
      if(dictionary.has(char)){
        let count = dictionary.get(char);
        dictionary.set(char, ++count);
      }else{
        dictionary.set(char,1);
      }
    });
  });
  
  for(let i = 0; i < word.length; i ++){
    if(!dictionary.has(word[i]) || dictionary.get(word[i]) === 0){
      //console.log('here')
      return false;
      break;
    }else{
        let count = dictionary.get(word[i]);
        dictionary.set(word[i], --count);
    }
  };
  
  return true;
}

console.log(wordSearch(board, 'SEE'));
