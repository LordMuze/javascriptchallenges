function largestOfFour(arr) {
  // You can do this!
  let accum = 0;
  let curval = 0;
  let indexLarg = 0;
  let newarr = [];
  for(let i = 0; i < arr.length; i++){
    for(let v = 0; v < arr[i].length; v++){
      if(v == 0){
        accum = arr[i][v];
      }else{
        if(arr[i][v] > accum){
          accum = arr[i][v];
        }
      }
      if(v == arr[i].length - 1){
        newarr.push(accum);
      }
    }
    if(i > 0){
      if(curval > accum){
        accum = curval;
        indexLarg = i;
      }
    }else{
      accum = curval;
    }
  }
  console.log(newarr);
  return newarr;
}

largestOfFour([[4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]]);
