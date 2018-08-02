let number = 123456780000000;

num2str(number)
function num2str(number){

  console.log(thousands([], number, 5).join(' '));
}

function thousands(ans, number, index){
  let thousand = ['hundred', 'thousand', 'million', 'billion','trillion'];
  let num = Math.floor(number/Math.pow(1000, index));
  console.log(num)
  if(index === 0){
    ans.push(convertTrip(num))
    return ans;
  }
  if(num > 0){
    ans.push(convertTrip(num) + ' ' +thousand[index])
  }
  return thousands(ans, number-(num*Math.pow(1000, index)), index-1);
}

function convertTrip(number){
  let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifthteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hund = 'hundred';

  let ans = [];
  let one = number%10;
  let ten = Math.floor(number%100/10);
  let hunds = Math.floor(number/100);
  if(number === 0){
     return '';
  }

  if(hunds >0){
    ans.push(ones[hunds-1]);
    ans.push(hund);
  }

  if(ten === 1){
    ans.push(teens[one]);
  }
  else if(tens === 0 && one > 0){
    ans.push('and');
    ans.push(ones[one-1])
  }
  else{
    ans.push(tens[ten-2]);
    ans.push(ones[one-1])
  }

  return ans.join(' ');
}

//num2str(100);
