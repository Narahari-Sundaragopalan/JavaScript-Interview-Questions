// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

function findMaxPrimeFactor(n) {
  let maxPrime = -1;

  while (n % 2 === 0) {
    maxPrime = 2;
    n = n / 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      maxPrime = i;
      n = n / i;
    }
  }

  if (n > 2) {
    maxPrime = n;
  }

  return maxPrime;
}

// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function generalizedGCD(num, arr) {
  // WRITE YOUR CODE HERE
  // Let the first variable be the GCD initially
  var result = arr[0];
  // Loop through the elements to find the GCD
  for (var i = 1; i < num; i++) {
    result = findGCD(arr[i], result);
  }

  return result;
}

//Function to invoke and calculate GCD for each element in array
function findGCD(element, result) {
  // Once the remainder is zero, return the result at that point
  if (element === 0) {
    return result;
  }
  // Continue till the remainder becomes 0
  return findGCD(result % element, element);
}

function cellCompete(states, days) {
  // WRITE YOUR CODE HERE

  // Temporary States to change the states of cells through the days
  // Original states of cells will be preserved in the states variable
  var tempStates = [];
  for (var i = 0; i < 8; i++) {
    tempStates[i] = states[i];
  }

  // As long as the days are greater than 0, keep switching the cells
  while (days) {
    tempStates[0] = states[1] ^ 0;
    tempStates[7] = states[6] ^ 0;

    for (var i = 1; i <= 6; i++) {
      // Cells are switched based on an exclusive OR condition
      tempStates[i] = states[i - 1] ^ states[i + 1];
    }
    for (var i = 0; i < 8; i++) {
      //Copy the changed states to original states variable for the next day
      states[i] = tempStates[i];
    }
    days--;
  }

  //Return the final states list
  return states;
}
