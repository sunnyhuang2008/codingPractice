let set = [0,1,2,3,4];

function findSubset(arr, index, subset){
    
    for(let i = index; i < arr.length; i++){
        subset.push(arr[i]);
        //answer.push(subset);
        console.log(subset);
        findSubset(arr, i+1, subset);
        subset.pop();
        
    }
    return; 
}


findSubset(set, 0, [] );
