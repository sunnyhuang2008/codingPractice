let nums = [1,2,3,4,5];

function twoSum(array, target){
  let i = 0;
  let j = array.length -1;
  //console.log(array)
  while(i <j){
    if(array[i] + array[j] < target){
      i++;
    }else
    if(array[i] + array[j] > target){
      j--;
    }else{
      return [array[i], array[j]];
    }
  }
  
  return [];
}

function threeSum(arr, target){
  let index = arr.length;
  let twoSumRes = null;
  let tempTarget = null
  
  //console.log(arr)
  
  do{
    index--;
    tempTarget = target - arr[index];
    
    arr.pop();
    //console.log(arr[0]);
    twoSumRes = twoSum(arr, tempTarget);
  }while(twoSumRes.length === 0 && index >= 0);
  
  if(twoSumRes.length === 0){
    console.log('No Result')
  }else{
    console.log(target - tempTarget);
    console.log(twoSumRes);
  }
  
}

threeSum(nums, 6)
