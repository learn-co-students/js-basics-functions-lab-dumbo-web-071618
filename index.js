// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance)*264
}

function distanceTravelledInFeet(num1,num2){
  return Math.abs(num1-num2)*264
}

function calculatesFarePrice(start, destination){
  distance = distanceTravelledInFeet(start,destination)
  let fare = 0
  if (distance >= 400 && distance < 2000){
    fare+=(distance-400)*.02
  } else if (distance >= 2000 && distance < 2500){
    fare += 25
  }else if (distance > 2500){
    return "cannot travel that far"
  }

  return fare
}
