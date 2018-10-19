function testConcept(str){
  let arr = str.split("");
  let lengthArr = arr.length;
  console.log("Now the string array is  " + arr.length);
  let newStr = arr.splice(2, 1);
  console.log("Now the string array is " + arr.length);
  console.log("Variable for arr.length is now " + lengthArr);
}



testConcept("Hello");
