// Code your solution in this file!

function distanceFromHqInBlocks(distance){
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(iDistance, fDistance){
  return Math.abs((fDistance - iDistance) * 264);
}

function calculatesFarePrice(start, final){
  totalDistance = distanceTravelledInFeet(start, final);

  if (totalDistance < 400){
    return 0;
  }else if (totalDistance >= 400 && totalDistance <= 2000 ){
    return (totalDistance - 400) * 0.02;
  }else if (totalDistance > 2000 && totalDistance < 2500){
    return 25.00;
  }else {
    return "cannot travel that far";
  }
}

/*
Given the same starting and ending block as the
previous test (hint hint), return the fare for the
customer. The first four hundred feet are free.
For a distance between 400 and 2000 feet,
the price is 2 cents per foot
(not including 400, which are free!).
Then Scuber charges a flat fare for a
distance over 2000 feet and under 2500 feet.
Finally, Scuber does not allow any rides over
2500 feet - the function returns 'cannot travel
that far' if a ride over 2500 feet is requested.
*/
