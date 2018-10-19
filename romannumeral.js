function convertToRoman(num) {
 let arrRoman = [];
 while (num > 0){
   let numSubstract = returnNumberIndex(num);
   let index = arrayOne.indexOf(numSubstract);
   arrRoman.push(arrayTwo[index]);
   console.log(num);
   num = num - numSubstract;
 }
 let romanNumerals = arrRoman.join("");
 console.log(romanNumerals);
 return romanNumerals;
}
function returnNumberIndex(num){
  var i = 0;
  if(num === undefined){
    num = 0;
  }
  for(i = 0; i < arrayOne.length; i++){
    /*
    if(num >= 50 && num < 90){
      i = 11; // sends roman numeral L
      break;
    }
    if(num >= 500 && num < 900){
      i = 15; // sends roman numeral D;
      break;
    }*/
    if(i === 0 && num < arrayOne[i + 1]){
      break;
    }
    if(i === arrayOne.length - 1){
      break;
    }

    if(arrayOne[i - 1] < num && arrayOne[i + 1] > num){
      break;
    }
  }
  return arrayOne[i];
}
var arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 50,
   90, 100, 400, 500, 900, 1000];
var arrayTwo = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XL',
  'L',
  'XC',
  'C',
  'CD',
  'D',
  'CM',
  'M'
];
convertToRoman(97);
