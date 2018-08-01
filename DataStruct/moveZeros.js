 function moveZeroes(nums) {
    let i = 0;
    let j = 1;
   
    while(i < nums.length && j < nums.length){
      
        if(nums[i]=== 0){
            while(nums[j] === 0 && j < nums.length-1){
                j++;
            }
            nums[i] = nums[j];
            nums[j] = 0;
        }
            i++;
            j++;
        
    }
  console.log(nums);
}

let nums = [0,0,0,0,0,0,0,0,0,1];
moveZeroes(nums);
