// Code your solution in this file!
const feetPerBlock = 264

function distanceFromHqInBlocks(block) {
  hq = 42
  return Math.abs(hq - block)
}

function distanceFromHqInFeet(block) {
  return feetPerBlock * distanceFromHqInBlocks(block)
}

function distanceTravelledInFeet(loc1,loc2){
  distance = Math.abs(loc1 - loc2)
  return distance * feetPerBlock
}

function calculatesFarePrice(loc1,loc2){
  distance = distanceTravelledInFeet(loc1,loc2)
  let fare;
  if (distance > 2500){
    fare = 'cannot travel that far'
  } else if (distance > 2000){
    fare = 25;
  } else if (distance <= 2000 && distance >= 400){
    fare = (distance - 400) * .02
  } else if (distance < 400){
    fare = 0
  }

  return fare
}
