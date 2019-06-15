// Swap numbers without using temp variable
// lets assume numA is 5 and numB is 3 or that numA > numB
function swapNumber(numA, numB) {
    numA = numA + numB;  // 5 + 3 = 8
    numB = numA - numB;  // 8 - 3 = 5
    numA = numA - numB;  // 8 - 5 = 3
}