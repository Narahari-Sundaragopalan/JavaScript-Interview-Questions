//Given a binary number,  write a program that prints 1 if given binary number is a multiple of 3.
//Else prints 0. The given number can be big upto 2^100

function binaryDivisble(binaryNumber) {
  const baseTenNumber = parseInt(binaryNumber, 2);

  if (baseTenNumber % 3 === 0) {
    return true;
  } else {
    return false;
  }
}
