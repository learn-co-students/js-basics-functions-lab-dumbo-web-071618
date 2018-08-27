// Code your solution in this file!
//

function distanceFromHqInBlocks(pickup){
    if(pickup > 42){
        return pickup - 42;
      }
    else if(pickup < 42){
        return 42 - pickup;
      }
    }

function distanceFromHqInFeet(pickup){
  return distanceFromHqInBlocks(pickup)*264
}

function distanceTravelledInFeet(origin, destination){
  if(origin<=destination){
    return (destination - origin) *264;
  }
  else if(destination<=origin){
  return (origin - destination) *264;
  }
}

function calculatesFarePrice(origin,destination){
  var feetTraveled = distanceTravelledInFeet(origin,destination)
  if(feetTraveled > 2500){
    return 'cannot travel that far'
  }
  else if(feetTraveled < 2500 && feetTraveled > 2000){
    return 25
  }
  else if(feetTraveled <=400){
    return 0
  }
  else {
    return (feetTraveled-400)*.02
  }
}
