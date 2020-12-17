// dichiarazione variabili
var counter = 0;

// ciclo
for (i = 0; i < 100; i++) {
  console.log((counter++) + 1);

  if (counter%3 === 0 && counter%5 !== 0) {
    console.log('Fizz');
  }

  if (counter%5 === 0 && counter%3 !==0) {
    console.log('Buzz');
  }

  if (counter%3 === 0 && counter%5 === 0) {
    console.log('FizzBuzz');
  }
}
