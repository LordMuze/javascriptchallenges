function sortArray(arr){
  let temp = 0;
  for(let v = 0; v < arr.length; v++){
  
    for(let i = v + 1; i < arr.length; i++){
      if(arr[v] > arr[i]){
        temp = arr[i];
        arr[i] = arr[v];
        arr[v] = temp;
        console.log(arr);
      }
    }
    
  }
  return arr;
}