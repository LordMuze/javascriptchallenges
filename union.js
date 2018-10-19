function uniteUnique(arr) {
  for(let z = 0; z < arguments.length - 1; z++){
  for(let i = 1 + z; i < arguments.length; i++){
    checkAndTwo(arguments[z], arguments[i]);
    console.log("Iterate");
  }
}
  let newArr = [...arguments[0]];
  for(let i = 1; i < arguments.length; i++){
    newArr = newArr.concat(arguments[i]);
  }
  console.log(newArr);

  return arr;
}


function checkAndTwo(arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    for(let v = 0; v < arr2.length; v++){
      if(typeof arr1[i] === []){
        arr1 = arr1.concat(arr1[i]);
      }
      if(typeof arr2[i] === []){
        arr2 = arr2.concat(arr2[i]);
      }
      if(arr1[i] == arr2[v]){
        arr2.splice(arr2.indexOf(arr1[i]), 1); // remove from array 2 since we still need to iterate array 1

        console.log(arr2);
      }
    }
  }
}

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
//[1, 3, 2, 5, 4]

//([1, 3, 2], [1, [5]], [2, [4]])

//[1, 3, 2, [5], [4]]
