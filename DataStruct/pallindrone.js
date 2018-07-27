var a = "asdfdsa";

function pal(word){
  let length = Math.floor(word.length/2);
  let firstHalf = word.substr(0,length).split('');
  let secondHalf = word.substr(length+1,length).split('');
  //console.log(word.substr(length+1,length))
  if(word.length%2 === 0){
    firstHalf = word.substr(0,length).split('');
    secondHalf = word.substr(length, length).split('');
    //console.log('here')
  }
  
  //console.log(firstHalf);
  //console.log(secondHalf);
  
  for(let i = 0; i < firstHalf.length; i ++){
    let one = firstHalf[i];
    let two = secondHalf[secondHalf.length-1 -i];
    //console.log(one + ' '+ two)
    
    if(one != two){
      
      console.log('No');
      return;
    }
  }
  console.log('Yes');
  return;
}

pal(a);

