// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance < 42) {
    return 42 - distance;
  } else {
    return distance - 42;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(distanceStart, distanceEnd) {
  return Math.abs((distanceEnd - distanceStart) * 264);
}

function calculatesFarePrice(distanceStart, distanceEnd) {
  var distance = distanceTravelledInFeet(distanceStart, distanceEnd);
  if (distance < 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;

  } else  if (distance > 2500) {
    return 'cannot travel that far';

  } else {
    return 25;
  }
}
