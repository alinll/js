function fits(num){
  if(Number.isInteger(num)){
    return 'integer';
  }
  return 'not integer';
}
alert('1 is ' + fits(1));
alert('1.5 is ' + fits(1.5));
alert('-0.5 is ' + fits(-0.5));

const lowerNumber = parseInt(prompt('enter lower number: '));
const higherNumber = parseInt(prompt('enter higher number: '));
alert('the prime numbers between lower number and higher number are: ');
for(let i = lowerNumber; i <= higherNumber; i++){
  let flag = 0;
  for(let j = 2; j < i; j++){
    if(i % j == 0){
      flag = 1;
      break;
    }
  }
  if(i > 1 && flag == 0){
    alert(i);
  }
}