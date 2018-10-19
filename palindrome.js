function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  var arr = str.match(/[A-Za-z0-9]/g);
  console.log(arr);
  var i = 0, v = arr.length - 1;
  while(i < v){
    if(i === v){
      break;//just in case
    }
    if(arr[i] !== arr[v]){
      return false;
    }
    i++;
    v--;
  }
  return true;
}
function test(){
  console.log("2A3*3a2".toLowerCase());
}


//palindrome("eye");
console.log(palindrome("eye"));
