let map = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
           [0,0,0,0,0,0,0,1,1,1,0,0,0],
           [0,1,1,0,1,0,0,0,0,0,0,0,0],
           [0,1,0,0,1,1,0,0,1,0,1,0,0],
           [0,1,0,0,1,1,0,0,1,1,1,0,0],
           [0,0,0,0,0,0,0,0,0,0,1,0,0],
           [0,0,0,0,0,0,0,1,1,1,0,0,0],
           [0,0,0,0,0,0,0,1,1,0,0,0,0]];
 
let moves = [[0, 1], [1, 0], [-1, 0], [0, -1]];

function maxArea(map, moves){
  let track = [];
  map.forEach(row =>{
    let rw = [];
    row.forEach(cell =>{
      rw.push(0);
    });
    track.push(rw);
  });
  
  let max = 0;
  
  
  for(let i = 0; i < map.length; i ++){
    for(let j = 0; j < map[i].length; j ++){
      if(track[i][j] === 1)
        continue;
      
      
      if(map[i][j] === 1){
        //console.log(i+' '+j)
        track[i][j] =1;
        let area = search(i, j, track, map, moves, 1);
       // console.log(area)
        if(max < area)
          max = area;
      }
      
    }
  }
  
  return max;
}

function search(i, j, track, map, moves, area){
    
  for(let x = 0; x < moves.length; x++){
   let ii = i + moves[x][0];
   let jj = j + moves[x][1];

    if(validate(ii, jj, map) && map[ii][jj] === 1 && track[ii][jj] === 0){
      track[ii][jj] = 1;
      area = search(ii, jj, track, map, moves, area +1);
    }
    
  }
  
  return area

}

function validate(i, j, map){
  if(i < map.length && i >=0 && j < map[0].length && j >=0)
    return true;
  return false;
}

console.log(maxArea(map, moves));
