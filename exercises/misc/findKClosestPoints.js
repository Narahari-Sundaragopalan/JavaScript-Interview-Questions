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
