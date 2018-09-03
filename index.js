function distanceFromHqInBlocks(location) {
  let distance = location - 42
  if (distance < 0){
    return distance * -1
  }
  return distance
};

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location) * 264
};

function distanceTravelledInFeet(starting_point, end_point) {
  return (Math.abs(end_point - starting_point)) * 264
};

function calculatesFarePrice(starting_point, end_point) {
  let distance = distanceTravelledInFeet(starting_point, end_point)
  if  (distance > 400 && distance < 2000 ) {
    return (distance - 400) * .02
  }else if (distance > 2000 && distance <= 2500) {
    return 25
  } else if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance < 400) {
    return 0
  }
}
