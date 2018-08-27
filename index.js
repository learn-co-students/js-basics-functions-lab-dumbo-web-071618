// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  var result = Math.abs(42 - distance);
  return result;
}

function distanceFromHqInFeet(distance){
  result = distanceFromHqInBlocks(distance) * 264;
  return result;
}

function distanceTravelledInFeet(dis1, dis2){
  var result = Math.abs((dis1 - dis2)* 264);
  return result;
}

function calculatesFarePrice(start, destination) {
  var total = distanceTravelledInFeet(start, destination);
  if (total < 400) {
    return 0
  } else if (400 < total && total < 2000) {
    var result = total - 400;
    result = result * 0.02
    return result;
  } else if (2000 < total && total < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
