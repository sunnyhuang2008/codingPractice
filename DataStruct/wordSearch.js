let board = 
[
  ["ABCE"],
  ["SFCS"],
  ["ADEE"],
  ["FGHG"]
];

let word = "FGHG";
let steps = [[0, 1], [1, 0], [-1, 0], [0, -1]];

function findWord(board, word){
  let track = [];
  board = board.map(entry =>{
    return entry[0].split('');
  })
  
  
  board.forEach(row=>{
    let rw = [];
    row.forEach(cell =>{
      rw.push(-1);
    });
    track.push(rw);
  });
  
  
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      if(board[i][j] === word.substring(0,1)){
        track[i][j] = 0;
        if(checkNeighbor(i,j,word.substring(1), track, board)){
          return true; 
          break;
        }
        track[i][j] = -1;
      }
    }
  }
  
  return false;
}

function valid(x, y, board){
  if(x < board.length && x >= 0 && y < board[0].length && y >= 0){
    return true;
  }
  return false;
}

function checkNeighbor(x, y, word, track, board){
  for(let i = 0; i < steps.length; i++){
    let xstp = x+steps[i][0];
    let ystp = y+steps[i][1];
    
    if(valid(xstp, ystp, board)){
      if(track[xstp][ystp] == -1 && board[xstp][ystp] === word.substring(0,1)){
        if(word.substring(0).length === 1){
          return true; 
          break;
        }

        track[xstp][ystp] = 0;

        if(checkNeighbor(xstp,ystp,word.substring(1),track, board)){
          return true;
          break;
        }

      }else{
        track[xstp][ystp] = -1;
      }
    }
  }
  return false;
}

console.log(findWord(board, word))
