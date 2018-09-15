/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function pythagoreanTriplet() {
  const sum = 1000;
  let product = 0;

  for (let a = 1; a <= sum / 3; a++) {
    for (let b = a + 1; b <= sum / 2; b++) {
      let c = sum - a - b;
      if (c * c === a * a + b * b) {
        product = a * b * c;
        break;
      }
    }
  }

  return product;
}
