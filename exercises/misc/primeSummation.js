/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

function summationPrimes() {
  const maxPrime = 10;
  let j = 2;
  let sum = 0;

  for (let i = 2; i < maxPrime; i++) {
    while (i % j !== 0) {
      j++;

      if (i === j) {
        sum += i;
        break;
      }
    }
    j = 2;
  }

  return sum;
}
