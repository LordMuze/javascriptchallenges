function rot13(str) { // LBH QVQ VG!
  let result = "";
  for(let i = 0; i < str.length; i++){
    let code = str.charCodeAt(i);
    let codeToDecode = code + 13;
    if(code > 90 || code < 65){
      result += str.substr(i, 1);
    }else{
    if(codeToDecode > 90){
      result += String.fromCharCode((codeToDecode - 90) + 65 - 1 );//65 is zero index

    }else{
      result += String.fromCharCode(codeToDecode);
    }
  }

  }
  console.log(result);
  return result;
}
let str = "  ";
console.log(str.charCodeAt(1));
// Change the inputs below to test
rot13("SERR PBQR PNZC");
function  concatenation(){
  let result = "Hello" + " World";
  for(let i = 0; i < 3; i++){
    result += " h";
  }
  console.log(result);
}
//concatenation();
