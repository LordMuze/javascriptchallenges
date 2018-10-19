function reverseString(str) {
  let arr = str.split("");
  let newarr = [];
  let lengthArr = arr.length/2;
  if(lengthArr % 2 > 0){
    lengthArr = lengthArr - 0.5;
  }else{
    lengthArr = lengthArr - 1;
  }
  let counterLeft = lengthArr;
  let counterRight = lengthArr + 1;

  while(counterLeft >= 0 || counterRight < arr.length){
    if(counterRight < arr.length){
      newarr.unshift(arr.splice(counterRight, 1));
      counterRight--;
    }
    if(counterLeft >= 0){
      newarr.push(arr.splice(counterLeft, 1));
      counterLeft--;
    }
  }
  return newarr.join('');
}

console.log(reverseString("Hello"));
