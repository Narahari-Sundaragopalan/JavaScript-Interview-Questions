// Check if a number is prime

function isPrime(n) {
    if (n === 1) {
        return false;
    }

    for (let x = 2; x * x <=n; x++) {
        if (n % x === 0) {
            return false;
        }
    }

    return true;
}