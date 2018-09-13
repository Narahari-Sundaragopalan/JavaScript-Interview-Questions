// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function findLCM(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer = (answer * i) / findGCD(answer, i);
  }

  return answer;
}

function findGCD(element, result) {
  if (element === 0) {
    return result;
  }
  return findGCD(result % element, element);
}
