// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

function findNthPrime() {
  const primes = [2];
  let i = 3;
  let j = 2;
  let maxPrime = 10001;

  while (primes.length < maxPrime) {
    while (i % j !== 0) {
      j++;

      if (i === j) {
        primes.push(i);
        break;
      }
    }
    i++;
    j = 2;
  }

  return primes[primes.length - 1];
}
//6th prime is 13

// Using closures and storing primes of found numbers
function findNthPrimeMemoize(maxPrime) {
    const primes = [2];
    let startingValue = 3;
    let divisor = 2;
    const store = {};

    function memoize() {
        if (store[maxPrime]) {
            console.log("returning from store");
            return store[maxPrime];
        } else {
            while (primes.length < maxPrime) {
                while (startingValue % divisor !== 0) {
                    divisor++;
        
                    if (startingValue === divisor) {
                        primes.push(startingValue);
                        break;
                    }
                }
                startingValue++;
                divisor = 2;
            }
            store[maxPrime] = primes[primes.length - 1];
        
            return store[maxPrime];
        }
    }

    return memoize;
}


