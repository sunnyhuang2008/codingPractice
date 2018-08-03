let a = [2,3,1,7,8];
let b = [3,6,7];


function maxDot(a, b){
  let dp = [];

  for(let i =0; i < b.length+1; i++){
    let row = [];
    for(let j =0; j < a.length+1; j++){
      row.push(0);
    }
    dp.push(row);
  }
  
  for(let i =1; i <= b.length; i++){
    for(let j =i; j <= a.length; j++){
      dp[i][j] = Math.max((dp[i-1][j-1] + (a[j-1]*b[i-1])), dp[i][j-1])
    }
  }
  
  return dp[b.length][a.length]
}

console.log(maxDot(a,b));
