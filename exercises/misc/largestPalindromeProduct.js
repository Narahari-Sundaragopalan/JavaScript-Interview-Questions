// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.
// for any n digit number calculate upperLimit and lowerLimit using below loop
/*
for (let i = 1; i <= n; i++) {
  upperLimit *= 10;
  upperLimit += 9;
}
lowerLimit = 1 + Math.floor(upperLimit / 10);
*/

function largestPalindromeProduct() {
  let upperLimit = 999;
  let maxProduct = 0;
  while (upperLimit > 100) {
    for (let lowerLimit = 999; lowerLimit > 100; lowerLimit--) {
      let product = upperLimit * lowerLimit;
      let reversed =
        parseInt(
          product
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(product);
      if (product === reversed) {
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
    }
    upperLimit--;
  }

  return maxProduct;
}
