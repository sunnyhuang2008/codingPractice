let first = "110101101";
let second = "110101";

function add(first, second){
  first = first.split('');
  second = second.split('');
  
  let answer = [0];
  
  for(let i = first.length-1, j = second.length-1; i>=0 || j>=0; i--, j--){
    let a = i >= 0 ? first[i] - '0' : 0;
    let b = j >= 0 ? second[j] - '0': 0;
    //console.log(a + ' '+b);
    if(a + b + answer[answer.length-1] >1){
      answer[answer.length -1] = 0;
      answer.push(1);
    }else{
      answer[answer.length -1] = 1;
      answer.push(0);
    }
   // console.log(answer);
  }
  
  answer.pop();
  console.log(reverse(answer).join(''));
}

function reverse(arr){
  let temp = null;
  let backLen = null;
  
  for(let i =0; i < Math.floor(arr.length/2); i++){
    backLen = arr.length -1-i;
    temp = arr[i];
    arr[i] = arr[backLen];
    arr[backLen] = temp;
  }
  
  return arr;
}

add(first, second)




