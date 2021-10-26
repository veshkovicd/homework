const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
 document.write('GOOD WORK!!!');
  else
  document.write('Not matched :/ ');