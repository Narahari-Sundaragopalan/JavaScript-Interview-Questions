/*Amazon SDE Assessment // QUESTION: There are a set of locations, represented by points.
Find the closest locations for the truck with start point (0,0), for the number of deliveries to be made

For eg: if the locations are "[[1,-1], [-2,4], [1,1], [3,2]]"
numDeliveries = 2
Closest locations would be [[1, -1], [1, 1]]
*/

function findKClosest(numDestinations, allLocations, numDeliveries) {
  // Array to store coordinates and distance
  let pointsWithDistance = [];
  const outputArray = [];
  for (let i = 0; i < allLocations.length; i++) {
    let currentLocation = allLocations[i];
    distance = Math.sqrt(
      currentLocation[0] * currentLocation[0] +
        currentLocation[1] * currentLocation[1]
    );
    pointsWithDistance.push({ location: currentLocation, distance: distance });
  }

  pointsWithDistance.sort(function(a, b) {
    if (a.distance > b.distance) {
      return 1;
    }

    if (a.distance < b.distance) {
      return -1;
    }
    return 0;
  });

  for (let i = 0; i < numDeliveries; i++) {
    outputArray.push(pointsWithDistance[i].location);
  }
  return outputArray;
}


// More generic version

const findKClosestPoints = (origin, pointsArray, k) => {
    const output = [];
    const pointsDistanceMap = [];

    const distanceFromOrigin = point => {
        return (
            ( (origin[0] - point[0]) * (origin[0] - point[0]) ) +
            ( (origin[1] - point[1]) * (origin[1] - point[1]) )
        );
    }

    for (let point of pointsArray) {
        pointsDistanceMap.push({
            location: point,
            distance: distanceFromOrigin(point)
        });
    }

    pointsDistanceMap.sort((a, b) => a.distance - b.distance);

    for (let i = 0; i < k; i++) {
        output.push(pointsDistanceMap[i].location);
    }

    return output;
}
  

// console.log(findKClosestPoints([0,0], [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]], 3));