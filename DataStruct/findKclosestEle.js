let pts = [[4,6],[4,7],[4,4],[2,5],[1,1]];
let origin = [0,0];
let k = 3;

function findDist(pt, origin){
  return Math.sqrt(Math.pow(pt[0]-origin[1],2)+Math.pow(pt[1]-origin[1],2)) 
}

function kthClose(pts, origin, k){
  let kclose = [];
  
  let max = 0;
  
  for(let i = 0; i < pts.length; i ++){
    let dist = findDist(pts[i], origin);
    kclose.push(dist)
  }
  
  kclose.sort()
  console.log(kclose);
}

kthClose(pts, origin, k)


