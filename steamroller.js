function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = [];
  for(let i = 0; i < arr.length; i++){

    if(typeof arr[i] != "object"){
      newArr.push(arr[i]);
    }
    if(typeof arr[i] == "object"){
      if(arr[i].constructor !== Array){
        newArr.push(arr[i]);
      }
      if(arr[i].constructor === Array && arr[i].length <= 0){
        newArr.splice(i, 1);
      }
      if(arr[i].constructor === Array && arr[i].length > 0){
          narrowIterate(arr[i], newArr);
      }
    }

  }
  return newArr;
}
function narrowIterate(arrSub, arr){
  let newArrSub = [...arrSub];
  for(let i = 0; i < newArrSub.length; i++){
    if(typeof newArrSub[i]  != "object"){
      arr.push(newArrSub[i]);
    }
    if(typeof newArrSub[i] == "object"  && newArrSub[i].constructor !== Array){
      arr.push(newArrSub[i]);
    }
    if(typeof newArrSub[i] == "object"  && newArrSub[i].constructor === Array
  && newArrSub[i].length <= 0){
        newArrSub.splice(i, 1);
    }
    if(typeof newArrSub[i] == "object" && newArrSub[i].length > 0){
      narrowIterate(newArrSub[i], arr);
    }
  }
}
//simple test case first
//steamrollArray([1, [2], 3, [4, 5]]);
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [2], 3, [4, 5]]));
console.log(steamrollArray([{},1, [2, 4, [5]], 3]));
console.log(steamrollArray([[[1]], [[2]]]));
console.log(typeof {});
console.log("Alphabet test");
console.log(steamrollArray([[["a"]], [["b"]]]));

//let vri = [1, 2, 3, 5];
//let sri = [4, [[3]]];
//let newArr = sri.concat(sri[1]);
//let arrNew = [];
///console.log(arrNew.length < 1);
/*
iterate---
if typeof object
iterate---
.
.
.
if typeof number
return this object
.
.
.
concat object
*/
/*
iterate array
if number
add to new array
if object but null
add to new array
if object and length > 0
iterate object
repeat line 31
else if number
take current surface index
add number to new array
repeat line 32
if end of length
remove object
repeat line 32 if needed
*/
