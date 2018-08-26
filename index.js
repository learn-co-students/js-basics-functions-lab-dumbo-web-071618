// Code your solution in this file!

function distanceFromHqInBlocks(someValue){

  let hq = 42;

  if (someValue >= hq) {

    return someValue - hq;

  }

  else if (someValue <= hq) {

    return hq - someValue;
  }

}

function distanceFromHqInFeet(someValue){

  return distanceFromHqInBlocks(someValue) * 264;

}


function distanceTravelledInFeet(valueOne, valueTwo){

  if (valueOne >= valueTwo) {

    return (valueOne - valueTwo) * 264;

  }

  else if (valueOne <= valueTwo) {

    return (valueTwo - valueOne) * 264;
  }
}


function calculatesFarePrice(start, end){

    if (distanceTravelledInFeet(start, end) >= 2500){

      return "cannot travel that far";
    }

    else if (distanceTravelledInFeet(start,end) >= 2000) {

      return 25;

    }

    else if (distanceTravelledInFeet(start,end) >= 401) {

      return 2.56

    }

    else if (distanceTravelledInFeet(start,end) <= 400) {

      return 0

    }

  // if (distanceTravelledInFeet >= 2500) {
  //
  //   return 'cannot travel that far'
  //
  // }

}
