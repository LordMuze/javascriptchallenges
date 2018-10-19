function sumFibs(num) {
  let i = 1;
  let xy = 1;
  let xz = 0;
  let sum = 0;
  while(i <= num){

    if(i % 2 > 0){
      console.log(i);
      sum += i;
      console.log("Sum is " + sum);
    }



    i = xy + xz;
    xz = xy;
    xy = i;

  }
  return sum;
}
// i + xy
// 1 + 0
// 1 + 1
// 2
// 1,1,2,3,5,8
console.log(sumFibs(4000000));
