function findOptimalRoute(forwardRouteArr, returnRouteArr, maxTravelDistance) {
  let routeWithDistance = [];

  for (let i = 0; i < forwardRouteArr.length; i++) {
    let currentForwardRoute = forwardRouteArr[i];
    for (let j = 0; j < returnRouteArr.length; j++) {
      let currenReturnRoute = returnRouteArr[j];
      let distance = currentForwardRoute[1] + currenReturnRoute[1];
      routeWithDistance.push({
        route: [currentForwardRoute[0], currenReturnRoute[0]],
        distance: distance
      });
    }
  }

  routeWithDistance.sort((a, b) => {
    if (a.distance > b.distance) {
      return -1;
    }

    if (a.distance < b.distance) {
      return 1;
    }

    return 0;
  });

  let optimalDistance = routeWithDistance[0].distance;
  outputArray.push(routeWithDistance[0].route);

  for (let i = 1; i < routeWithDistance.length; i++) {
    if (
      routeWithDistance[i].distance <= maxTravelDistance &&
      routeWithDistance[i].distance === optimalDistance
    ) {
      outputArray.push(routeWithDistance[i].route);
    }
  }

  return outputArray;
}
