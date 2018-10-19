function reverseString(str) {
  let arr = str.split("");
  let newArr = [];
  let op = arr.length % 2;
  let opp = arr.length/2;
  console.log(op);
  console.log(arr.length);
  if(op > 0){
    let tempOne = 0;
    let tempTwo = 0;
    for(let i = 0; i < (opp + 0.5); i++){
      tempOne = arr.shift(); // front
      tempTwo = arr.pop(); // back
      newArr.unshift(tempTwo); // back pshed to front
      newArr.push(tempOne); // front pushed to back

    }
  }else{
    for(let i = 0; i < opp - 1; i++){
      let tempOneNew = arr.shift(); // front
      let tempTwoNew = arr.pop(); // back
      newArr.unshift(tempTwoNew); // back pshed to front
      newArr.push(tempOneNew); // front pushed to back
    }
    console.log(opp);
  }
  str = newArr.toString();
  console.log(str);

  return str;
}

reverseString("east"); //olleh
