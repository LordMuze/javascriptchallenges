function dropElements(arr, func) {
  // Drop them elements.
  for(let i = 0; i < arr.length; i++){
    let x = func(arr[i]);
    if(x === true){
      break;
    }
    if(x === false){
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
  return arr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});

/*
iterate
if not meet condition
drop
if does meet condition
true and stop iteration
*/
