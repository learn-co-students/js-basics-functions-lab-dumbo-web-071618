// Code your solution in this file!
function distanceFromHqInBlocks(int) {
  let distance;
  if (int > 42) {
    distance = int - 42;
  }
  else if (int < 42) {
    distance = 42 - int;
  }
  return distance;
}

function distanceFromHqInFeet(int) {
  let distance = distanceFromHqInBlocks(int);
  let feet = distance * 264;
  return feet;
}

function distanceTravelledInFeet(int1, int2) {
  let distance;
  if (int1 > int2) {
    distance = (int1 - int2) * 264;
  }
  else if (int2 > int1) {
    distance = (int2 - int1) * 264;
  }
  return distance;
}

function calculatesFarePrice(int1, int2) {
  let distance = distanceTravelledInFeet (int1, int2);
  let price;
  let phrase;
  if (distance < 400) {
    price = 0;
  }
  else if (distance > 400 && distance < 2000) {
    price = (distance - 400) * .02;
  }
  else if (distance > 2000 && distance < 2500) {
    price = 25;
  }
  else {
    return phrase = "cannot travel that far";
  }
  return price;
}
