let maze = [
  [1,1,0,0],
  [1,1,1,0],
  [1,0,0,0],
  [1,1,1,1]
];

function findPath(maze){
  let answers = [];
  let moves = [[1,0],[0,1], [-1, 0], [0, -1]];
  let track = [];
  maze.forEach(row => {
    let rw = [];
    row.forEach(entry =>{
      rw.push(0);
    });
    track.push(rw);
  });
  
  track[0][0] = 1;
  path(0,0, track, maze, moves, answers);
  
  let temp =[];
  for(let i = answers.length -1; i >= 0; i --){
    temp.push(answers[i])
  };
  
  return temp;

}

function valid(x, y, maze){
  if(x < maze.length && x >= 0 && y < maze[0].length && y >= 0)
    return true;
  
  return false;
}

function path(x, y, track, maze, moves, answers){
  
  for(let i = 0; i < moves.length; i++){
    let ii = x+ moves[i][0];
    let jj = y+ moves[i][1];
   // console.log(ii + ' '+ jj);
    
    if(valid(ii, jj, maze)){
     // console.log(ii + ' '+ jj);
      if(track[ii][jj] === 0 && maze[ii][jj] === 1){
       // console.log('here')
       //console.log(ii + ' '+ jj)
        if(ii === maze.length -1 && jj === maze[0].length -1){
          //console.log(ii +' '+ jj);
          answers.push([ii, jj]);
          return true;
          break;
        }

        track[ii][jj] = 1;
        if(path(ii, jj, track, maze, moves, answers)){
          answers.push([ii, jj]);
          //console.log(ii +' '+ jj)
          return true;
          break;
        }
        //Don't need to free the path, because we dont cross paths twice. 
        //track[ii][jj] = 0;
      }
    }
  }
  return false;
}

console.log(findPath(maze))


