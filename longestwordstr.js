function findLongestWordLength(str) {
  var arr = str.split(" ");
  var strlength = 0;
  for(let i = 0; i < arr.length; i++){
    if(i == 0){
      strlength = arr[i].length;
    }else{
      if(arr[i].length > strlength){
        strlength = arr[i].length;
      }
    }
  }
  console.log(strlength);
  console.log("It works?");
  return strlength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
