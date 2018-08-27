// Code your solution in this file!
function distanceFromHqInBlocks(number) {
  let blocks = Math.abs(42 - number)
  return blocks
}

function distanceFromHqInFeet(number) {
  let distanceInFeet = Math.abs(42 - number) * 264
  return distanceInFeet
}

function distanceTravelledInFeet(number1, number2) {
  let distanceInFeet = Math.abs(number1 - number2) * 264
  return distanceInFeet
}


function calculatesFarePrice(number1, number2) {
  let tripFare
  switch(true) {
    case Math.abs(number1 - number2) * 264 <= 400:
      tripFare = 0;
      break;
    case Math.abs(number1 - number2) * 264 > 400 && Math.abs(number1 - number2) * 264 <= 2000:
      tripFare = (((number1 - number2) * 264) - 400) * .02;
      break;
    case Math.abs((number1 - number2) * 264) > 2000 && Math.abs(number1 - number2) * 264 <= 2500:
      tripFare = 25;
      break;
    case (number1 - number2) * 264 > 2500:
      tripFare = 'cannot travel that far';
  }
  return tripFare
}
