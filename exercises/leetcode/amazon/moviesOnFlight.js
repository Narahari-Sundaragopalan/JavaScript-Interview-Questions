/**
 * You are on a flight and wanna watch two movies during this flight.
 * You are given int[] movie_duration which includes all the movie durations.
 * You are also given the duration of the flight which is d in minutes.
 * Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).
 * Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.
 * 
 * e.g.
 * Input
 *      movie_duration: [90, 85, 75, 60, 120, 150, 125]
 *      d: 250
 * 
 * Output from aonecode.com
 * 
 * [90, 125]
 * 90min + 125min = 215 is the maximum number within 220 (250min - 30min)
**/

const moviesOnFlight = (movieDuration, flightDuration) => {
    const target = flightDuration - 30;
    let closestPairDiff = target;
    let maxDurationPair = [];

    let left = 0;
    let right = movieDuration.length - 1;

    while (right > left) {
        if (Math.abs(target - movieDuration[left] + movieDuration[right]) < closestPairDiff) {
            maxDurationPair = [movieDuration[left], movieDuration[right]];
            closestPairDiff = Math.abs(target - movieDuration[left] + movieDuration[right])
        }

        if (movieDuration[left] + movieDuration[right] > target) {
            right--;
        } else {
            left++;
        }
    }

    return maxDurationPair;
}


/**
 * In Amazon’s sort center, a computer system decides what packages are to be loaded on what trucks. All rooms and spaces are abstracted into space units which is represented as an integer. For each type of truck, they have different space units. For each package, they will be occupying different space units. As a software development engineer in sort centers, you will need to write a method:
 * 
 * Given truck space units and a list of product space units, find out exactly TWO products that fit into the truck. You will also implement an internal rule that the truck has to reserve exactly 30 space units for safety purposes. Each package is assigned a unique ID, numbered from 0 to N-1.
 * 
 * Assumptions:
 *  You will pick up exactly 2 packages.
 *  You cannot pick up one package twice.
 *  If you have multiple pairs, select the pair with the largest package.
 * 
 * Input:
 *      The input to the function/method consists of two arguments :
 *          truckSpace , an integer representing the truck space.
 *          packagesSpace , a list of integers representing the space units occupying by packages.
 * 
 * Output:
 *      Return a list of integers representing the IDs of two packages whose combined space will leave exactly 30 space units on the truck.
 * 
 * Example
 * Input :
 *      truckSpace = 90
 *      packagesSpace = [1,10,25,35,60]
 * 
 * Output : [2,3]
 */
const sortCenter = (truckSpace, packagesSpace) => {
    const availableTruckSpace = truckSpace - 30;
    const packagePair = [];

    let left = 0;
    let right = packagesSpace.length - 1;

    while (right > left) {
        if ((packagesSpace[left] + packagesSpace[right]) === availableTruckSpace) {
            if (packagePair.length) {
                if (packagesSpace[left] === 
                        Math.max(packagesSpace[packagePair[0]], packagesSpace[packagePair[1]], packagesSpace[left])
                        ||
                        packagesSpace[right] === 
                            Math.max(packagesSpace[packagePair[0]], packagesSpace[packagePair[1]], packagesSpace[right])
                    ) {
                        packagePair = [left, right];
                    }
            } else {
                packagePair = [left, right];
            }
        }

        if (packagesSpace[left] + packagesSpace[right] > availableTruckSpace) {
            right--;
        } else {
            left++;
        }
    }

    return packagePair;
}