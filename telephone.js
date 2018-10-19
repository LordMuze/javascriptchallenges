function telephoneCheck(str) {
  // Good luck!
  //first to validate whether the string has 10 digits
  let digitsQuantity = /\d/g;
  let findDigitsArr = str.match(digitsQuantity);
  if(findDigitsArr.length > 11 || findDigitsArr.length < 10 || findDigitsArr
  === null){
    return false;
  }else if(findDigitsArr.length === 11){
    if(parseInt(findDigitsArr[0]) !== 1){
      console.log(findDigitsArr[0]);
      console.log("False initial");
      return false;
    }
  }
  let officialTest = /(\d{10})|(\d{4})|(\d{3}[\s|-])|(\(\d{3,4}\)(\s|))|(^[1]\s)|(^[1])/g;
  ///(\d{4})|(\d{3}[\s|-])|(\(\d{3,4}\)\s)|(^[1]\s)|(^[1])/g;
  let bool = str.match(officialTest);
  console.log(bool);
  let result = bool.join('');
  console.log(result);
  if(result != str){
    console.log("False");
    return false;
  }
  //final verification
  return true;
}

telephoneCheck("555-555-5555");
telephoneCheck("1 (757) 622-7382");
console.log("---Failure---");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("1(555)555-5555");



/*
(\d{3}[^\s-])|(\d{3}[\s|-]) /g

(\d{2,4})|(\d{3}[\s|-])|(\(\d{3,4}\))|(^[1])
*/
